"use client";

import { useCartStore } from "@/utils/store";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
};

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        if (payment_intent) {
          await fetch(`${API_BASE_URL}/api/confirm/${payment_intent}`, {
            method: "PUT",
          });
          clearCart();
          router.push("/orders");
        }
      } catch (err) {
        console.error(err);
      }
    };

    makeRequest();
  }, [payment_intent, router, clearCart]);

  return (
    <div>
      Payment Successful, You are being redirected to the orders page. Please do
      not close the page.
    </div>
  );
};

export default SuccessPage;

export const dynamic = "force-dynamic"; // Ensure dynamic rendering
