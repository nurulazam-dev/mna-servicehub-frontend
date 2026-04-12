"use server";

import {
  createJobPostService,
  deleteJobPostService,
  getJobPostService,
  updateJobPostService,
} from "@/services/jobPosts.services";
import { ApiErrorResponse, ApiResponse } from "@/types/api.types";
import {
  ICreateJobPostPayload,
  IJobPostPayload,
  IUpdateJobPostPayload,
} from "@/types/jobPost.type";
import {
  createJobPostZodSchema,
  updateJobPostZodSchema,
} from "@/zod/jobPost.validation";

const getActionErrorMessage = (error: unknown, fallbackMessage: string) => {
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "data" in error.response &&
    error.response.data &&
    typeof error.response.data === "object" &&
    "message" in error.response.data &&
    typeof error.response.data.message === "string"
  ) {
    return error.response.data.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
};

export const createJobPostAction = async (
  payload: ICreateJobPostPayload,
): Promise<ApiResponse<IJobPostPayload> | ApiErrorResponse> => {
  const parsedPayload = createJobPostZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }

  try {
    return await createJobPostService(
      parsedPayload.data as ICreateJobPostPayload,
    );
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to create job post"),
    };
  }
};

export const getJobPostAction = async (
  id: string,
): Promise<ApiResponse<IJobPostPayload> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid job post id",
    };
  }

  try {
    return await getJobPostService(id);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to fetch job post details"),
    };
  }
};

export const updateJobPostAction = async (
  id: string,
  payload: IUpdateJobPostPayload,
): Promise<ApiResponse<IJobPostPayload> | ApiErrorResponse> => {
  const parsedPayload = updateJobPostZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }

  try {
    return await updateJobPostService(id, parsedPayload.data);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to update job post"),
    };
  }
};

export const deleteJobPostAction = async (
  id: string,
): Promise<ApiResponse<{ message: string }> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid job post id",
    };
  }

  try {
    const result = await deleteJobPostService(id);
    return result;
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to delete job post"),
    };
  }
};
