<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\getProfileController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\UpdatePasswordController;
use App\Http\Controllers\UpdateProfileController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
   Route::get('/profile', getProfileController::class);
    Route::post('/logout', LogoutController::class);
    Route::put('/profile', UpdateProfileController::class);
    Route::patch('/profile/password',UpdatePasswordController::class);
});

Route::post('/register',RegisterController::class);
Route::post('/login',LoginController::class);