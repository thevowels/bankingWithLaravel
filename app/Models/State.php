<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class State extends Model
{
    /** @use HasFactory<\Database\Factories\StateFactory> */
    use HasFactory;
    protected $fillable = [
        'code',
        'name',
    ];

    public function townships(): HasMany
    {
        return $this->hasMany(Township::class);
    }
}
