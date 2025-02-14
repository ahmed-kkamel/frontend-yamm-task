import { RefundOrder } from '../../types/refund';
import Link from 'next/link';

interface RefundOrderRowProps {
    order: RefundOrder;

}

const RefundOrderRow = ({ order }: RefundOrderRowProps) => {
    return (
        <div className="flex items-center gap-2">
            <img src={order.store_logo} alt={order.store_name} className="w-8 h-8 rounded-full" />
            {order.store_url ? (
                <Link href={order.store_url} className="text-blue-600 hover:underline" rel="noopener noreferrer" target="_blank">

                    {order.store_name}
                </Link>
            ) : (
                <button className="text-blue-600 hover:underline" disabled>
                    {order.store_name}
                </button>
            )}
        </div>
    );
};

export default RefundOrderRow; 