import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound()  {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-lg text-gray-700">Oops! Page not found.</p>
        <p className="mt-2 text-md text-gray-500">The page you are looking for does not exist.</p>
        <Link 
            to=""
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            Go to Home
        </Link>
    </div>
    );
};

