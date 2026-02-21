<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCourseRequest;
use App\Models\Course;

class CourseController extends Controller
{
    
    public function __invoke(StoreCourseRequest $request)
    {

    }
}
