import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBarLayout from "@/Layouts/SideBarLayout.jsx";
import {useEffect, useState} from "react";

// let $totalUsers = '1';
export default function Dashboard({ auth }) {

    let [totalUsers, setTotalUsers] = useState(0);
    let [currDate, setCurrDate] = useState(getDate())

    useEffect(() => {
        fetchTotalUsers();
        // currDate = getDate()
    }, []);

    function getDate  () {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const date = today.getDate()
        return `${date}/${month}/${year}`
    }
    const fetchTotalUsers = async () => {
        try {
            const response = await axios.get('/anggota/total'); // Fetch total users from backend
            console.log(response.data.totalUser)
            setTotalUsers(response.data.totalUser); // Set total users in state
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
            // totalUser={auth.total}
        >
            <Head title="Dashboard" />
            {/*<SideBarLayout/>*/}

            {/*<div className="py-12">*/}
            {/*    /!*<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">*!/*/}
            {/*    /!*    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">*!/*/}
            {/*    /!*        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
            <div className=' py-12 lg:ml-64 md:ml-64 sm:ml-2'>
                <div className='mt-[5%] mx-6 text-neutral-800 text-3xl font-bold'>
                    Dashboard
                </div>
                <div className='mt-[5%] mx-6 text-neutral-800 text-3xl font-bold'>
                    {/*{ route('anggota.index') }*/}
                    {/*{ }*/}
                    {/*{{ $totalUsers}}*/}
                    {/*{$totalUsers}*/}
                    {/*Total user : {totalUsers}*/}
                </div>
                {/*Box Dashboard*/}
                <div className='mt-[40px] mx-6 flex sm:flex md:grid grid-cols-2 max-sm:flex-col lg:flex  items-center gap-[20px]'>
                    {/*Anggota*/}
                    <a href={route('anggota')} active={route().current('anggota')}
                        className='p-5 grid grid-cols-2 gap-x-10 sm:w-[80%] max-md:w-[80%] lg:w-[25%] h-full bg-white drop-shadow-xl rounded-[20px]'>
                        <div className='flex flex-col'>
                            <div className='text-base -mr-5'>Total Anggota</div>
                            <div className='text-2xl mt-1.5 font-bold'>{totalUsers}</div>
                        </div>
                        <div className='flex flex-col-reverse ml-5 overflow-clip'>
                            <div className='text-sm'>{currDate}</div>
                            <div className='mb-5'>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="60" height="60" rx="20" fill="#C7C6FF"/>
                                    <circle cx="30" cy="30" r="25" fill="#C7C6FF"/>
                                    <path
                                        d="M24.4178 27.2802C22.976 25.8464 22.0834 23.8607 22.0834 21.6667C22.0834 19.4726 22.976 17.487 24.4178 16.0531C23.5877 15.6455 22.6539 15.4167 21.6667 15.4167C18.215 15.4167 15.4167 18.2149 15.4167 21.6667C15.4167 25.1184 18.215 27.9167 21.6667 27.9167C22.6539 27.9167 23.5877 27.6878 24.4178 27.2802Z"
                                        fill="#8280FF"/>
                                    <path
                                        d="M23.7501 21.6667C23.7501 18.2149 26.5483 15.4167 30.0001 15.4167C33.4519 15.4167 36.2501 18.2149 36.2501 21.6667C36.2501 25.1184 33.4519 27.9167 30.0001 27.9167C26.5483 27.9167 23.7501 25.1184 23.7501 21.6667Z"
                                        fill="#8280FF"/>
                                    <path
                                        d="M35.5824 16.0531C37.0242 17.487 37.9167 19.4726 37.9167 21.6667C37.9167 23.8607 37.0242 25.8464 35.5824 27.2802C36.4125 27.6878 37.3462 27.9167 38.3334 27.9167C41.7852 27.9167 44.5834 25.1184 44.5834 21.6667C44.5834 18.2149 41.7852 15.4167 38.3334 15.4167C37.3462 15.4167 36.4125 15.6455 35.5824 16.0531Z"
                                        fill="#8280FF"/>
                                    <path
                                        d="M18.7501 36.6667C18.7501 33.2149 21.5483 30.4167 25.0001 30.4167H35.0001C38.4519 30.4167 41.2501 33.2149 41.2501 36.6667C41.2501 40.1184 38.4519 42.9167 35.0001 42.9167H25.0001C21.5483 42.9167 18.7501 40.1184 18.7501 36.6667Z"
                                        fill="#8280FF"/>
                                    <path
                                        d="M10.4167 35C10.4167 31.5482 13.215 28.75 16.6667 28.75H25.0001C20.6278 28.75 17.0834 32.2944 17.0834 36.6667C17.0834 38.3748 17.6244 39.9566 18.5443 41.25H16.6667C13.215 41.25 10.4167 38.4518 10.4167 35Z"
                                        fill="#8280FF"/>
                                    <path
                                        d="M42.9167 36.6667C42.9167 38.3748 42.3758 39.9566 41.4558 41.25H43.3334C46.7852 41.25 49.5834 38.4518 49.5834 35C49.5834 31.5482 46.7852 28.75 43.3334 28.75H35.0001C39.3723 28.75 42.9167 32.2944 42.9167 36.6667Z"
                                        fill="#8280FF"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    {/*Simpanan*/}
                    <button type='button'
                        className='p-5 grid grid-cols-2 gap-x-10 sm:w-[80%] max-md:w-[80%] lg:w-[25%] h-full bg-white drop-shadow-xl rounded-[20px]'>
                        <div className='flex flex-col'>
                            <div className='text-base -mr-5'>Total Simpanan</div>
                            <div className='text-2xl mt-1.5 font-bold'>Rp.1.278.000</div>
                        </div>
                        <div className='flex flex-col-reverse ml-5'>
                            <div className='text-sm'>{currDate}</div>
                            <div className='mb-5'>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="60" height="60" rx="20" fill="#FFE39F"/>
                                    <circle cx="30" cy="30" r="25" fill="#FFE39F"/>
                                    <g clipPath="url(#clip0_0_697)">
                                        <path
                                            d="M15 16.1481C15 15.6552 15.3592 15.2358 15.8463 15.16L43.8463 10.8045C44.4526 10.7102 45 11.179 45 11.7926V28.0633C45 28.5728 44.6169 29.0009 44.1104 29.0572L16.1104 32.1683C15.5181 32.2341 15 31.7704 15 31.1744V16.1481Z"
                                            fill="#AE8116"/>
                                        <g filter="url(#filter0_bi_0_697)">
                                            <rect x="10" y="19.375" width="40" height="30" rx="2" fill="#FFBB19"/>
                                            <rect x="10.15" y="19.525" width="39.7" height="29.7" rx="1.85"
                                                  stroke="url(#paint0_linear_0_697)" strokeOpacity="0.1"
                                                  strokeWidth="0.3"/>
                                        </g>
                                        <g filter="url(#filter1_i_0_697)">
                                            <circle cx="43.75" cy="25.625" r="3.75" fill="white" fillOpacity="0.1"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_bi_0_697" x="4" y="13.375" width="52" height="42"
                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
                                            <feComposite in2="SourceAlpha" operator="in"
                                                         result="effect1_backgroundBlur_0_697"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_697"
                                                     result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feGaussianBlur stdDeviation="1.5"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_697"/>
                                        </filter>
                                        <filter id="filter1_i_0_697" x="40" y="21.875" width="7.5" height="9.5"
                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                     result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feGaussianBlur stdDeviation="1"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_697"/>
                                        </filter>
                                        <linearGradient id="paint0_linear_0_697" x1="11.25" y1="20.7386" x2="50"
                                                        y2="20.7386" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#3CDEB6"/>
                                            <stop offset="0.65625" stopColor="#364AFF"/>
                                        </linearGradient>
                                        <clipPath id="clip0_0_697">
                                            <rect x="10" y="10" width="40" height="40" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </button>
                    {/*Pinjaman*/}
                    <button
                        className='p-5 grid grid-cols-2 gap-x-10 sm:w-[80%] max-md:w-[80%] lg:w-[25%] h-full bg-white drop-shadow-xl rounded-[20px]'>
                        <div className='flex flex-col'>
                            <div className='text-base -mr-5'>Total Pinjaman</div>
                            <div className='text-2xl mt-1.5 font-bold'>Rp.1.278.000</div>
                        </div>
                        <div className='flex flex-col-reverse ml-5 '>
                            <div className='text-sm'>{currDate}</div>
                            <div className='mb-5'>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="60" height="60" rx="20" fill="#FFCEBB"/>
                                    <circle cx="30" cy="30" r="25" fill="#FFCEBB"/>
                                    <path
                                        d="M42.1743 19.5654H17.8264C17.8264 22.4469 15.4905 24.7828 12.609 24.7828V35.2176C15.4905 35.2176 17.8264 37.5535 17.8264 40.435H42.1743C42.1743 37.5535 44.5102 35.2176 47.3916 35.2176V24.7828C44.5102 24.7828 42.1743 22.4469 42.1743 19.5654Z"
                                        fill="#FF9066"/>
                                    <g filter="url(#filter0_bi_0_706)">
                                        <path
                                            d="M49.1304 43.0434H10.8696C10.3893 43.0434 10 42.654 10 42.1738V17.826C10 17.3458 10.3893 16.9564 10.8696 16.9564H49.1304C49.6106 16.9564 50 17.3458 50 17.826V42.1738C50 42.654 49.6106 43.0434 49.1304 43.0434Z"
                                            fill="#FF9066"/>
                                        <path
                                            d="M49.1304 42.8934H10.8696C10.4722 42.8934 10.15 42.5712 10.15 42.1738V17.826C10.15 17.4286 10.4722 17.1064 10.8696 17.1064H49.1304C49.5278 17.1064 49.85 17.4286 49.85 17.826V42.1738C49.85 42.5712 49.5278 42.8934 49.1304 42.8934Z"
                                            stroke="#FF9066" strokeWidth="0.3"/>
                                    </g>
                                    <g filter="url(#filter1_i_0_706)">
                                        <path
                                            d="M42.1743 19.5654H17.8264C17.8264 22.4469 15.4905 24.7828 12.609 24.7828V35.2176C15.4905 35.2176 17.8264 37.5535 17.8264 40.435H42.1743C42.1743 37.5535 44.5102 35.2176 47.3916 35.2176V24.7828C44.5102 24.7828 42.1743 22.4469 42.1743 19.5654Z"
                                            fill="#FFB89C"/>
                                    </g>
                                    <g filter="url(#filter2_i_0_706)">
                                        <path
                                            d="M29.9997 36.0866C33.3614 36.0866 36.0867 33.3614 36.0867 29.9997C36.0867 26.6379 33.3614 23.9127 29.9997 23.9127C26.638 23.9127 23.9128 26.6379 23.9128 29.9997C23.9128 33.3614 26.638 36.0866 29.9997 36.0866Z"
                                            fill="#FF9066"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_bi_0_706" x="4" y="10.9564" width="52" height="38.0869"
                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
                                            <feComposite in2="SourceAlpha" operator="in"
                                                         result="effect1_backgroundBlur_0_706"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_706"
                                                     result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feGaussianBlur stdDeviation="1.5"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_706"/>
                                        </filter>
                                        <filter id="filter1_i_0_706" x="12.609" y="19.5654" width="34.7826"
                                                height="22.8695" filterUnits="userSpaceOnUse"
                                                color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                     result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feGaussianBlur stdDeviation="1"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_706"/>
                                        </filter>
                                        <filter id="filter2_i_0_706" x="23.9128" y="23.9127" width="12.1739"
                                                height="14.174" filterUnits="userSpaceOnUse"
                                                color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                     result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feGaussianBlur stdDeviation="1"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_706"/>
                                        </filter>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </button>
                    {/*Angsuran*/}
                    <button
                        className='p-5 grid grid-cols-2 gap-x-10 sm:w-[80%] max-md:w-[80%] lg:w-[25%] h-full bg-white drop-shadow-xl rounded-[20px]'>
                        <div className='flex flex-col'>
                            <div className='text-base -mr-5'>Angsuran</div>
                            <div className='text-2xl mt-1.5 font-bold'>278</div>
                        </div>
                        <div className='flex flex-col-reverse ml-5'>
                            <div className='text-sm'>{currDate}</div>
                            <div className='mb-5'>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="60" height="60" rx="20" fill="#B4FFD9"/>
                                    <circle cx="30" cy="30" r="25" fill="#B4FFD9"/>
                                    <path
                                        d="M41.6575 17.7373C40.6354 17.4151 39.4869 17.2587 38.16 17.1768C36.6433 17.0832 34.8001 17.0832 32.5388 17.0833H27.4346C24.7623 17.0832 22.6673 17.0832 20.9937 17.2424C19.2878 17.4046 17.8909 17.7409 16.6596 18.4955C15.3701 19.2857 14.2859 20.3698 13.4957 21.6593C13.4677 21.705 13.4403 21.7509 13.4134 21.797C13.5423 19.3918 13.8787 17.7988 14.7576 16.5377C15.2175 15.8777 15.7742 15.2974 16.4072 14.8179C18.3673 13.3333 21.1633 13.3333 26.7553 13.3333H35.7032C38.5152 13.3333 39.9212 13.3333 40.7948 14.244C41.4658 14.9435 41.6214 15.9704 41.6575 17.7373Z"
                                        fill="#4AD991"/>
                                    <path
                                        d="M14.5614 22.3124C13.3334 24.3163 13.3334 27.0442 13.3334 32.4999C13.3334 37.9556 13.3334 40.6835 14.5614 42.6874C15.2485 43.8087 16.1912 44.7515 17.3125 45.4386C19.3164 46.6666 22.0443 46.6666 27.5 46.6666H32.5C37.9557 46.6666 40.6836 46.6666 42.6875 45.4386C43.8088 44.7515 44.7516 43.8087 45.4387 42.6874C46.2452 41.3713 46.522 39.743 46.617 37.2348H36.0608C32.86 37.2348 30.2653 34.6401 30.2653 31.4393C30.2653 28.2386 32.86 25.6439 36.0608 25.6439H46.4628C46.2958 24.2645 45.9918 23.215 45.4387 22.3124C44.7516 21.1911 43.8088 20.2484 42.6875 19.5613C42.3683 19.3656 42.0307 19.2012 41.6667 19.0629C39.7453 18.3333 37.0867 18.3333 32.5 18.3333H27.5C22.0443 18.3333 19.3164 18.3333 17.3125 19.5613C16.1912 20.2484 15.2485 21.1911 14.5614 22.3124Z"
                                        fill="#4AD991"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M46.6298 28.1439H36.0608C34.2407 28.1439 32.7653 29.6193 32.7653 31.4393C32.7653 33.2594 34.2407 34.7348 36.0608 34.7348H46.6628C46.6667 34.0445 46.6667 33.3017 46.6667 32.4999C46.6667 30.8045 46.6667 29.3726 46.6298 28.1439ZM36.0608 30.1893C35.3704 30.1893 34.8108 30.749 34.8108 31.4393C34.8108 32.1297 35.3704 32.6893 36.0608 32.6893H40.6062C41.2966 32.6893 41.8562 32.1297 41.8562 31.4393C41.8562 30.749 41.2966 30.1893 40.6062 30.1893H36.0608Z"
                                          fill="#4AD991"/>
                                </svg>

                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
