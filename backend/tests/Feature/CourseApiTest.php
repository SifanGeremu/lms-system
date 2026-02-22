<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\User;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CourseApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(RoleSeeder::class);
    }

    public function test_public_courses_endpoint_lists_only_published_courses_with_filters_and_pagination(): void
    {
        $category = Category::factory()->create(['name' => 'Development', 'slug' => 'development']);
        $instructor = User::factory()->create();

        $published = Course::factory()->published()->create([
            'title' => 'Laravel API Mastery',
            'slug' => 'laravel-api-mastery',
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
        ]);
        Course::factory()->create([
            'title' => 'Draft Course',
            'slug' => 'draft-course',
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
            'published_at' => null,
        ]);

        $response = $this->getJson('/api/courses?search=Laravel&category=development&per_page=1');

        $response->assertOk()
            ->assertJsonPath('meta.per_page', 1)
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.id', $published->id);
    }

    public function test_public_course_overview_endpoint_returns_course_by_slug(): void
    {
        $category = Category::factory()->create();
        $instructor = User::factory()->create(['name' => 'Jane Instructor']);
        $course = Course::factory()->published()->create([
            'slug' => 'intro-to-php',
            'title' => 'Intro to PHP',
            'description' => 'A practical introduction',
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
        ]);

        $response = $this->getJson('/api/courses/intro-to-php');

        $response->assertOk()
            ->assertJsonPath('data.title', $course->title)
            ->assertJsonPath('data.instructor.name', 'Jane Instructor');
    }

    public function test_my_courses_requires_authentication(): void
    {
        $this->getJson('/api/my-courses')->assertUnauthorized();
    }

    public function test_authenticated_user_can_list_their_enrolled_courses(): void
    {
        $student = User::factory()->create();
        $instructor = User::factory()->create();
        $category = Category::factory()->create();
        $course = Course::factory()->published()->create([
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
        ]);
        Enrollment::factory()->create([
            'user_id' => $student->id,
            'course_id' => $course->id,
        ]);

        $response = $this->actingAs($student, 'sanctum')->getJson('/api/my-courses');

        $response->assertOk()
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.id', $course->id);
    }

    public function test_instructor_can_create_a_course(): void
    {
        $instructor = User::factory()->create();
        $instructor->assignRole('instructor');
        $category = Category::factory()->create();

        $payload = [
            'title' => 'Testing Laravel',
            'description' => 'Full course',
            'slug' => 'testing-laravel',
            'thumbnail' => 'https://cdn.example.com/thumb.jpg',
            'category_id' => $category->id,
        ];

        $response = $this->actingAs($instructor, 'sanctum')->postJson('/api/courses', $payload);

        $response->assertCreated()
            ->assertJsonPath('data.title', 'Testing Laravel')
            ->assertJsonPath('data.published_at', null);

        $this->assertDatabaseHas('courses', [
            'slug' => 'testing-laravel',
            'instructor_id' => $instructor->id,
        ]);
    }

    public function test_student_cannot_create_a_course(): void
    {
        $student = User::factory()->create();
        $student->assignRole('student');
        $category = Category::factory()->create();

        $payload = [
            'title' => 'Forbidden',
            'slug' => 'forbidden',
            'category_id' => $category->id,
        ];

        $this->actingAs($student, 'sanctum')
            ->postJson('/api/courses', $payload)
            ->assertForbidden();
    }

    public function test_instructor_can_list_their_drafts(): void
    {
        $instructor = User::factory()->create();
        $instructor->assignRole('instructor');
        $otherInstructor = User::factory()->create();
        $category = Category::factory()->create();

        $draft = Course::factory()->create([
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
            'published_at' => null,
        ]);
        Course::factory()->published()->create([
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
        ]);
        Course::factory()->create([
            'instructor_id' => $otherInstructor->id,
            'category_id' => $category->id,
            'published_at' => null,
        ]);

        $response = $this->actingAs($instructor, 'sanctum')->getJson('/api/courses/my-drafts');

        $response->assertOk()
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.id', $draft->id);
    }

    public function test_instructor_can_view_edit_and_update_own_course(): void
    {
        $instructor = User::factory()->create();
        $instructor->assignRole('instructor');
        $category = Category::factory()->create();
        $newCategory = Category::factory()->create();
        $course = Course::factory()->create([
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
        ]);

        $this->actingAs($instructor, 'sanctum')
            ->getJson('/api/courses/'.$course->id.'/edit')
            ->assertOk()
            ->assertJsonPath('data.id', $course->id);

        $payload = [
            'title' => 'Updated Title',
            'description' => 'Updated description',
            'slug' => 'updated-title',
            'thumbnail' => 'https://cdn.example.com/new.jpg',
            'category_id' => $newCategory->id,
        ];

        $this->actingAs($instructor, 'sanctum')
            ->putJson('/api/courses/'.$course->id, $payload)
            ->assertOk()
            ->assertJsonPath('data.slug', 'updated-title');

        $this->assertDatabaseHas('courses', [
            'id' => $course->id,
            'title' => 'Updated Title',
            'category_id' => $newCategory->id,
        ]);
    }

    public function test_instructor_can_soft_delete_own_course(): void
    {
        $instructor = User::factory()->create();
        $instructor->assignRole('instructor');
        $category = Category::factory()->create();
        $course = Course::factory()->create([
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
        ]);

        $this->actingAs($instructor, 'sanctum')
            ->deleteJson('/api/courses/'.$course->id)
            ->assertOk();

        $this->assertSoftDeleted('courses', ['id' => $course->id]);
    }

    public function test_instructor_can_toggle_publish_status(): void
    {
        $instructor = User::factory()->create();
        $instructor->assignRole('instructor');
        $category = Category::factory()->create();
        $course = Course::factory()->create([
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
            'published_at' => null,
        ]);

        $this->actingAs($instructor, 'sanctum')
            ->patchJson('/api/courses/'.$course->id.'/publish')
            ->assertOk()
            ->assertJsonPath('data.id', $course->id);

        $this->assertNotNull($course->fresh()->published_at);

        $this->actingAs($instructor, 'sanctum')
            ->patchJson('/api/courses/'.$course->id.'/publish')
            ->assertOk();

        $this->assertNull($course->fresh()->published_at);
    }

    public function test_admin_can_edit_another_instructors_course(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('admin');
        $instructor = User::factory()->create();
        $instructor->assignRole('instructor');
        $category = Category::factory()->create();
        $course = Course::factory()->create([
            'instructor_id' => $instructor->id,
            'category_id' => $category->id,
        ]);

        $this->actingAs($admin, 'sanctum')
            ->getJson('/api/courses/'.$course->id.'/edit')
            ->assertOk()
            ->assertJsonPath('data.id', $course->id);
    }
}
