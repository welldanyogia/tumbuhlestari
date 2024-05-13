import {useEffect, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {Inertia} from '@inertiajs/inertia';

export default function Anggota({auth}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [usersData, setUsersData] = useState([]);
    const [links, setLinks] = useState([])
    const {first, last, prev, next} = links;
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State untuk menentukan apakah modal edit terbuka
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [editingUserData, setEditingUserData] = useState(null);
    const [errors, setError] = useState();

    const handleEditUserModal = (userData) => {
        // Set state editingUserData dengan data anggota yang akan diedit
        setEditingUserData(userData);
        console.log('user:'+ userData.name)
        // console.log('id:'+ userData.id)
        // Buka modal edit
        setIsEditModalOpen(true);
    };

    const handleUpdateUser = async (editingUserData) => {
        try {
            const filteredUserData = Object.fromEntries(
                Object.entries(editingUserData).filter(([_, value]) => value !== null)
            );
            // Kirim data pengguna yang diedit ke backend
            const response = await axios.put(`/api/anggota/${editingUserData.id}`, filteredUserData); // Permintaan PUT ke endpoint yang sesuai
            // Update data pengguna di state setelah berhasil memperbarui data di backend
            // setUsersData(usersData.map(user => user.id === userData.id ? response.data : user));
            // Tutup modal edit
            console.log('id:'+ userData.id)
            console.log('editing:'+ editingUserData)
            setIsEditModalOpen(false);
        } catch (error) {
            console.log(error);
            setError(error.message)
            console.log(errors)
        }
    };

    // const handleUpdateUser = async (editingUserData) => {
    //     try {
    //         // Buat FormData untuk mengirim data form, termasuk foto KTP
    //         const formData = new FormData();
    //         for (const key in editingUserData) {
    //             formData.append(key, editingUserData[key]);
    //         }
    //         // Kirim data menggunakan metode POST
    //         const response = await axios.post(`/api/anggota/${editingUserData.id}`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data' // Set header untuk FormData
    //             }
    //         });
    //         console.log('Update successful:', response.data);
    //         // Tutup modal edit
    //         setIsEditModalOpen(false);
    //     } catch (error) {
    //         console.log('Update failed:', error);
    //     }
    // };
    const uploadFile = async (userData,file) => {
        try {
            // const formData = new FormData();
            // formData.append('foto_ktp', file);
            const imageUpload = file
            console.log('imageup'+ imageUpload)
            console.log('userid'+ userData.id)
            const response = await axios.post(`/api/anggota/upload/${userData.id}`, imageUpload);

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('foto'+e.target.files[0].value)
            setImageFile(file);
            console.log(imageFile)
            setEditingUserData({ ...editingUserData, foto_ktp:imageFile})
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        fetchUsers()
        console.log('error1:'+errors)
    }, []);

    useEffect(() => {
        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(imageFile);
        } else {
            setImagePreview(null);
        }
    }, [imageFile]);
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/anggota/all')
            // console.log(response.data)
            setUsersData(response.data.data)
            setLinks(response.data.links)
            console.log(usersData.data)
            console.log(links)
        } catch (e) {
            console.log(e)
        }
    }
    // onsubmit(() =>{
    //     uploadFile(usersData,imageFile)
    //     handleUpdateUser(editingUserData)
    //     }
    // )
    const handlePrevPage = async () => {
        try {
            const response = await axios.get(prev);
            setUsersData(response.data.data);
            setLinks(response.data.links);
        } catch (error) {
            console.log(error);
        }
    };
    // Buat fungsi untuk menangani navigasi ke halaman berikutnya
    const handleNextPage = async () => {
        try {
            const response = await axios.get(next);
            setUsersData(response.data.data);
            setLinks(response.data.links);
        } catch (error) {
            console.log(error);
        }
    };
    // const handleEditUserModal = () => {
    //     // Logic untuk menampilkan modal edit pengguna
    //     console.log('Edit user modal button clicked');
    //     // Lakukan tindakan yang diperlukan untuk menampilkan modal di sini
    // };
    // const handleEditUserModal = () => {
    //     // Logika untuk menampilkan modal edit pengguna
    //     setIsEditModalOpen(true); // Buka modal edit
    // };

    const handleCloseEditModal = () => {
        // Logika untuk menutup modal edit pengguna
        setIsEditModalOpen(false); // Tutup modal edit
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     // Buat URL objek dari file gambar yang dipilih
    //     setSelectedImage(URL.createObjectURL(file));
    // };

    // const handleImageChange = (e) => {
    //     // Get the file from input
    //     const file = e.target.files[0];
    //
    //     // Update the state with the file
    //     console.log(file)
    //     setImageFile(file);
    // };
    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
    >
        <Head title="Anggota"/>
        <div className=' py-12 lg:ml-64 md:ml-64 sm:ml-2'>
            <div className='mt-[5%] mx-6 text-neutral-800 text-3xl font-bold'>
                Anggota
            </div>
            {/*    Table    */}
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mx-16 '>
                {/*Filter*/}
                {/*Search Bar*/}
                <div
                    className='flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between'>
                    <div className="pb-4 mx-2 dark:bg-gray-900">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div
                                className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="table-search"
                                   className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Cari Anggota"/>
                        </div>
                    </div>
                </div>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead
                        className='text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='px-6 py-3 text-center'>No</th>
                        <th scope='col' className='px-6 py-3'>Nama</th>
                        <th scope='col' className='px-6 py-3'>NIK</th>
                        <th scope='col' className='px-6 py-3'>Tempat, Tanggal Lahir</th>
                        <th scope='col' className='px-6 py-3'>Dusun</th>
                        <th scope='col' className='px-6 py-3'>Alamat</th>
                        <th scope='col' className='px-6 py-3'>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*Iterate over usersData and render each user row */}
                    {usersData.map((user, index) => (<tr key={user.id}
                                                         className={index % 2 === 0 ? "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 hover:bg-gray-400 border-b dark:border-gray-700" : "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 hover:bg-gray-400 border-b dark:border-gray-700"}>
                        <td className="px-6 py-4 text-center">{index + 1}</td>
                        <td className="px-6 py-4">{user.name}</td>
                        <td className="px-6 py-4">{user.nik ? user.nik : '-'}</td>
                        <td className="px-6 py-4">{user.ttl ? user.ttl : '-'}</td>
                        <td className="px-6 py-4">{user.dusun ? user.dusun : '-'}</td>
                        <td className="px-6 py-4">{user.alamat ? user.alamat : '-'}</td>
                        <td className="px-6 py-4 space-x-2">
                            <button onClick={()=>handleEditUserModal(user)} type="button" data-modal-target="editUserModal"
                                    data-modal-show="editUserModal"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                user
                            </button>
                            <a href="#"
                               className="font-medium text-red-600 dark:text-red-500 hover:underline">Hapus</a>
                        </td>
                        {/* Tambahkan kolom lainnya sesuai kebutuhan */}
                    </tr>))}


                    </tbody>
                </table>
                {/*<nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"*/}
                {/*     aria-label="Table navigation">*/}
                {/*    <span*/}
                {/*        className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span*/}
                {/*        className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span*/}
                {/*        className="font-semibold text-gray-900 dark:text-white">1000</span></span>*/}
                {/*    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">*/}
                {/*        <li>*/}
                {/*            <a href="#"*/}
                {/*               className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#"*/}
                {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#"*/}
                {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#" aria-current="page"*/}
                {/*               className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#"*/}
                {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#"*/}
                {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="#"*/}
                {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*    /!*{usersData.valueOf(links)}*!/*/}
                {/*</nav>*/}
                <nav className="flex items-center justify-between my-4 mx-20">
                    <div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                Showing page {currentPage} of {totalPages}
                            </span>
                    </div>
                    <div className="flex justify-end flex-1">
                        <button
                            onClick={handlePrevPage}
                            disabled={!prev} // Disable tombol jika tidak ada halaman sebelumnya
                            className="px-3 py-1 mr-2 text-sm font-medium text-gray-600 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={!next} // Disable tombol jika tidak ada halaman berikutnya
                            className="px-3 py-1 text-sm font-medium text-gray-600 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </nav>
                {/*// <!-- Edit user modal -->*/}
                {isEditModalOpen &&
                    <div id="editUserModal" tabIndex="-1" aria-hidden="true"
                         className='fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black bg-opacity-50'
                        // className="fixed top-0 left-0 right-0 z-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                        <div className="relative w-full max-w-2xl max-h-full">
                            {/*// <!-- Modal content -->*/}
                            <form
                                onSubmit={() => {
                                    handleUpdateUser(editingUserData)
                                    uploadFile(editingUserData,imageFile)
                                }}
                                // encType="multipart/form-data"
                                  className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/*// <!-- Modal header -->*/}
                                <div
                                    className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Edit Anggota
                                    </h3>
                                    <button type="button"
                                            onClick={handleCloseEditModal}
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-hide="editUserModal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/*// <!-- Modal body -->*/}
                                <div className="p-6 space-y-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label form="name"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                                            <input type="text" name="name" id="name"
                                                   value={editingUserData ? editingUserData.name : ""}
                                                   onChange={(e) => setEditingUserData({ ...editingUserData, name:e.target.value})}
                                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Nama" required=""/>
                                        </div>
                                        {/*<div className="col-span-6 sm:col-span-3">*/}
                                        {/*    <label form="last-name"*/}
                                        {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last*/}
                                        {/*        Name</label>*/}
                                        {/*    <input type="text" name="last-name" id="last-name"*/}
                                        {/*           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                                        {/*           placeholder="Green" required=""/>*/}
                                        {/*</div>*/}
                                        <div className="col-span-6 sm:col-span-3">
                                            <label form="email"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                            <input type="email" name="email" id="email"
                                                   value={editingUserData ? editingUserData.email : ""}
                                                   onChange={(e) => setEditingUserData({ ...editingUserData, email:e.target.value})}
                                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="example@company.com" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label form="phone-number"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No
                                                Telpon</label>
                                            <input type="number" name="phone-number" id="phone-number"
                                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="e.g. +(12)3456 789" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label form="dusun"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dusun</label>
                                            <input type="text" name="dusun" id="dusun"
                                                   value={editingUserData ? editingUserData.dusun : ""}
                                                   onChange={(e) => setEditingUserData({ ...editingUserData, dusun:e.target.value})}
                                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Development" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label form="alamat"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                                            <input type="text" name="alamat" id="alamat"
                                                   value={editingUserData ? editingUserData.alamat : ""}
                                                   onChange={(e) => setEditingUserData({ ...editingUserData, alamat:e.target.value})}
                                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="123456" required=""/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label form="new-password"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
                                                Password</label>
                                            <input type="password" name="new-password" id="new-password"
                                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="••••••••" required=""/>
                                        </div>


                                        <div className="col-span-6 sm:col-span-3">
                                            Foto KTP
                                            <div className="flex flex-col items-center">
                                                <input
                                                    id="foto_ktp"
                                                    className="hidden"
                                                    // value={editingUserData ? editingUserData.foto_ktp : ''}
                                                    onChange={()=>{
                                                        handleImageChange
                                                        uploadFile(editingUserData,imageFile)
                                                    }}
                                                    onInput={handleImageChange}
                                                    type="file"
                                                    accept="image/*"
                                                />
                                                <label
                                                    htmlFor="foto_ktp"
                                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                                >
                                                    {imagePreview ? (
                                                        <img src={imagePreview} alt="Preview"
                                                             className="max-h-full max-w-full"/>
                                                    ) : (
                                                        <>
                                                            <svg
                                                                className="w-8 h-8 mb-4 text-gray-500"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 20 16"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                                />
                                                            </svg>
                                                            <p className="text-sm text-gray-500">
                                                                <span
                                                                    className="font-semibold">Click to upload</span> or
                                                                drag and drop
                                                            </p>
                                                            <p className="text-xs text-gray-500">SVG, PNG, JPG, or GIF
                                                                (MAX.
                                                                800x400px)</p>
                                                        </>
                                                    )}
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label form="current-password"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current
                                                Password</label>
                                            <input type="password" name="current-password" id="current-password"
                                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="••••••••" required=""/>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Modal footer */}
                                <div
                                    className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button type="submit"
                                            // onClick={handleUpdateUser(usersData,editingUserData)}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
                                        all
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>}

            </div>
        </div>
    </AuthenticatedLayout>)
}
