<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreModuleRequest;
use App\Http\Requests\UpdateModuleRequest;
use App\Http\Resources\ModuleResource;
use App\Models\Course;
use App\Models\Module;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CourseModuleController extends Controller
{
    public function index(Request $request, Course $course): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $course);

        $modules = $course->modules()
            ->withCount('lessons')
            ->orderBy('order')
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Modules fetched successfully.',
            'data' => ModuleResource::collection($modules),
        ]);
    }

    public function store(StoreModuleRequest $request, Course $course): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $course);

        $validated = $request->validated();
        $nextOrder = (int) $course->modules()->max('order') + 1;

        $module = $course->modules()->create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'order' => $validated['order'] ?? $nextOrder,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Module created successfully.',
            'data' => new ModuleResource($module),
        ], 201);
    }

    public function update(UpdateModuleRequest $request, Module $module): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $module->course);

        $module->update($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Module updated successfully.',
            'data' => new ModuleResource($module->refresh()),
        ]);
    }

    public function destroy(Request $request, Module $module): JsonResponse
    {
        $this->authorizeCourseOwnerOrAdmin($request->user(), $module->course);

        $module->delete();

        return response()->json([
            'success' => true,
            'message' => 'Module deleted successfully.',
            'data' => null,
        ]);
    }

    private function authorizeCourseOwnerOrAdmin(object $user, Course $course): void
    {
        $ownerId = (int) ($course->instructor_id ?? $course->user_id);

        if ($user->hasRole('admin') || $ownerId === (int) $user->id) {
            return;
        }

        abort(403, 'You are not allowed to manage modules for this course.');
    }
}
