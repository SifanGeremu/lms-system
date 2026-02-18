<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\GetAuthenticatedUserController;
use App\Http\Controllers\LogoutController;
//protected routes

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', GetAuthenticatedUserController::class);
    Route::post('/logout', LogoutController::class);
});

Route::post('/register',RegisterController::class);
Route::post('/login',LoginController::class);