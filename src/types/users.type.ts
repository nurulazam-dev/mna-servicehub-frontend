import { IAccountPayload, ISessionPayload } from "./auth.type";
import { IJobApplicationPayload } from "./jobApplication.type";
import { IReviewPayload } from "./review.type";
import { IServiceProviderPayload } from "./serviceProvider.type";
import { IServiceRequestPayload } from "./serviceRequest.type";

export type UserRole =
  | "ADMIN"
  | "MANAGER"
  | "SERVICE_PROVIDER"
  | "JOB_CANDIDATE"
  | "CUSTOMER";

export type UserStatus = "ACTIVE" | "BLOCKED" | "DELETED";

export interface IUserPayload {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  address?: string | null;
  phone: string;
  role: UserRole;
  status: UserStatus;
  needPasswordChange: boolean;
  isDeleted: boolean;
  deletedAt?: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  serviceProvider?: IServiceProviderPayload | null;
  serviceRequests?: IServiceRequestPayload[];
  jobApplications?: IJobApplicationPayload[];
  reviews?: IReviewPayload[];

  sessions?: ISessionPayload[];
  accounts?: IAccountPayload[];
}

export type IUpdateUserPayload = Partial<
  Pick<IUserPayload, "name" | "image" | "phone" | "address">
>;

export interface IAdminUpdateUserPayload {
  name?: string;
  phone?: string;
  address?: string;
  role?: UserRole;
  status?: UserStatus;
  emailVerified?: boolean;
}
