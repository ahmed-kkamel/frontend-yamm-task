export interface RefundItem {
  name: string;
  id: string;
  price: number;
  quantity: number;
}

export type DecisionType = "accept" | "reject" | "escalate" | null;

export interface RefundOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface RefundOrder {
  id: string;
  reason: string;
  store_name: string;
  store_logo: string;
  store_url: string;
  amount: number;
  active: boolean;
  decision: DecisionType;
  items: RefundOrderItem[];
}
