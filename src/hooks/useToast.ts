import { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  const clearToast = () => {
    setToast(null);
  };

  return { toast, showToast, clearToast };
};
