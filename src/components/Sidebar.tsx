'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { path: '/', label: 'Refund Orders', icon: '📦' },
    ];

    return (
        <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed left-0 top-0 shadow-xl">
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
    );
} 