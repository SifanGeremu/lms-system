<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdateProfileRequest;

class UpdateProfileController extends Controller
{
    public function __invoke(UpdateProfileRequest $request)
    {
        $user = $request->user();

        $user->update($request->validated());

        return response()->json([
            'message' => 'Profile updated successfully',
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