<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Index');
})->name('home');

Route::get('/shop', function () {
    return Inertia::render('Shop/Index');
})->name('shop');

Route::get('/shop/{slug}', function () {
    return Inertia::render('Shop/Show');
})->name('shop.show');
