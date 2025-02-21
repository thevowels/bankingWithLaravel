<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Township;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'CustomerCode' => $this->faker->unique()->regexify('[A-Z]{3}[0-9]{3}'),
            'CustomerName' => $this->faker->unique()->name,
            'township_id'  => Township::all()->random()->id,
            'balance' => $this->faker->numberBetween(1000000, 10000000),
        ];
    }
}
