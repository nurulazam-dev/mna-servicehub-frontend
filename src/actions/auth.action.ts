/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  getDefaultDashboardRoute,
  isValidRedirectForRole,
  UserRole,
} from "@/lib/authUtils";
import { httpClient } from "@/lib/axios/httpClient";
import { setTokenInCookies } from "@/lib/tokenUtils";
import { ApiErrorResponse } from "@/types/api.types";
import { ILoginResponse } from "@/types/auth.types";
import { redirect } from "next/navigation";
import {
  ILoginPayload,
  IRegisterCandidatePayload,
  IRegisterCustomerPayload,
  loginZodSchema,
  registerCustomerZodSchema,
  registerJobCandidateZodSchema,
} from "@/zod/auth.validation";

export const loginAction = async (
  payload: ILoginPayload,
  redirectPath?: string,
): Promise<ILoginResponse | ApiErrorResponse> => {
  const parsedPayload = loginZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    const firstError = parsedPayload.error.issues[0].message || "Invalid input";
    return {
      success: false,
      message: firstError,
    };
  }

  let targetUrl = "";

  try {
    const response = await httpClient.post<ILoginResponse>(
      "/auth/login",
      parsedPayload.data,
    );

    const { accessToken, refreshToken, token, user } = response.data;
    const { role, needPasswordChange, email, emailVerified } = user;

    await setTokenInCookies("accessToken", accessToken);
    await setTokenInCookies("refreshToken", refreshToken);
    await setTokenInCookies("better-auth.session_token", token, 24 * 60 * 60);

    if (!emailVerified) {
      targetUrl = `/verify-email?email=${email}`;
    } else if (needPasswordChange) {
      targetUrl = `/reset-password?email=${email}`;
    } else {
      targetUrl =
        redirectPath && isValidRedirectForRole(redirectPath, role as UserRole)
          ? redirectPath
          : getDefaultDashboardRoute(role as UserRole);
    }
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    if (error?.response?.data?.message === "Email not verified") {
      targetUrl = `/verify-email?email=${payload.email}`;
    } else {
      return {
        success: false,
        message:
          error?.response?.data?.message || `Login failed: ${error.message}`,
      };
    }
  }

  if (targetUrl) {
    redirect(targetUrl);
  }

  return { success: true, message: "Login successful" };
};

export const registerCandidateAction = async (
  payload: IRegisterCandidatePayload,
  redirectPath?: string,
): Promise<ILoginResponse | ApiErrorResponse> => {
  const parsedPayload = registerJobCandidateZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    const firstError =
      parsedPayload.error.issues[0].message || "Invalid registration data";
    return {
      success: false,
      message: firstError,
    };
  }

  let targetUrl = "";

  try {
    const response = await httpClient.post<ILoginResponse>(
      "/auth/register-candidate",
      parsedPayload.data,
    );
    console.log("register-candidate res=====", response);

    const { accessToken, refreshToken, token, user } = response.data;
    const { role, email } = user;

    await setTokenInCookies("accessToken", accessToken);
    await setTokenInCookies("refreshToken", refreshToken);
    await setTokenInCookies("better-auth.session_token", token, 24 * 60 * 60);

    if (!user.emailVerified) {
      targetUrl = `/verify-email?email=${email}`;
    } else {
      targetUrl =
        redirectPath && isValidRedirectForRole(redirectPath, role as UserRole)
          ? redirectPath
          : getDefaultDashboardRoute(role as UserRole);
    }
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    return {
      success: false,
      message:
        error?.response?.data?.message ||
        `Registration failed: ${error.message}`,
    };
  }

  if (targetUrl) {
    redirect(targetUrl);
  }

  return { success: true, message: "Registration successful" };
};

export const registerCustomerAction = async (
  payload: IRegisterCustomerPayload,
  redirectPath?: string,
): Promise<ILoginResponse | ApiErrorResponse> => {
  const parsedPayload = registerCustomerZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    const firstError =
      parsedPayload.error.issues[0].message || "Invalid registration data";
    return {
      success: false,
      message: firstError,
    };
  }

  let targetUrl = "";

  try {
    const response = await httpClient.post<ILoginResponse>(
      "/auth/register",
      parsedPayload.data,
    );

    const { accessToken, refreshToken, token, user } = response.data;
    const { role, email } = user;

    await setTokenInCookies("accessToken", accessToken);
    await setTokenInCookies("refreshToken", refreshToken);
    await setTokenInCookies("better-auth.session_token", token, 24 * 60 * 60);

    if (!user.emailVerified) {
      targetUrl = `/verify-email?email=${email}`;
    } else {
      targetUrl =
        redirectPath && isValidRedirectForRole(redirectPath, role as UserRole)
          ? redirectPath
          : getDefaultDashboardRoute(role as UserRole);
    }
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    return {
      success: false,
      message:
        error?.response?.data?.message ||
        `Registration failed: ${error.message}`,
    };
  }

  if (targetUrl) {
    redirect(targetUrl);
  }

  return { success: true, message: "Registration successful" };
};
