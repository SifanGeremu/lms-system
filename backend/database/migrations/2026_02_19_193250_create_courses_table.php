<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title'); 
            $table->string('slug')->unique(); 
            $table->text('description')->nullable(); 
            $table->string('category')->nullable(); 
            $table->enum('status', ['draft', 'published'])->default('draft'); 
            $table->timestamp('published_at')->nullable(); 
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); 
             $table->string('thumbnail_path')->nullable(); 
             $table->timestamps(); 
              $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
