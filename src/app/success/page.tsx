"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import React, { useEffect } from "react";
import { updateOrder } from "./actions";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const payment_intent = searchParams.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      console.log(payment_intent);

      try {
        startTransition(async () => {
          await updateOrder(payment_intent!);
        });
        setTimeout(() => {
          router.push("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [payment_intent, router]);

  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
        {!isPending && (
          <p className="max-w-[600px]">
            Payment successful. You are being redirected to the orders page.
            Please do not close the page.
          </p>
        )}
      </div>
    </>
  );
};

export default SuccessPage;
