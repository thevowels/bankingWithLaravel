<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

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
            DB::transaction(function() use ($transaction){
                $fromAccount = Account::lockForUpdate()->find($transaction->fromAccount->id);
                $fromAccountBalance = $fromAccount->balance;
                if($fromAccountBalance < $transaction->amount){
                    throw new \Exception('Insufficient balance');
                }
                $toAccount = Account::lockForUpdate()->find($transaction->toAccount->id);
                $fromAccount->balance -= $transaction->amount;
                $fromAccount->save();
                $toAccount->balance += $transaction->amount;
                $toAccount->save();
            });
            // $transaction->fromAccount->balance -= $transaction->amount;
            // $transaction->fromAccount->save();
            // $transaction->toAccount->balance += $transaction->amount;
            // $transaction->toAccount->save();
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
