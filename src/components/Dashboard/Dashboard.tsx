'use client';

import { useOrders } from '@/hooks/useOrders';
import { Sidebar } from '../Sidebar';
import { RefundOrdersTable } from '../RefundOrders/RefundOrdersTable';

export function Dashboard() {
    const { orders, totalOrders, isLoading, error, handleUpdateOrder } = useOrders();

    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar />
            <main className="ml-0 md:ml-64 p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6">Refund Orders</h1>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    <RefundOrdersTable
                        orders={orders}
                        totalOrders={totalOrders}
                        onUpdateOrder={handleUpdateOrder}
                        isLoading={isLoading}
                    />
                </div>
            </main>
        </div>
    );
} 