import { RefundOrder } from '@/types/refund';

interface RefundInformationProps {
    order: RefundOrder;
}

const RefundInformation: React.FC<RefundInformationProps> = ({ order }) => {
    return (
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
    );
};

export default RefundInformation;
