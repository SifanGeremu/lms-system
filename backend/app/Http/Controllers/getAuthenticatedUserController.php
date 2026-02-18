<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

class GetAuthenticatedUserController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = $request->user()->load('roles.permissions');

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $user->getRoleNames(),
                'permissions' => $user->getAllPermissions()->pluck('name'),
            ]
        ]);
    }
}