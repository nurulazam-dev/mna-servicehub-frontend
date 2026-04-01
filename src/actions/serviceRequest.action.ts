/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { IServiceRequestPayload } from "@/zod/serviceRequest.validation";
import { revalidatePath } from "next/cache";

export const createServiceRequestAction = async (
  payload: IServiceRequestPayload,
) => {
  try {
    const response = await httpClient.post("/service-requests/apply", payload);
    revalidatePath("/services/[id]", "page");
    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.response?.data?.message || "Failed to submit service request",
    };
  }
};
