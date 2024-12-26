"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import {
  loadStripe,
  StripeElements,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = params;
  // console.log("id : ", id);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        console.log("res: ", res);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        console.log("pay page data: ", data);
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PayPage;
