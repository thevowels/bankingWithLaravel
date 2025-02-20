<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Township extends Model
{
    /** @use HasFactory<\Database\Factories\TownshipFactory> */
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'state_id',
    ];

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    public function accounts(): HasMany
    {
        return $this->hasMany(Account::class);
    }
}
