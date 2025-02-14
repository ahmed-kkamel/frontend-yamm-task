import { RefundOrder } from "./refund";

export interface RefundOrdersTableProps {
  readonly orders: RefundOrder[];
  readonly totalOrders: number;
  readonly onUpdateOrder: (
    orderId: string,
    updates: Partial<RefundOrder>
  ) => void;
  readonly isLoading: boolean;
}
