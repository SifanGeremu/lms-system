<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $subjects = [
            'React Fundamentals',
            'Laravel API Development',
            'Product Design Systems',
            'Python Data Analytics',
            'DevOps Delivery Pipeline',
            'Growth Marketing Strategy',
            'Business Communication',
            'SQL for Reporting',
        ];

        $contexts = [
            'for Product Teams',
            'for Beginners',
            'for Career Growth',
            'for Modern Web Apps',
            'for Real Projects',
            'for Data-Driven Decisions',
        ];

        $title = fake()->unique()->randomElement($subjects).' '.fake()->randomElement($contexts);

        return [
            'instructor_id' => User::factory(),
            'category_id' => Category::factory(),
            'title' => $title,
            'description' => fake()->paragraph(3),
            'slug' => Str::slug($title).'-'.fake()->unique()->numberBetween(10, 99999),
            'thumbnail' => fake()->imageUrl(640, 360, 'education'),
            'published_at' => null,
        ];
    }

    public function published(): static
    {
        return $this->state(fn () => [
            'published_at' => now(),
        ]);
    }
}
