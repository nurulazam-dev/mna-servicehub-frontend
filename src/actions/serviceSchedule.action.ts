import { getActionErrorMessage } from "@/lib/getActionErrorMessage";
import { getServiceScheduleById } from "@/services/serviceSchedules.services";
import { ApiErrorResponse, ApiResponse } from "@/types/api.types";
import { IServiceSchedulePayload } from "@/types/schedule.type";

export const getServiceScheduleByIdAction = async (
  id: string,
): Promise<ApiResponse<IServiceSchedulePayload> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid Service schedule id",
    };
  }

  try {
    return await getServiceScheduleById(id);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(
        error,
        "Failed to fetch Service Schedule details",
      ),
    };
  }
};

/* export const adminUpdateUserAction = async (
  id: string,
  payload: IAdminUpdateUserPayload,
): Promise<ApiResponse<IUserPayload> | ApiErrorResponse> => {
  const parsedPayload = adminUpdateUserZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return {
      success: false,
      message: parsedPayload.error.issues[0]?.message || "Invalid input",
    };
  }

  try {
    return await adminUpdateUser(id, parsedPayload.data);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(error, "Failed to update user"),
    };
  }
}; */
