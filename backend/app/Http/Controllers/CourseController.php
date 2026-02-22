<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseEditResource;
use App\Http\Resources\CourseListResource;
use App\Http\Resources\CourseOverviewResource;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $query = Course::query()
            ->with(['instructor:id,name', 'category:id,name,slug'])
            ->whereNotNull('published_at');

        if ($search = $request->string('search')->toString()) {
            $query->where(function ($builder) use ($search) {
                $builder->where('title', 'like', '%'.$search.'%')
                    ->orWhere('description', 'like', '%'.$search.'%');
            });
        }

        if ($category = $request->input('category')) {
            if (is_numeric($category)) {
                $query->where('category_id', (int) $category);
            } else {
                $query->whereHas('category', function ($builder) use ($category) {
                    $builder->where('slug', $category);
                });
            }
        }

        $perPage = min((int) $request->input('per_page', 10), 50);

        return CourseListResource::collection(
            $query->latest('published_at')->paginate(max(1, $perPage))
        );
    }

    public function show(string $slug): CourseOverviewResource
    {
        $course = Course::query()
            ->with(['instructor:id,name,email', 'category:id,name,slug'])
            ->where('slug', $slug)
            ->whereNotNull('published_at')
            ->firstOrFail();

        return new CourseOverviewResource($course);
    }

    public function myCourses(Request $request)
    {
        $user = $request->user();
        $perPage = min((int) $request->input('per_page', 10), 50);

        $courses = Course::query()
            ->with(['instructor:id,name', 'category:id,name,slug'])
            ->whereHas('enrollments', function ($builder) use ($user) {
                $builder->where('user_id', $user->id);
            })
            ->whereNotNull('published_at')
            ->latest('published_at')
            ->paginate(max(1, $perPage));

        return CourseListResource::collection($courses);
    }

    public function store(StoreCourseRequest $request): JsonResponse
    {
        $course = Course::create([
            ...$request->validated(),
            'instructor_id' => $request->user()->id,
            'published_at' => null,
        ]);

        return (new CourseEditResource($course))
            ->response()
            ->setStatusCode(201);
    }

    public function myDrafts(Request $request)
    {
        $courses = Course::query()
            ->where('instructor_id', $request->user()->id)
            ->whereNull('published_at')
            ->latest('updated_at')
            ->paginate(10);

        return CourseEditResource::collection($courses);
    }

    public function edit(Request $request, int $id): CourseEditResource
    {
        $course = Course::query()->findOrFail($id);

        $this->authorizeCourseAccess($request->user(), $course);

        return new CourseEditResource($course);
    }

    public function update(UpdateCourseRequest $request, int $id): CourseEditResource
    {
        $course = Course::query()->findOrFail($id);

        $this->authorizeCourseAccess($request->user(), $course);

        $course->update($request->validated());

        return new CourseEditResource($course->refresh());
    }

    public function destroy(Request $request, int $id): JsonResponse
    {
        $course = Course::query()->findOrFail($id);

        $this->authorizeCourseAccess($request->user(), $course);

        $course->delete();

        return response()->json(['message' => 'Course deleted']);
    }

    public function publish(Request $request, int $id): CourseEditResource
    {
        $course = Course::query()->findOrFail($id);

        $this->authorizeCourseAccess($request->user(), $course);

        $course->published_at = $course->published_at ? null : now();
        $course->save();

        return new CourseEditResource($course->refresh());
    }

    private function authorizeCourseAccess($user, Course $course): void
    {
        if ($user->hasRole('admin')) {
            return;
        }

        abort_unless(
            $user->hasRole('instructor') && $course->instructor_id === $user->id,
            403,
            'You are not allowed to manage this course.'
        );
    }
}
