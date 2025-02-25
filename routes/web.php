<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\TownshipController;
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
    ->only(['index','create'])
    ->middleware(['auth','verified'])
    ->name('accounts.*', 'accounts.*');

require __DIR__.'/auth.php';
