
export default function SideBarLayout({ totalUsers }) {
    return (
        <div className='relative'>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                    type="button"
                    className="fixed inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="logo-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 md:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <a href="/" className="flex items-center ps-2.5 mb-5">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tumbuh Lestari</span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href={route('dashboard')} active={route().current('dashboard')}
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.75 4.375C1.75 2.92525 2.92525 1.75 4.375 1.75L9.625 1.75C11.0747 1.75 12.25 2.92525 12.25 4.375V9.625C12.25 11.0747 11.0747 12.25 9.625 12.25H4.375C2.92525 12.25 1.75 11.0747 1.75 9.625L1.75 4.375ZM4.375 3.5C3.89175 3.5 3.5 3.89175 3.5 4.375V9.625C3.5 10.1082 3.89175 10.5 4.375 10.5H9.625C10.1082 10.5 10.5 10.1082 10.5 9.625V4.375C10.5 3.89175 10.1082 3.5 9.625 3.5H4.375ZM15.75 4.375C15.75 2.92525 16.9253 1.75 18.375 1.75L23.625 1.75C25.0747 1.75 26.25 2.92525 26.25 4.375V9.625C26.25 11.0747 25.0747 12.25 23.625 12.25H18.375C16.9253 12.25 15.75 11.0747 15.75 9.625V4.375ZM18.375 3.5C17.8918 3.5 17.5 3.89175 17.5 4.375V9.625C17.5 10.1082 17.8918 10.5 18.375 10.5H23.625C24.1082 10.5 24.5 10.1082 24.5 9.625V4.375C24.5 3.89175 24.1082 3.5 23.625 3.5H18.375ZM1.75 18.375C1.75 16.9253 2.92525 15.75 4.375 15.75H9.625C11.0747 15.75 12.25 16.9253 12.25 18.375V23.625C12.25 25.0747 11.0747 26.25 9.625 26.25H4.375C2.92525 26.25 1.75 25.0747 1.75 23.625L1.75 18.375ZM4.375 17.5C3.89175 17.5 3.5 17.8918 3.5 18.375V23.625C3.5 24.1082 3.89175 24.5 4.375 24.5H9.625C10.1082 24.5 10.5 24.1082 10.5 23.625V18.375C10.5 17.8918 10.1082 17.5 9.625 17.5H4.375ZM15.75 18.375C15.75 16.9253 16.9253 15.75 18.375 15.75H23.625C25.0747 15.75 26.25 16.9253 26.25 18.375V23.625C26.25 25.0747 25.0747 26.25 23.625 26.25H18.375C16.9253 26.25 15.75 25.0747 15.75 23.625V18.375ZM18.375 17.5C17.8918 17.5 17.5 17.8918 17.5 18.375V23.625C17.5 24.1082 17.8918 24.5 18.375 24.5H23.625C24.1082 24.5 24.5 24.1082 24.5 23.625V18.375C24.5 17.8918 24.1082 17.5 23.625 17.5H18.375Z"
                                        fill="gray"/>
                                </svg>

                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.7615 24.1569C20.3627 22.9166 19.4838 21.8205 18.2613 21.0388C17.0388 20.2571 15.5409 19.8334 14 19.8334C12.4591 19.8334 10.9612 20.2571 9.73867 21.0388C8.51616 21.8205 7.63734 22.9166 7.23852 24.1569"
                                        stroke="gray" strokeWidth="2"/>
                                    <circle cx="14" cy="11.6666" r="3.5" stroke="gray" strokeWidth="2"
                                            strokeLinecap="round"/>
                                    <rect x="3.33337" y="3.33337" width="21.3333" height="21.3333" rx="3" stroke="gray"
                                          strokeWidth="2"/>
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">Admin</span>
                            </a>
                        </li>
                        <li>
                            <a href={route('anggota')} active={route().current('anggota')}
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.6667 9.33329C17.6667 11.3583 16.0251 13 14 13C11.975 13 10.3334 11.3583 10.3334 9.33329C10.3334 7.30825 11.975 5.66663 14 5.66663C16.0251 5.66663 17.6667 7.30825 17.6667 9.33329Z"
                                        stroke="gray" strokeWidth="2" strokeLinecap="round"/>
                                    <path
                                        d="M17.6683 9.25C17.9998 8.67579 18.5459 8.25679 19.1863 8.08519C19.8268 7.91358 20.5092 8.00342 21.0834 8.33494C21.6576 8.66646 22.0766 9.2125 22.2482 9.85295C22.4198 10.4934 22.33 11.1758 21.9984 11.75C21.6669 12.3242 21.1209 12.7432 20.4804 12.9148C19.84 13.0864 19.1576 12.9966 18.5834 12.6651C18.0092 12.3335 17.5902 11.7875 17.4186 11.147C17.247 10.5066 17.3368 9.82421 17.6683 9.25L17.6683 9.25Z"
                                        stroke="gray" strokeWidth="2"/>
                                    <path
                                        d="M6.00156 9.25C6.33308 8.67579 6.87913 8.25679 7.51958 8.08519C8.16003 7.91358 8.84242 8.00342 9.41663 8.33494C9.99084 8.66646 10.4098 9.2125 10.5814 9.85295C10.753 10.4934 10.6632 11.1758 10.3317 11.75C10.0002 12.3242 9.45412 12.7432 8.81367 12.9148C8.17323 13.0864 7.49084 12.9966 6.91663 12.6651C6.34242 12.3335 5.92342 11.7875 5.75181 11.147C5.5802 10.5066 5.67004 9.82421 6.00156 9.25L6.00156 9.25Z"
                                        stroke="gray" strokeWidth="2"/>
                                    <path
                                        d="M19.6952 21L18.7149 21.1975L18.8765 22H19.6952V21ZM24.2345 19.9007L23.2839 20.211L24.2345 19.9007ZM17.2443 17.1623L16.6394 16.366L15.4828 17.2445L16.7161 18.0115L17.2443 17.1623ZM23.3672 20H19.6952V22H23.3672V20ZM23.2839 20.211C23.2783 20.1938 23.2733 20.1607 23.2812 20.1205C23.2887 20.0824 23.3046 20.0535 23.3198 20.0348C23.3492 19.9986 23.3736 20 23.3672 20V22C24.5238 22 25.6201 20.9226 25.1851 19.5903L23.2839 20.211ZM19.8333 17.3334C21.9438 17.3334 22.8678 18.9364 23.2839 20.211L25.1851 19.5903C24.7004 18.1056 23.3143 15.3334 19.8333 15.3334V17.3334ZM17.8491 17.9587C18.3262 17.5963 18.9586 17.3334 19.8333 17.3334V15.3334C18.5148 15.3334 17.4588 15.7436 16.6394 16.366L17.8491 17.9587ZM16.7161 18.0115C17.9859 18.8012 18.508 20.1702 18.7149 21.1975L20.6755 20.8026C20.4249 19.5581 19.7315 17.5316 17.7724 16.3132L16.7161 18.0115Z"
                                        fill="gray"/>
                                    <path
                                        d="M10.7557 17.1623L11.2838 18.0115L12.5172 17.2444L11.3606 16.366L10.7557 17.1623ZM3.76546 19.9006L4.71608 20.211L4.71608 20.211L3.76546 19.9006ZM8.30476 21V22H9.12344L9.28508 21.1975L8.30476 21ZM8.1667 17.3334C9.04138 17.3334 9.6738 17.5963 10.1509 17.9586L11.3606 16.366C10.5412 15.7436 9.48524 15.3334 8.1667 15.3334V17.3334ZM4.71608 20.211C5.13222 18.9364 6.05618 17.3334 8.1667 17.3334V15.3334C4.68568 15.3334 3.29959 18.1056 2.81485 19.5903L4.71608 20.211ZM4.6328 20C4.62635 20 4.65084 19.9986 4.68016 20.0348C4.69536 20.0535 4.71132 20.0824 4.71881 20.1205C4.72672 20.1607 4.7217 20.1938 4.71608 20.211L2.81485 19.5903C2.37987 20.9226 3.47615 22 4.6328 22V20ZM8.30476 20H4.6328V22H8.30476V20ZM9.28508 21.1975C9.49198 20.1702 10.0141 18.8012 11.2838 18.0115L10.2276 16.3131C8.26848 17.5316 7.57509 19.5581 7.32445 20.8026L9.28508 21.1975Z"
                                        fill="gray"/>
                                    <path
                                        d="M14 16.3334C18.305 16.3334 19.4329 19.5105 19.7284 21.1753C19.8249 21.719 19.3856 22.1667 18.8333 22.1667H9.16663C8.61434 22.1667 8.17501 21.719 8.27154 21.1753C8.56705 19.5105 9.69496 16.3334 14 16.3334Z"
                                        stroke="gray" strokeWidth="2" strokeLinecap="round"/>
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">Anggota</span>
                                <span
                                    className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{totalUsers}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3.5" y="7" width="21" height="14" rx="2" stroke="gray" strokeWidth="2"/>
                                    <path d="M7 10.5H9.33333" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M18.6666 17.5H21" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
                                    <circle cx="14" cy="14" r="2.5" stroke="gray" strokeWidth="2"/>
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">Pinjaman</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3.5" y="7" width="21" height="15.1667" rx="2" stroke="gray"
                                          strokeWidth="2"/>
                                    <path d="M8.16663 17.5H8.17585" stroke="gray" strokeWidth="2"
                                          strokeLinecap="round"/>
                                    <path d="M4.66663 12.8333H24.5" stroke="gray" strokeWidth="2"
                                          strokeLinecap="round"/>
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">Angsuran</span>
                            </a>
                        </li>
                        <li>
                            <button type="button"
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.50001 7.58333V7.58333C3.50001 5.9725 4.80584 4.66666 6.41667 4.66666L22.5 4.66666C22.8115 4.66666 22.9673 4.66666 23.0833 4.73365C23.1593 4.77753 23.2225 4.84065 23.2663 4.91666C23.3333 5.03269 23.3333 5.18846 23.3333 5.5V5.5C23.3333 7.36923 23.3333 8.30385 22.9314 9C22.6681 9.45606 22.2894 9.83477 21.8333 10.0981C21.1372 10.5 20.2026 10.5 18.3333 10.5H17.5M3.50001 7.58333V7.58333C3.50001 9.19416 4.80584 10.5 6.41667 10.5L22.5 10.5C23.4428 10.5 23.9142 10.5 24.2071 10.7929C24.5 11.0858 24.5 11.5572 24.5 12.5L24.5 15.1667M3.50001 7.58333L3.50001 20.5C3.50001 22.3856 3.50001 23.3284 4.08579 23.9142C4.67158 24.5 5.61439 24.5 7.50001 24.5L22.5 24.5C23.4428 24.5 23.9142 24.5 24.2071 24.2071C24.5 23.9142 24.5 23.4428 24.5 22.5L24.5 19.8333M24.5 19.8333H19.5C18.5572 19.8333 18.0858 19.8333 17.7929 19.5404C17.5 19.2475 17.5 18.7761 17.5 17.8333V17.1667C17.5 16.2239 17.5 15.7525 17.7929 15.4596C18.0858 15.1667 18.5572 15.1667 19.5 15.1667H24.5M24.5 19.8333L24.5 15.1667"
                                        stroke="gray" strokeWidth="2"/>
                                </svg>
                                <span
                                    className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Simpanan</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Simpanan
                                        Pokok</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Simpanan Wajib</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Simpanan Manasuka</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

        </div>
    )
}
