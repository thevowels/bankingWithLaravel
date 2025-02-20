<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Deposit extends Model
{
    /** @use HasFactory<\Database\Factories\DepositFactory> */
    use HasFactory;

    protected $fillable = [
        'account_id',
        'amount',
    ];

    public static function boot(){
        parent::boot();

        static::creating(function($deposit){
            $deposit->account->balance += $deposit->amount;
            $deposit->account->save();
        });
    }

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }

}
