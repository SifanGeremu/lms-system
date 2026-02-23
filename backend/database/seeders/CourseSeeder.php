<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $instructor = User::query()->firstOrCreate(
            ['email' => 'instructor@example.com'],
            [
                'name' => 'Sample Instructor',
                'password' => Hash::make('password'),
            ]
        );
        $instructor->syncRoles(['instructor']);

        $categories = Category::query()->pluck('id');
        if ($categories->isEmpty()) {
            return;
        }

        $categoryBySlug = Category::query()->pluck('id', 'slug');

        $publishedCourses = [
            [
                'title' => 'React for Product Teams: Build and Ship a Learning Dashboard',
                'description' => 'Design and build a production-ready React dashboard with routing, state management, reusable components, and release checklists.',
                'category_slug' => 'web-development',
            ],
            [
                'title' => 'Data Analytics with Python: From CSV to Insight',
                'description' => 'Use pandas, visualization, and practical analysis workflows to turn business questions into clear data-backed recommendations.',
                'category_slug' => 'data-science',
            ],
            [
                'title' => 'UI Systems for SaaS: Figma to Frontend Handoff',
                'description' => 'Create scalable design systems, wireframes, and polished UI specs that developers can implement without guesswork.',
                'category_slug' => 'ui-ux-design',
            ],
            [
                'title' => 'DevOps Foundations: CI/CD and Cloud Deployment Basics',
                'description' => 'Set up practical CI/CD pipelines, deployment workflows, and release monitoring for small engineering teams.',
                'category_slug' => 'devops',
            ],
            [
                'title' => 'Growth Marketing for Digital Products',
                'description' => 'Plan campaigns, define funnels, and measure performance across channels to support product-led growth.',
                'category_slug' => 'digital-marketing',
            ],
            [
                'title' => 'Laravel API Engineering: Secure, Test, and Scale',
                'description' => 'Build robust Laravel APIs using request validation, resources, auth, and clean architecture patterns for maintainable systems.',
                'category_slug' => 'web-development',
            ],
        ];

        $draftCourses = [
            [
                'title' => 'Advanced SQL for Product Analytics',
                'description' => 'A hands-on draft focused on real reporting scenarios, query optimization, and cohort analysis.',
                'category_slug' => 'data-science',
            ],
            [
                'title' => 'Design Leadership for Early-Stage Teams',
                'description' => 'A draft course on design critique rituals, team velocity, and strategic product communication.',
                'category_slug' => 'ui-ux-design',
            ],
            [
                'title' => 'Practical Kubernetes for Web Applications',
                'description' => 'An upcoming course that introduces clusters, deployments, scaling, and service reliability for developers.',
                'category_slug' => 'devops',
            ],
        ];

        foreach ($publishedCourses as $index => $courseData) {
            Course::query()->updateOrCreate(
                ['slug' => Str::slug($courseData['title'])],
                [
                    'instructor_id' => $instructor->id,
                    'category_id' => $categoryBySlug[$courseData['category_slug']] ?? $categories->random(),
                    'title' => $courseData['title'],
                    'description' => $courseData['description'],
                    'thumbnail' => null,
                    'published_at' => now()->subDays($index + 1),
                ]
            );
        }

        foreach ($draftCourses as $courseData) {
            Course::query()->updateOrCreate(
                ['slug' => Str::slug($courseData['title'])],
                [
                    'instructor_id' => $instructor->id,
                    'category_id' => $categoryBySlug[$courseData['category_slug']] ?? $categories->random(),
                    'title' => $courseData['title'],
                    'description' => $courseData['description'],
                    'thumbnail' => null,
                    'published_at' => null,
                ]
            );
        }
    }
}
