<?php
declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreLessonRequest extends FormRequest
{
    public function authorize(): bool
    {
        return (bool) $this->user();
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'type' => ['required', Rule::in(['text', 'video', 'file', 'embed'])],
            'content' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'order' => ['nullable', 'integer', 'min:1'],
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Lesson title is required.',
            'type.required' => 'Lesson type is required.',
            'content.required' => 'Lesson content is required.',
            'type.in' => 'Lesson type must be one of: text, video, file, embed.',
        ];
    }
}
