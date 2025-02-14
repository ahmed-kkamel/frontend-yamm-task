import { useState, useEffect } from "react";
import { RefundOrder } from "@/types/refund";

export const useOrders = () => {
  const [orders, setOrders] = useState<RefundOrder[]>([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/refund-orders");

      if (!response.ok) {
        const errorData = await response.json().catch(() => {
          console.error("Failed to parse error response");
          return {};
        });
        throw new Error(
          errorData.message ||
            `Failed to fetch orders (Status: ${response.status}). Please ensure the API endpoint is correctly configured.`
        );
      }
      const data = await response.json();
      setOrders(data);
      setTotalOrders(data.length);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to connect to the server. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateOrder = async (
    orderId: string,
    updates: Partial<RefundOrder>
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/refund-orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) throw new Error("Failed to update order");

      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, ...updates } : order
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update order");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders, totalOrders, isLoading, error, handleUpdateOrder };
};
