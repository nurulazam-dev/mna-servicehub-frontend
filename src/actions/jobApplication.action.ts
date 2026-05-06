"use server";

import { getActionErrorMessage } from "@/lib/getActionErrorMessage";
import {
  applyJobApplicationService,
  getJobApplicationService,
  updateJobApplicationService,
} from "@/services/jobApplications.services";
import { ApiErrorResponse, ApiResponse } from "@/types/api.types";
import {
  IApplyJobApplicationPayload,
  IJobApplicationPayload,
  IUpdateJobApplicationPayload,
} from "@/types/jobApplication.type";
import {
  applyJobApplicationZodSchema,
  updateJobApplicationZodSchema,
} from "@/zod/jobApplication.validation";

/* export const applyJobAction = async (payload: any) => {
  try {
    const response = await httpClient.post("/job-applications/apply", payload);
    revalidatePath("/job-posts/[id]", "page");
    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to submit application"),
    };
  }
}; */

export const applyJobAction = async (
  payload: IApplyJobApplicationPayload,
): Promise<ApiResponse<IJobApplicationPayload> | ApiErrorResponse> => {
  const parsedPayload = applyJobApplicationZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }

  try {
    return await applyJobApplicationService(
      parsedPayload.data as IApplyJobApplicationPayload,
    );
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to create job post"),
    };
  }
};

export const getJobApplicationAction = async (
  id: string,
): Promise<ApiResponse<IJobApplicationPayload> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid job application id",
    };
  }

  try {
    return await getJobApplicationService(id);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(
        error,
        "Failed to fetch job application details",
      ),
    };
  }
};

export const updateJobApplicationAction = async (
  id: string,
  payload: IUpdateJobApplicationPayload,
): Promise<ApiResponse<IJobApplicationPayload> | ApiErrorResponse> => {
  const parsedPayload = updateJobApplicationZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }

  try {
    const result = await updateJobApplicationService(
      id,
      parsedPayload.data as IUpdateJobApplicationPayload,
    );

    return result;
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to update job application"),
    };
  }
};
