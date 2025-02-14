import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table } from '../Table/Table';
import { RefundOrder, DecisionType } from '../../types/refund';
import { Select } from '../ui/Select';
import { Switch } from '../ui/Switch';
import { Toast } from '../ui/Toast';
import RefundOrderRow from "./RefundOrderRow"
import { useToast } from '../../hooks/useToast';

interface RefundOrdersTableProps {
    readonly orders: RefundOrder[];
    readonly totalOrders: number;
    readonly onUpdateOrder: (
        orderId: string,
        updates: Partial<RefundOrder>
    ) => void;
    readonly isLoading: boolean;
}


export function RefundOrdersTable({ orders, totalOrders, onUpdateOrder, isLoading }: RefundOrdersTableProps) {
    const router = useRouter();
    const [page, setPage] = useState(0);
    const [isUpdating, setIsUpdating] = useState(false);
    const PER_PAGE = 15;

    const { toast, showToast, clearToast } = useToast();

    const handleDecisionChange = (row: RefundOrder, value: DecisionType) => {
        setIsUpdating(true);
        onUpdateOrder(row.id, { decision: value });
        showToast(`Decision updated to ${value}`, 'success');
        setIsUpdating(false);
    };

    const handleStatusChange = (row: RefundOrder) => {
        setIsUpdating(true);
        onUpdateOrder(row.id, { active: !row.active });
        showToast(`Order status updated to ${!row.active ? 'active' : 'inactive'}`, 'success');
        setIsUpdating(false);
    };

    if (isLoading || isUpdating) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    const columns = [
        { header: 'ID', key: 'id' },
        {
            header: 'Store',
            key: 'store',
            render: (row: RefundOrder) => <RefundOrderRow order={row} onUpdateOrder={onUpdateOrder} showToast={showToast} />
        },
        { header: 'Reason', key: 'reason' },
        {
            header: 'Amount',
            key: 'amount',
            render: (row: RefundOrder) => `$${row.amount.toFixed(2)}`
        },
        {
            header: 'Items',
            key: 'items',
            render: (row: RefundOrder) => row.items?.length
        },
        {
            header: 'Decision',
            key: 'decision',
            render: (row: RefundOrder) => (
                <>
                    {isUpdating && (
                        <div className="flex items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                        </div>
                    )}
                    <Select
                        value={row.decision ?? ''}
                        onChange={(value) => handleDecisionChange(row, value as DecisionType)}
                        options={[
                            { value: '', label: 'Not yet' },
                            { value: 'accept', label: 'Accept' },
                            { value: 'reject', label: 'Reject' },
                            { value: 'escalate', label: 'Escalate' }
                        ]}
                    />
                </>
            )
        },
        {
            header: 'Status',
            key: 'active',
            render: (row: RefundOrder) => (
                <>
                    {isUpdating && (
                        <div className="flex items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                        </div>
                    )}
                    <Switch
                        checked={row.active}
                        onChange={() => handleStatusChange(row)}
                    />
                </>
            )
        },
        {
            header: 'Actions',
            key: 'actions',
            render: (row: RefundOrder) => (
                <button
                    onClick={() => router.push(`/orders/${row.id}`)}
                    className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
            )
        },
    ];

    return (
        <>
            <Table
                data={orders}
                columns={columns}
                totalItems={totalOrders}
                page={page}
                perPage={PER_PAGE}
                onPageChange={setPage}
            />
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={clearToast}
                />
            )}
        </>
    );
} 