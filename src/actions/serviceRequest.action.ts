/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  applyServiceRequestService,
  cancelServiceRequestService,
  getServiceRequestByIdService,
  updateServiceRequestCostBySPService,
  updateServiceRequestService,
} from "@/services/serviceRequest.services";
import { ApiErrorResponse, ApiResponse } from "@/types/api.types";
import { IApplyServiceRequestPayload } from "@/types/serviceRequest.type";
import {
  IServiceRequestPayload,
  IServiceRequestUpdateCostBySPPayload,
  IServiceRequestUpdatePayload,
  serviceRequestZodSchema,
  updateServiceCostBySPZodSchema,
  updateServiceRequestByManagementZodSchema,
} from "@/zod/serviceRequest.validation";

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

export const applyServiceRequestAction = async (
  payload: IApplyServiceRequestPayload,
): Promise<ApiResponse<IServiceRequestPayload> | ApiErrorResponse> => {
  const parsedPayload = serviceRequestZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }
  try {
    return await applyServiceRequestService(
      parsedPayload.data as IApplyServiceRequestPayload,
    );
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to submit service request"),
    };
  }
};

/* export const getMyAllServiceRequestByCustomerAction = async (
  id: string,
): Promise<ApiResponse<IServiceRequestPayload> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid service request id",
    };
  }

  try {
    return await getMyServiceRequestByCustomerService(id);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(
        error,
        "Failed to fetch service request details",
      ),
    };
  }
}; */

export const getServiceRequestByIdAction = async (
  id: string,
): Promise<ApiResponse<IServiceRequestPayload> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid service request id",
    };
  }

  try {
    return await getServiceRequestByIdService(id);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(
        error,
        "Failed to fetch service request details",
      ),
    };
  }
};

export const updateServiceRequestAction = async (
  id: string,
  payload: IServiceRequestUpdatePayload,
): Promise<ApiResponse<IServiceRequestPayload> | ApiErrorResponse> => {
  const parsedPayload =
    updateServiceRequestByManagementZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }

  try {
    const result = await updateServiceRequestService(
      id,
      parsedPayload.data as IServiceRequestUpdatePayload,
    );

    return result;
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to update service request"),
    };
  }
};

export const updateServiceRequestCostBySPAction = async (
  id: string,
  payload: IServiceRequestUpdateCostBySPPayload,
): Promise<ApiResponse | ApiErrorResponse> => {
  const parsedPayload = updateServiceCostBySPZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }

  try {
    const result = await updateServiceRequestCostBySPService(
      id,
      parsedPayload.data,
    );

    return {
      success: result?.success ?? true,
      message: result?.message || "Cost updated successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to update service cost"),
    };
  }
};

export const cancelServiceRequestAction = async (
  id: string,
): Promise<ApiResponse<{ message: string }> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid service request id",
    };
  }

  try {
    const result = await cancelServiceRequestService(id);
    return result;
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to cancel service request"),
    };
  }
};
