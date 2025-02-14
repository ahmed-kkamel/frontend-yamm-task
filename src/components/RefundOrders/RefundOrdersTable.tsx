import { useState } from 'react';
import { Table } from '../Table/Table';
import { RefundOrder, DecisionType } from '../../types/refund';
import { Select } from '../ui/Select';
import { Switch } from '../ui/Switch';
import { Toast } from '../ui/Toast';
import RefundOrderRow from "./RefundOrderRow"
import { useToast } from '../../hooks/useToast';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import OrderLink from '../ui/OrderLink';

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
    const [page, setPage] = useState(0);
    const PER_PAGE = 15;

    const { toast, showToast, clearToast } = useToast();

    const handleDecisionChange = (row: RefundOrder, value: DecisionType) => {
        onUpdateOrder(row.id, { decision: value });
        showToast(`Decision updated to ${value}`, 'success');
    };

    const handleStatusChange = (row: RefundOrder) => {
        onUpdateOrder(row.id, { active: !row.active });
        showToast(`Order status updated to ${!row.active ? 'active' : 'inactive'}`, 'success');
    };

    if (isLoading) {
        return (
            <LoadingSpinner />
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
            )
        },
        {
            header: 'Status',
            key: 'active',
            render: (row: RefundOrder) => (
                <Switch
                    checked={row.active}
                    onChange={() => handleStatusChange(row)}
                />
            )
        },
        {
            header: 'Actions',
            key: 'actions',
            render: (row: RefundOrder) => (
                <OrderLink orderId={row.id} />
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