<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdraw extends Model
{
    /** @use HasFactory<\Database\Factories\WithdrawFactory> */
    use HasFactory;
    
    protected $fillable = [
        'account_id',
        'amount',
    ];

    public static function boot(){
        parent::boot();

        // static::creating(function($withdraw){
        //     $withdraw->account->balance -= $withdraw->amount;
        //     $withdraw->account->save();
        // });
    }

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
    
}
