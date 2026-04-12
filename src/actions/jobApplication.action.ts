/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { revalidatePath } from "next/cache";

export const applyJobAction = async (payload: any) => {
  try {
    const response = await httpClient.post("/job-applications/apply", payload);
    revalidatePath("/job-posts/[id]", "page");
    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || "Failed to submit application",
    };
  }
};
