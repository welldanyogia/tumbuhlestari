<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AnggotaController extends Controller
{
//    public function index()
//    {
//        $totalUsers = User::count(); // Mengambil total anggota dari model User
//
//        return Inertia::render('Dashboard', [
//            'totalUsers' => $totalUsers, // Mengirim total anggota ke tampilan
//        ]);
////        return view('dashboard')->with('totalUsers', $totalUsers);
//    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        // Get paginated users data from database
        $users = User::paginate(10); // Change 10 to the number of users per page you desire

        // Pass users data to the view using Inertia
        return response()->json($users);
    }

    /**
     * Get the total number of registered users.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTotalUsers(): \Illuminate\Http\JsonResponse
    {
//        return User::count();
        $totalUsers = User::count();

        return response()->json(['totalUser' => $totalUsers]);
    }

//    public function update(Request $request, $id)
//    {
//        // Validasi data yang dikirim dari formulir modal
//        $validatedData = $request->validate([
//            'name' => 'string|max:255',
//            'email' => 'email|max:255',
//            'ttl' => 'string|max:255',
//            'jenis_kelamin' => 'string|max:255',
//            'dusun' => 'string|max:255',
//            'alamat' => 'string|max:255',
////            'foto_ktp' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
////            'password',
//            // Tambahkan validasi untuk kolom lainnya
//        ]);
//
//        $namevalid = $request->name;
//
//        // Cari pengguna yang akan diperbarui
//        $user = User::findOrFail($id);
//
////         Simpan data yang diperbarui
//        $user->update($validatedData);
//
//        // Jika ada gambar yang diunggah, proses dan simpan gambar
//        if ($request->hasFile('foto_ktp')) {
//            $image = $request->file('foto_ktp');
//            $imageName = time() . '.' . $image->getClientOriginalExtension();
//            $image->storeAs('public/images', $imageName);
//            // Simpan path gambar ke dalam database
//            $user->foto_ktp = 'storage/images/' . $imageName;
//            $user->save();
//        }
//
//        return response()->json(['message' => 'User updated successfully', 'user' => $user, 'datavalid' => $validatedData]);
//    }

    // Ubah metode update ke POST dan tambahkan kode untuk menyimpan foto KTP ke storage dan path-nya ke database
    public function update(Request $request, $id)
    {
        // Validasi data yang dikirim dari formulir modal
        $validatedData = $request->validate([
            'name' => 'string|max:255',
            'email' => 'email|max:255',
            'ttl' => 'string|max:255',
            'jenis_kelamin' => 'string|max:255',
            'dusun' => 'string|max:255',
            'alamat' => 'string|max:255',
//            'foto_ktp' => 'image|mimes:jpeg,png,jpg,gif,svg', // Validasi untuk foto KTP
            // 'password',
            // Tambahkan validasi untuk kolom lainnya
        ]);

        // Cari pengguna yang akan diperbarui
        $user = User::findOrFail($id);



        // Simpan data yang diperbarui
        $user->update($validatedData);

        // Jika ada foto KTP yang diunggah, simpan ke storage dan update path-nya di database


        return response()->json(['message' => 'User updated successfully', 'user' => $user,'fotoktp' => $request->file('foto_ktp')]);
    }

    public function upload(Request $request, $id)
    {
        $user = User::findOrFail($id);

        // Validasi dan simpan file
        if ($request->hasFile('foto_ktp')) {
            $image = $request->file('foto_ktp');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/images', $imageName);
            // Simpan path gambar ke dalam database
            $user->foto_ktp = 'storage/images/' . $imageName;
            $user->save();
        }

        return response()->json(['message' => 'File uploaded successfully']);
    }

}
