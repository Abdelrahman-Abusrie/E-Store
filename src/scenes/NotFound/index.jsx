import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 -mt-8 mb-4 uppercase">Page Not Found</h2>
            <p className="text-gray-500 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
                Go Back Home
            </Link>
        </div>
    );
};
