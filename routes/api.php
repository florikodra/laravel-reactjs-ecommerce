<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ShoppingCartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/products', [ProductController::class, 'index'])->name('api.shop.products');

Route::middleware(['web'])->group(function () {
    Route::post('/shopping-cart/{product}/toggle', [ShoppingCartController::class, 'toggleShoppingCart'])->name('api.shop.cart.toggle');
    Route::get('/shopping-cart', [ShoppingCartController::class, 'getShoppingCart'])->name('api.shop.cart.index');
});

