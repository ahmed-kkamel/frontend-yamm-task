'use client';

import { useParams } from 'next/navigation';
import LoadingSpinner from '@/components/OrderDetails/LoadingSpinner';
import OrderNotFound from '@/components/OrderDetails/OrderNotFound';
import OrderInfo from '@/components/OrderDetails/OrderInfo';
import { useOrderDetails } from '@/hooks/useOrderDetails';

export default function OrderDetails() {
    const params = useParams();
    const id = params.id as string;
    const { order, loading } = useOrderDetails(id);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!order) {
        return <OrderNotFound />;
    }

    return <OrderInfo order={order} />;
} 