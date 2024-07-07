<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(3);

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraph(5),
            'images' => json_encode($this->faker->randomElements([
                'https://picsum.photos/500/500',
                'https://picsum.photos/500/500',
                'https://picsum.photos/500/500',
                'https://picsum.photos/500/500'
            ], rand(1, 4))),
            'price' => $this->faker->randomFloat(2, 10, 1000),
        ];
    }
}
