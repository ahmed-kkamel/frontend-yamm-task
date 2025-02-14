import { RefundOrder } from '../../types/refund';

interface RefundOrderRowProps {
    order: RefundOrder;
    onUpdateOrder: (orderId: string, updates: Partial<RefundOrder>) => void;
    showToast: (message: string, type: 'success' | 'error') => void;
}

const RefundOrderRow = ({ order, onUpdateOrder, showToast }: RefundOrderRowProps) => {
    return (
        <div className="flex items-center gap-2">
            <img src={order.store_logo} alt={order.store_name} className="w-8 h-8 rounded-full" />
            <a href={order.store_url} className="text-blue-600 hover:underline">
                {order.store_name}
            </a>
        </div>
    );
};

export default RefundOrderRow; 