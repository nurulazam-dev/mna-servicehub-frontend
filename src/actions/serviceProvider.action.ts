import { getActionErrorMessage } from "@/lib/getActionErrorMessage";
import { getServiceProviderById } from "@/services/serviceProviders.services";
import { ApiErrorResponse, ApiResponse } from "@/types/api.types";
import { IServiceProviderPayload } from "@/types/serviceProvider.type";

export const getServiceProviderByIdAction = async (
  id: string,
): Promise<ApiResponse<IServiceProviderPayload> | ApiErrorResponse> => {
  if (!id) {
    return {
      success: false,
      message: "Invalid Service Provider id",
    };
  }

  try {
    return await getServiceProviderById(id);
  } catch (error: unknown) {
    return {
      success: false,
      message: getActionErrorMessage(
        error,
        "Failed to fetch Service Provider details",
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
