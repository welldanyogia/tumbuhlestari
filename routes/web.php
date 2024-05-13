<?php

use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\ProfileController;
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

Route::get('/anggota', function () {
    return Inertia::render('Anggota');
})->middleware(['auth', 'verified'])->name('anggota');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//    Route::get('/dashboar', [\App\Http\Controllers\AnggotaController::class,'index'])->name('anggota.index');
});

Route::get('/anggota/index', [\App\Http\Controllers\AnggotaController::class, 'getTotalUsers'])->name('total.anggota');
//Route::get('/anggota/index', function () {
//    // Hitung total anggota dari database
//    $totalUsers = \App\Models\User::count();
//
//    return Inertia::render('Anggota', [
//        'totalUsers' => $totalUsers,
//    ]);
//})->middleware(['auth', 'verified'])->name('total.anggota');

//Route::get('/', function (){
//    return view('dashboard', ['totaluser' => 'totalUsers']);
//});


//Route::get('/anggota/all', [AnggotaController::class, 'index'])->name('users.index');
Route::prefix('/anggota')->group(function () {
    // Route untuk menampilkan data anggota
    Route::get('/all', [AnggotaController::class, 'index'])->name('users.index');
    Route::get('/total', [AnggotaController::class, 'getTotalUsers'])->name('anggota.index');
    // Route untuk mengupdate data anggota
});
//    Route::post('/anggota/{id}', [AnggotaController::class, 'update'])->name('anggota.update');

require __DIR__.'/auth.php';
