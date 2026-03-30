import { IJobPostPayload } from "./jobPost.type";
import { IUserPayload } from "./users.type";

export type JobApplicationStatus = "PENDING" | "ACCEPTED" | "REJECTED";

export interface IJobApplicationPayload {
  id: string;
  userId: string;
  user?: IUserPayload;
  jobPostId?: string | null;
  jobPost?: IJobPostPayload;
  cvUrl: string;
  status: JobApplicationStatus;
  feedback?: string | null;
  createdAt: Date | string;
}
