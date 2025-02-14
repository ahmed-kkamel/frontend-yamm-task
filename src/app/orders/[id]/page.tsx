'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RefundOrder } from '@/types/refund';

export default function OrderDetails() {
    const params = useParams();
    const id = params.id;
    const [order, setOrder] = useState<RefundOrder | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const response = await fetch(`/api/refund-orders/${id}`);
                if (!response.ok) throw new Error('Failed to fetch order');
                const data = await response.json();
                setOrder(data);
            } catch (error) {
                console.error('Error fetching order:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchOrder();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 border-t-4 border-blue-600 rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    if (!order) {
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
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Order Details</h1>
                                <p className="text-blue-100">Review your order information below</p>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2">
                                <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                                <span className="text-white font-medium">{order.id}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        Store Information
                                    </h2>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative">
                                            <img
                                                src={order.store_logo}
                                                alt={order.store_name}
                                                className="w-16 h-16 rounded-xl shadow-lg object-cover"
                                            />
                                            <div className="absolute inset-0 ring-2 ring-blue-500 ring-offset-2 rounded-xl pointer-events-none"></div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-lg">{order.store_name}</h3>
                                            <a href={order.store_url} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
                                                <span>Visit Store</span>
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white rounded-lg p-4 border border-gray-100">
                                            <p className="text-sm font-medium text-gray-500 mb-1">Status</p>
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${order.active
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                }`}>
                                                {order.active ? 'Active' : 'Inactive'}
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-gray-100">
                                            <p className="text-sm font-medium text-gray-500 mb-1">Decision</p>
                                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                {order.decision ?? 'Pending'}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Refund Information
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-white rounded-lg p-4 border border-gray-100">
                                            <p className="text-sm font-medium text-gray-500 mb-2">Reason</p>
                                            <p className="font-medium text-gray-800">{order.reason}</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-gray-100">
                                            <p className="text-sm font-medium text-gray-500 mb-2">Total Amount</p>
                                            <p className="text-3xl font-bold text-gray-800">
                                                ${(order.amount / 100).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Items
                                </h2>
                                <div className="space-y-4">
                                    {order.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-colors"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                                        </svg>
                                                        Quantity: {item.quantity}
                                                    </p>
                                                </div>
                                                <p className="font-semibold text-gray-800">
                                                    ${(item.price / 100).toFixed(2)}
                                                </p>
                                            </div>
                                            <div className="mt-3 pt-3 border-t border-gray-100">
                                                <div className="flex justify-between items-center">
                                                    <p className="text-sm text-gray-500">Subtotal</p>
                                                    <p className="font-semibold text-gray-800">
                                                        ${((item.price * item.quantity) / 100).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 