
import { RefundOrder } from '@/types/refund';

interface StoreInformationProps {
    order: RefundOrder;
}

const StoreInformation: React.FC<StoreInformationProps> = ({ order }) => {
    return (
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
    );
};

export default StoreInformation;
