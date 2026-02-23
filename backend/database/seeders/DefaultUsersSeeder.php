<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DefaultUsersSeeder extends Seeder
{
    public function run(): void
    {
        $instructor = User::query()->updateOrCreate(
            ['email' => 'instructor@example.com'],
            [
                'name' => 'Ava Reynolds',
                'password' => Hash::make('password'),
            ]
        );
        $instructor->syncRoles(['instructor']);

        $admin = User::query()->updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Marcus Bennett',
                'password' => Hash::make('password'),
            ]
        );
        $admin->syncRoles(['admin']);

        $student = User::query()->updateOrCreate(
            ['email' => 'student@example.com'],
            [
                'name' => 'Nina Patel',
                'password' => Hash::make('password'),
            ]
        );
        $student->syncRoles(['student']);
    }
}
