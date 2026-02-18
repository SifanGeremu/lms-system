<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GetProfileController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = $request->user()->load('roles');

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'bio' => $user->bio,
                'timezone' => $user->timezone,
                'preferred_language' => $user->preferred_language,
                'avatar_url' => $user->avatar_path
                    ? Storage::url($user->avatar_path)
                    : null,
                'roles' => $user->getRoleNames(),
                'status' => $user->status,
            ]
        ]);
    }
}