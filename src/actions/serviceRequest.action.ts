/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IServiceRequestPayload } from "@/zod/serviceRequest.validation";
import { cookies } from "next/headers";

export const createServiceRequestAction = async (
  payload: IServiceRequestPayload,
) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return {
        success: false,
        message: "You must be logged in to request a service.",
      };
    }

    const response = await fetch(`${baseUrl}/service-requests/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to submit service request",
        errors: result.errors || null,
      };
    }

    return {
      success: true,
      message: "Service request submitted successfully!",
      data: result.data,
    };
  } catch (error: any) {
    console.error("SERVICE_REQUEST_ACTION_ERROR:", error);
    return {
      success: false,
      message:
        error.message || "Something went wrong while connecting to the server",
    };
  }
};
