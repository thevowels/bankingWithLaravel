<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    /** @use HasFactory<\Database\Factories\AccountFactory> */
    use HasFactory;

    protected $fillable = [
        'accountNo',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($account) {
            $account->accountNo = self::generateAccountNo();
        });
    }

    private static function generateAccountNo(): int
    {
        $lastAccount = self::orderByDesc('accountNo')->first();

        if($lastAccount){
            return $lastAccount->accountNo + 1;
        } else {
            return 40000000;
        }
    }

}
