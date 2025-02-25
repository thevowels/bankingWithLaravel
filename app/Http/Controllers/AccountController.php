<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Township;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        return Inertia::render('Account/Index',[
            // 'accounts' => $request->user()->accounts()->paginate(15)
            'paginated' => Account::paginate(15)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Account/Create',[
            'townships'=> Township::select('id','code','name')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, )
    {
        //
        $value = $request->validate([
            'CustomerName' => ['required', 'string' , 'min:4', 'alpha'],
            'township.id' => ['required', 'integer', 'exists:townships,id']
        ]);
        $value['township_id'] = $value['township']['id'];
        unset($value['township']);
        $tmp = $request->user()->accounts()->create($value);
        dd($tmp);
        dd($request->user()->toArray());
        dd(Auth::user());
        $blah = Account::create($value);
        dd($blah);
    }

    /**
     * Display the specified resource.
     */
    public function show(Account $account)
    {
        $account->withdraws;
        $account->totransactions;
        $account->fromtransactions;
        return Inertia::render('Account/Show', [
            'account' => $account,
            'township' => $account->township,
            'state' => $account->township->state,
            'deposits' => $account->deposits,
            'transactions' => DB::table('transactions')
                ->leftJoin('accounts as from_accounts', 'transactions.fromAccountNo', '=', 'from_accounts.accountNo')
                ->leftJoin('accounts as to_accounts', 'transactions.toAccountNo', '=', 'to_accounts.accountNo')
                ->where('transactions.fromAccountNo', $account->accountNo)
                ->orWhere('transactions.toAccountNo', $account->accountNo)
                ->select(
                    'transactions.*',
                    'from_accounts.CustomerName as From',
                    'to_accounts.CustomerName as To',
                    'from_accounts.id as fromId',
                    'to_accounts.id as toId'

                )
                ->get()
        
            
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Account $account)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Account $account)
    {
        //
    }
}
