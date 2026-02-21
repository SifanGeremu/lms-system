<?php 
namespace App\Http\Controllers;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreCourseRequest;

class StoreCourseController extends Controller
{
    public function __invoke(StoreCourseRequest $request)
    {
        $user = $request->user();

        $data = $request->validated();

        // Generate slug if not provided
        $slug = $data['slug'] ?? Str::slug($data['title']);

        // Ensure slug uniqueness
        $originalSlug = $slug;
        $counter = 1;

        while (\App\Models\Course::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        // Handle thumbnail upload
        $thumbnailPath = null;

        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')
                ->store('courses', 'public');
        }

        $course = \App\Models\Course::create([
            'title' => $data['title'],
            'slug' => $slug,
            'description' => $data['description'],
            'category' => $data['category'],
            'thumbnail_path' => $thumbnailPath,
            'status' => 'draft',
            'published_at' => null,
            'user_id' => $user->id,
        ]);

        return response()->json([
            'message' => 'Course created as draft',
            'course' => [
                'id' => $course->id,
                'title' => $course->title,
                'slug' => $course->slug,
                'category' => $course->category,
                'status' => $course->status,
                'thumbnail_url' => $course->thumbnail_path
                    ? Storage::url($course->thumbnail_path)
                    : null,
                'created_at' => $course->created_at,
            ]
        ], 201);
    }
}