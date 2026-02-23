<?php

declare(strict_types=1);

use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseModuleController;
use App\Http\Controllers\EnrollmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ModuleLessonController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\GetProfileController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\UpdatePasswordController;
use App\Http\Controllers\UpdateProfileController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', RegisterController::class);
Route::post('/login', LoginController::class);

Route::get('/courses', [CourseController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', GetProfileController::class);
    Route::post('/logout', LogoutController::class);
    Route::put('/profile', UpdateProfileController::class);
    Route::patch('/profile/password', UpdatePasswordController::class);
    Route::get('/my-courses', [CourseController::class, 'myCourses']);
    Route::post('/courses/{course}/enroll', [EnrollmentController::class, 'enroll'])->whereNumber('course');
    Route::get('/courses/{course}/enrollment', [EnrollmentController::class, 'show'])->whereNumber('course');
    Route::get('/lessons/{lesson}', [ModuleLessonController::class, 'show'])->whereNumber('lesson');
    Route::patch('/lessons/{lesson}/complete', [ModuleLessonController::class, 'complete'])->whereNumber('lesson');

    Route::middleware('role:instructor|admin')->group(function () {
        Route::post('/courses', [CourseController::class, 'store']);
        Route::get('/courses/my-drafts', [CourseController::class, 'myDrafts']);
        Route::get('/courses/{id}/edit', [CourseController::class, 'edit'])->whereNumber('id');
        Route::put('/courses/{id}', [CourseController::class, 'update'])->whereNumber('id');
        Route::delete('/courses/{id}', [CourseController::class, 'destroy'])->whereNumber('id');
        Route::patch('/courses/{id}/publish', [CourseController::class, 'publish'])->whereNumber('id');

        Route::get('/courses/{course}/modules', [CourseModuleController::class, 'index'])->whereNumber('course');
        Route::post('/courses/{course}/modules', [CourseModuleController::class, 'store'])->whereNumber('course');
        Route::put('/modules/{module}', [CourseModuleController::class, 'update'])->whereNumber('module');
        Route::delete('/modules/{module}', [CourseModuleController::class, 'destroy'])->whereNumber('module');

        Route::get('/modules/{module}/lessons', [ModuleLessonController::class, 'index'])->whereNumber('module');
        Route::post('/modules/{module}/lessons', [ModuleLessonController::class, 'store'])->whereNumber('module');
        Route::put('/lessons/{lesson}', [ModuleLessonController::class, 'update'])->whereNumber('lesson');
        Route::delete('/lessons/{lesson}', [ModuleLessonController::class, 'destroy'])->whereNumber('lesson');
    });
});

Route::get('/courses/{slug}', [CourseController::class, 'show']);
