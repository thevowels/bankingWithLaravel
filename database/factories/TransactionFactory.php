<?php

namespace Database\Factories;

use App\Models\Account;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $fromAccount = Account::all()->random();
        $fromAccountBalance = $fromAccount->balance;
        $toAccountNo = Account::all()->except($fromAccount->id)->random()->accountNo;
    
        return [
            //
            'fromAccountNo' => $fromAccount->accountNo,
            'toAccountNo' => $toAccountNo,
            'amount' => $this->faker->numberBetween(1, $fromAccountBalance/10),
        ];
    }
}
