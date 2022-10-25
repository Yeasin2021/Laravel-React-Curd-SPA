<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('/', function () {
    return view('welcome');
});


Route::resource('contact', ContactController::class);


Route::get('/{path?}', function () {
    return view('welcome');
});



