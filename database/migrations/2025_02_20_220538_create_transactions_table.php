<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('fromAccountNo');
            $table->bigInteger('toAccountNo');
            $table->decimal('amount', 10, 2);
            $table->timestamps();

            $table->foreign('fromAccountNo')->references('accountNo')->on('accounts')->onDelete('cascade');
            $table->foreign('toAccountNo')->references('accountNo')->on('accounts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
