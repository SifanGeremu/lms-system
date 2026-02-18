<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function __invoke(RegisterUserRequest $request)
    {
        // 1. Get validated data only
        $data = $request->validated();

        // 2. Hash the password
        $data['password'] = Hash::make($data['password']);

        // 3. Create the user
        $user = User::create($data);

        // 4. Assign default role
        $user->assignRole('student');

        // 5. Create Sanctum token
        $token = $user->createToken('auth_token')->plainTextToken;

        // 6. Load roles & permissions for response
        $user->load('roles', 'permissions');

        // 7. Return JSON response
        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $user->getRoleNames(),
                'permissions' => $user->getAllPermissions()->pluck('name'),
            ],
            'token' => $token,
        ], 201);
    }
}