'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { path: '/', label: 'Refund Orders', icon: '📦' },
    ];

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="md:hidden fixed top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg z-50">
                <HiOutlineMenu className="text-2xl" />
            </button>

            <div className={`w-64 h-screen z-50 bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed left-0 top-0 shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg md:hidden">
                    <AiOutlineClose className="text-2xl" />
                </button>
                <div className="p-6 border-b border-gray-700/50">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Dashboard
                    </h1>
                </div>
                <nav className="mt-6 px-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 
                                ${pathname === item.path
                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-medium'
                                    : 'hover:bg-gray-700/50 text-gray-300 hover:text-white'
                                }`}
                        >
                            <span className="mr-3 text-xl">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
} 