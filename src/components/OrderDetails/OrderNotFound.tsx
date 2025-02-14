

import React from 'react';

const OrderNotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-lg mx-auto border border-gray-100">
                <div className="mb-6">
                    <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-3">Order not found</h1>
                <p className="text-gray-600">We couldn't locate the order you're looking for.</p>
            </div>
        </div>
    );
};

export default OrderNotFound
