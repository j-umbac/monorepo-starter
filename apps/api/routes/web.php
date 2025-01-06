<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/posts', function () {
    $posts = Post::all();

    return response()->json([
        'posts' => $posts,
    ]);
});