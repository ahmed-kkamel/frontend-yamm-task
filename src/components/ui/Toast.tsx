import { useEffect } from 'react';

interface ToastProps {
    readonly message: string;
    readonly type: 'success' | 'error';
    readonly onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const gradientBg = type === 'success' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600';

    return (
        <div className={`fixed top-4 right-4 ${gradientBg} text-white px-6 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fadeIn`}>
            <div className="flex items-center">
                <div className="mr-2 text-2xl">
                    {type === 'success' ? '✅' : '❌'}
                </div>
                <span className="font-semibold text-lg">{message}</span>
            </div>
            <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors duration-200">
                &times;
            </button>
        </div>
    );
} 