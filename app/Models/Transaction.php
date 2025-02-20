<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    /** @use HasFactory<\Database\Factories\TransactionFactory> */
    use HasFactory;

    protected $fillable = [
        'fromAccountNo',
        'toAccountNo',
        'amount'
    ];

    public static function boot(){
        parent::boot();

        static::creating(function($transaction){
            $transaction->fromAccount->balance -= $transaction->amount;
            $transaction->fromAccount->save();
            $transaction->toAccount->balance += $transaction->amount;
            $transaction->toAccount->save();
        });
    }

    public function fromAccount():BelongsTo
    {
        return $this->belongsTo(Account::class, 'fromAccountNo', 'accountNo');
    }

    public function toAccount() :BelongsTo
    {
        return $this->belongsTo(Account::class, 'toAccountNo', 'accountNo');
    }

}
