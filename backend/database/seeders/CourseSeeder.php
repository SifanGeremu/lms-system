<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $instructor = User::factory()->create([
            'name' => 'Sample Instructor',
            'email' => 'instructor@example.com',
        ]);
        $instructor->assignRole('instructor');

        $categories = Category::query()->pluck('id');
        if ($categories->isEmpty()) {
            return;
        }

        Course::factory()
            ->count(5)
            ->published()
            ->state(fn () => [
                'instructor_id' => $instructor->id,
                'category_id' => $categories->random(),
            ])
            ->create();

        Course::factory()
            ->count(3)
            ->state(fn () => [
                'instructor_id' => $instructor->id,
                'category_id' => $categories->random(),
                'published_at' => null,
            ])
            ->create();
    }
}
