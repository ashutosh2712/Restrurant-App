"use client";

import { useCartStore } from "@/utils/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  const seachParams = useSearchParams();

  const payment_intent = seachParams.get("payment_intent");
  const clearCart = useCartStore((state) => state.clearCart);

  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        clearCart();
        router.push("/orders");
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [payment_intent, router]);

  return (
    <div>
      Payment Successful, You are being redirected to the orders page, Please do
      not close the page.
    </div>
  );
};

export default SuccessPage;
