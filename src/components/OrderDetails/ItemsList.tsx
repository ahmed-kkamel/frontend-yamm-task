
import { RefundOrderItem } from '@/types/refund';

interface ItemsListProps {
    items: RefundOrderItem[];
}

const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Items
            </h2>
            <div className="space-y-4">
                {items.map((item) => (
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
    );
};

export default ItemsList;
