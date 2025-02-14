

import React from 'react';
import { RefundOrder } from '@/types/refund';
import StoreInformation from './StoreInformation';
import RefundInformation from './RefundInformation';
import ItemsList from './ItemsList';

interface OrderInfoProps {
    order: RefundOrder;
}

const OrderInfo: React.FC<OrderInfoProps> = ({ order }) => {
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
                                <span className="text-white font-medium">{order.id}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-6">
                                <StoreInformation order={order} />
                                <RefundInformation order={order} />
                            </div>
                            <ItemsList items={order.items} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;
