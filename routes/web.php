<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\TownshipController;
use App\Http\Controllers\WithdrawController;
use App\Models\Deposit;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('states', StateController::class)
    ->only(['index','store','create'])
    ->middleware(['auth','verified'])
    ->name('states.*', 'states.*');

Route::resource('townships', TownshipController::class)
    ->only(['index','create','store'])
    ->middleware(['auth','verified'])
    ->name('townships.*', 'townships.*');

Route::resource('accounts', AccountController::class)
    ->only(['index','create', 'show','store'])
    ->middleware(['auth','verified'])
    ->name('accounts.*', 'accounts.*');

Route::resource('accounts.deposits', DepositController::class)
->only(['store','create'])
->middleware(['auth'])
->name('accounts.deposits.*', 'accounts.deposits.*');

Route::resource('deposits', DepositController::class)
->only(['index'])
->middleware(['auth','verified'])
->name('deposits.*','deposits.*');

Route::resource('accounts.withdraws', WithdrawController::class)
->only(['store'])
->middleware(['auth'])
->name('accounts.withdraws.*', 'accounts.withdraws.*');



require __DIR__.'/auth.php';
