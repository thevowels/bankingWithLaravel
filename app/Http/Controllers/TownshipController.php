<?php

namespace App\Http\Controllers;

use App\Models\State;
use App\Models\Township;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TownshipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Townships/Index', [
            'townships' => Township::select('id','code','name')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Townships/Create',[
            'states' => State::select('id','code','name')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $value = $request->validate([
            'code' => ['required', 'string', 'size:2', 'alpha:ascii', 'unique:townships,code'],
            'name' => ['required', 'string', 'max:50'],
            'state_id.id' => ['required', 'integer', 'exists:states,id']
        ]);
        $value['state_id'] = $value['state_id']['id'];
        Township::create($value);
        return(redirect(route('townships.index')));
    }

    /**
     * Display the specified resource.
     */
    public function show(Township $township)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Township $township)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Township $township)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Township $township)
    {
        //
    }
}
