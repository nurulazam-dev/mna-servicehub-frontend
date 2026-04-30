/* eslint-disable @typescript-eslint/no-explicit-any */

import { httpClient } from "@/lib/axios/httpClient";

export const createPaymentService = async (payload: { requestId: string }) => {
  try {
    const response = await httpClient.post("/payments/create-payment", payload);
    
    return response.data as { checkoutUrl: string };
  } catch (error: any) {
    console.error("Payment Service Error:", error);
    throw error;
  }
};
