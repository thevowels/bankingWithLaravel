<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Account extends Model
{
    /** @use HasFactory<\Database\Factories\AccountFactory> */
    use HasFactory;

    protected $fillable = [
        'accountNo',
        'CustomerCode',
        'CustomerName',
        'township_id',
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
            return 40000001;
        }
    }

    public function township(): BelongsTo
    {
        return $this->belongsTo(Township::class);
    }

    public function deposits(): HasMany
    {
        return $this->hasMany(Deposit::class);
    }

    public function withdraws(): HasMany
    {
        return $this->hasMany(Withdraw::class);
    }
}
