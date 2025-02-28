<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

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
            $account->CustomerCode = self::generateCustomerCode();
        });
    }
    
    private static function generateCustomerCode(): string
    {
        $faker = Faker::create();
        $value = '';
        $control = true;
        while($control){
            $value = $faker->unique()->regexify('[A-Z]{3}[0-9]{3}');
            $control = Account::where('CustomerCode','ASDF23')->firstOr(function() {return false;});
        }
        return $value;

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
    //to use later
    // public function deposit(int $amount){
    //     if( $amount <= 0){
    //         throw new Exception("Deposit must be greater than 0.");
    //     }
    
    //     DB::transaction(function () use ($amount) {
    //         $this->lockForUpdate()->increment('balance', $amount);
    //         Deposit::create([
    //             'account_id'=>$this->id,
    //             'amount' => $amount
    //         ]);
    //     });
    // }

    public function withdraw(int $amount){
        if( $amount <= 0) {
            throw new Exception("Withdraws must be greater than 0.");
        }else if( $amount >= $this->balance ){
            throw new Exception("You don't have enough balance");
        }
        DB::transaction(function () use ($amount) {
            $account = Account::where('id', $this->id)->lockForUpdate()->first();
            $account->decrement('balance', $amount);
            
            Withdraw::create([
                'account_id' => $this->id, 
                'amount' => $amount
            ]);
        });
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

    public function fromtransactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'fromAccountNo', 'accountNo');
    }
    public function totransactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'toAccountNo', 'accountNo');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
