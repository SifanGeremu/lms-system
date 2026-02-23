<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\EnrollCourseRequest;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function enroll(EnrollCourseRequest $request, Course $course): JsonResponse
    {
        $user = $request->user();

        if (! $course->published_at) {
            return response()->json([
                'success' => false,
                'message' => 'Only published courses can be enrolled in.',
                'data' => null,
            ], 422);
        }

        $enrollment = Enrollment::query()->firstOrCreate(
            [
                'user_id' => $user->id,
                'course_id' => $course->id,
            ],
            [
                'enrolled_at' => now(),
                'progress_percentage' => 0,
                'completed_at' => null,
            ]
        );

        return response()->json([
            'success' => true,
            'message' => $enrollment->wasRecentlyCreated ? 'Enrollment created successfully.' : 'Already enrolled.',
            'data' => [
                'id' => $enrollment->id,
                'course_id' => $enrollment->course_id,
                'user_id' => $enrollment->user_id,
                'enrolled_at' => $enrollment->enrolled_at?->toISOString(),
                'progress_percentage' => $enrollment->progress_percentage,
                'completed_at' => $enrollment->completed_at?->toISOString(),
            ],
        ], $enrollment->wasRecentlyCreated ? 201 : 200);
    }

    public function show(Request $request, Course $course): JsonResponse
    {
        $enrollment = Enrollment::query()
            ->where('user_id', $request->user()->id)
            ->where('course_id', $course->id)
            ->first();

        if (! $enrollment) {
            return response()->json([
                'success' => true,
                'message' => 'Enrollment status fetched successfully.',
                'data' => [
                    'status' => 'not_enrolled',
                    'progress_percentage' => 0,
                    'completed_at' => null,
                ],
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Enrollment status fetched successfully.',
            'data' => [
                'status' => 'enrolled',
                'progress_percentage' => $enrollment->progress_percentage,
                'completed_at' => $enrollment->completed_at?->toISOString(),
            ],
        ]);
    }
}
