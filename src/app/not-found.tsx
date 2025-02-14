import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <h1 className="text-9xl font-extrabold text-blue-400 drop-shadow-lg">404</h1>
            <p className="mt-4 text-lg text-gray-300 font-semibold text-center max-w-md">Oops! It seems you've taken a wrong turn. The page you're looking for doesn't exist.</p>
            <p className="mt-2 text-md text-gray-400 text-center max-w-md">Don't worry, we'll help you find your way back to safety!</p>
            <Link href="/" className="mt-6 px-8 py-4 text-lg text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;