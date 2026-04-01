"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { ApiResponse } from "@/types/api.types";
import { ICreateJobPostPayload, IJobPostPayload } from "@/types/jobPost.type";

export const getAllJobPosts = async (queryString: string = "") => {
  try {
    const response = await httpClient.get<ApiResponse<IJobPostPayload[]>>(
      queryString ? `/job-posts?${queryString}` : "/job-posts",
    );
    return response;
  } catch (error) {
    console.log("Error fetching job posts:", error);
    throw error;
  }
};

export const createJobPost = async (payload: ICreateJobPostPayload) => {
  try {
    const response = await httpClient.post<ICreateJobPostPayload>(
      "/job-posts/create-job-post",
      payload,
    );
    return response;
  } catch (error) {
    console.log("Error creating job-post:", error);
    throw error;
  }
};

export const updateJobPost = async (
  id: string,
  payload: ICreateJobPostPayload,
) => {
  try {
    const response = await httpClient.patch<ICreateJobPostPayload>(
      `/job-posts/${id}`,
      payload,
    );
    return response;
  } catch (error) {
    console.log("Error updating job-post:", error);
    throw error;
  }
};

export const getJobPostById = async (id: string) => {
  try {
    const response = await httpClient.get<IJobPostPayload>(`/job-posts/${id}`);
    return response;
  } catch (error) {
    console.log("Error fetching job post by id:", error);
    throw error;
  }
};
