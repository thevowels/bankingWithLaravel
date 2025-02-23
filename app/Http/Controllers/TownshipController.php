<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Townships/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
