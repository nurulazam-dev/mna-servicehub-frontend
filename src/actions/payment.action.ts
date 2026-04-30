"use server";

import { createPaymentService } from "@/services/payment.services";
import {
  createPaymentZodSchema,
  ICreatePaymentPayload,
} from "@/zod/payment.validation";
import { ApiResponse, ApiErrorResponse } from "@/types/api.types";
import { getActionErrorMessage } from "@/lib/getActionErrorMessage";

export const createPaymentAction = async (
  payload: ICreatePaymentPayload,
): Promise<ApiResponse<{ checkoutUrl: string }> | ApiErrorResponse> => {
  const parsedPayload = createPaymentZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message:
        parsedPayload.error.issues[0]?.message || "Invalid payment request",
    };
  }

  try {
    const response = await createPaymentService(parsedPayload.data);

    return {
      success: true,
      message: "Payment session created",
      data: response,
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(
        error,
        "Failed to initiate payment session",
      ),
    };
  }
};
