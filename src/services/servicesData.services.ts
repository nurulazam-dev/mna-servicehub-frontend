"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { ICreateServicePayload, IServicePayload } from "@/types/service.type";

export const getAllServices = async (queryString: string) => {
  try {
    const services = await httpClient.get<IServicePayload[]>(
      queryString ? `/services?${queryString}` : "/services",
    );
    return services;
  } catch (error) {
    console.log("Error fetching services:", error);
    throw error;
  }
};

export const createService = async (payload: ICreateServicePayload) => {
  try {
    const response = await httpClient.post<IServicePayload>(
      "/services/create-service",
      payload,
    );
    return response;
  } catch (error) {
    console.log("Error creating service:", error);
    throw error;
  }
};

export const updateService = async (
  id: string,
  payload: ICreateServicePayload,
) => {
  try {
    const response = await httpClient.patch<IServicePayload>(
      `/services/${id}`,
      payload,
    );
    return response;
  } catch (error) {
    console.log("Error updating service:", error);
    throw error;
  }
};

export const getServiceById = async (id: string) => {
  try {
    const service = await httpClient.get<IServicePayload>(`/services/${id}`);
    return service;
  } catch (error) {
    console.log("Error fetching service by id:", error);
    throw error;
  }
};
