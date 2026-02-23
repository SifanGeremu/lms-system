<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CompleteLessonRequest;
use App\Http\Requests\StoreLessonRequest;
use App\Http\Requests\UpdateLessonRequest;
use App\Http\Resources\LessonResource;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Lesson;
use App\Models\LessonCompletion;
use App\Models\Module;
use App\Models\User;
use App\Services\EnrollmentProgressService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ModuleLessonController extends Controller
{
    public function index(Request $request, Module $module): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $module->course);

        $lessons = $module->lessons()->orderBy('order')->get();

        return response()->json([
            'success' => true,
            'message' => 'Lessons fetched successfully.',
            'data' => LessonResource::collection($lessons),
        ]);
    }

    public function store(StoreLessonRequest $request, Module $module): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $module->course);

        $validated = $request->validated();
        $nextOrder = (int) $module->lessons()->max('order') + 1;

        $lesson = $module->lessons()->create([
            'title' => $validated['title'],
            'type' => $validated['type'],
            'content' => $validated['content'],
            'description' => $validated['description'] ?? null,
            'order' => $validated['order'] ?? $nextOrder,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Lesson created successfully.',
            'data' => new LessonResource($lesson),
        ], 201);
    }

    public function update(UpdateLessonRequest $request, Lesson $lesson): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $lesson->module->course);

        $lesson->update($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Lesson updated successfully.',
            'data' => new LessonResource($lesson->refresh()),
        ]);
    }

    public function destroy(Request $request, Lesson $lesson): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $lesson->module->course);

        $lesson->delete();

        return response()->json([
            'success' => true,
            'message' => 'Lesson deleted successfully.',
            'data' => null,
        ]);
    }

    public function show(Request $request, Lesson $lesson): JsonResponse
    {
        $user = $request->user();
        $course = $lesson->module->course;

        $enrollment = $this->findEnrollmentForPublishedCourse($user->id, $course);
        if (! $enrollment) {
            abort(403, 'You must be enrolled in a published course to view this lesson.');
        }

        return response()->json([
            'success' => true,
            'message' => 'Lesson fetched successfully.',
            'data' => [
                'id' => $lesson->id,
                'title' => $lesson->title,
                'type' => $lesson->type,
                'content' => $lesson->content,
                'description' => $lesson->description,
            ],
        ]);
    }

    public function complete(
        CompleteLessonRequest $request,
        Lesson $lesson,
        EnrollmentProgressService $progressService
    ): JsonResponse {
        $user = $request->user();
        $course = $lesson->module->course;

        $enrollment = $this->findEnrollmentForPublishedCourse($user->id, $course);
        if (! $enrollment) {
            abort(403, 'You must be enrolled in a published course to complete lessons.');
        }

        LessonCompletion::query()->firstOrCreate(
            [
                'enrollment_id' => $enrollment->id,
                'lesson_id' => $lesson->id,
            ],
            [
                'completed_at' => now(),
            ]
        );

        $updatedEnrollment = $progressService->recalculate($enrollment);

        return response()->json([
            'success' => true,
            'message' => 'Lesson marked as completed.',
            'data' => [
                'lesson_id' => $lesson->id,
                'progress_percentage' => $updatedEnrollment->progress_percentage,
                'completed_at' => $updatedEnrollment->completed_at?->toISOString(),
            ],
        ]);
    }

    private function authorizeCourseOwnerOrAdmin(User $user, Course $course): void
    {
        $ownerId = (int) ($course->instructor_id ?? $course->user_id);

        if ($user->hasRole('admin') || $ownerId === (int) $user->id) {
            return;
        }

        abort(403, 'You are not allowed to manage lessons for this course.');
    }

    private function findEnrollmentForPublishedCourse(int $userId, Course $course): ?Enrollment
    {
        if (! $course->published_at) {
            return null;
        }

        return Enrollment::query()
            ->where('user_id', $userId)
            ->where('course_id', $course->id)
            ->first();
    }
}
