import { useEffect, useState } from "react";
import { RefundOrder } from "@/types/refund";

export function useOrderDetails(id: string) {
  const [order, setOrder] = useState<RefundOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch(`/api/refund-orders/${id}`);
        if (!response.ok) throw new Error("Failed to fetch order");
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [id]);

  return { order, loading };
}
