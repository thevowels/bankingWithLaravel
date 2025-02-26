<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Deposit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepositController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        dd('Deposits');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, Account $account)
    {
        //
        return Inertia::render('Deposit/Create',[
            'account'=>$account,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Account $account)
    {
        //
        $value = $request->validate([
            'amount' => ['required','integer']
        ]);
        $request->account->deposits()->create($value);

        return(redirect(route('accounts.show', $account)));
    }

    /**
     * Display the specified resource.
     */
    public function show(Deposit $deposit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Deposit $deposit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Deposit $deposit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Deposit $deposit)
    {
        //
    }
}
