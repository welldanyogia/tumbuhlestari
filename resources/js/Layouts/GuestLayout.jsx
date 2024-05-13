import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-900 dark:bg-gray-900">
            <div>
                <Link href="/">
                    {/*<ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />*/}
                    <h1 className="text-gray-500 text-4xl font-bold underline mb-6">Tumbuh Lestari</h1>
                </Link>
            </div>

            <div className="w-1/2 h-1/2 sm:max-w-md mt-6 px-6 py-4 bg-gray-800 dark:bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
