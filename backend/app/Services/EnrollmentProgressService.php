<?php
declare(strict_types=1);

namespace App\Services;

use App\Models\Enrollment;
use App\Models\Lesson;

class EnrollmentProgressService
{
    public function recalculate(Enrollment $enrollment): Enrollment
    {
        $totalLessons = Lesson::query()
            ->whereHas('module', function ($query) use ($enrollment): void {
                $query->where('course_id', $enrollment->course_id);
            })
            ->count();

        $completedLessons = $enrollment->lessonCompletions()->count();

        $progress = $totalLessons === 0
            ? 0.0
            : round(($completedLessons / $totalLessons) * 100, 2);

        $enrollment->progress_percentage = $progress;
        $enrollment->completed_at = ($totalLessons > 0 && $completedLessons >= $totalLessons) ? now() : null;
        $enrollment->save();

        return $enrollment->refresh();
    }
}
