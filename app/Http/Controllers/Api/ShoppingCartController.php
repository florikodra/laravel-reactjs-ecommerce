<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ShoppingCartController extends Controller
{
    protected string $sessionKey = "shopping-cart";

    public function toggleShoppingCart(Request $request, Product $product)
    {
        $cart = $request->session()->get($this->sessionKey, []);
        $type = 'added';

        if (array_key_exists($product->id, $cart)) {
            unset($cart[$product->id]);
            $type = 'removed';
        } else {
            $cart[$product->id] = new ProductResource($product);
        }

        $request->session()->put($this->sessionKey, $cart);

        return response()->json([
            'type' => $type,
            'cart' => array_values($cart),
        ]);
    }

    public function getShoppingCart(Request $request){

        $cart = $request->session()->get($this->sessionKey, []);

        return response()->json([
            'cart' => array_values($cart),
        ]);
    }
}
