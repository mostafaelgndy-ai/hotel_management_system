"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey
  ? loadStripe(stripePublishableKey)
  : null;

function CheckoutPage() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post("/api/payment", {
      orderId,
      cartId,
    });
    return response.data.clientSecret;
  }, [cartId, orderId]);

  if (!stripePromise) {
    return (
      <div className="p-8 text-center text-sm text-red-600">
        Stripe is not configured. Set{" "}
        <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> in your{" "}
        <code>.env.local</code> file.
      </div>
    );
  }

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
export default CheckoutPage;
