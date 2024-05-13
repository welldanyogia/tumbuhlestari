<?php

use App\Http\Controllers\AnggotaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::put('/anggota/{id}', [AnggotaController::class, 'update'])->name('anggota.update');
Route::post('/anggota/upload/{id}', [AnggotaController::class, 'upload'])->name('anggota.upload');
Route::put('/anggota/upload/{id}', [AnggotaController::class, 'upload'])->name('anggota.put');

