import { IReviewPayload } from "./review.type";
import { IServiceRequestPayload } from "./serviceRequest.type";

export interface IServicePayload {
  id: string;
  name: string;
  description: string;
  imageUrl?: string | null;
  averageRating: number;
  totalReviews: number;
  isActive: boolean;
  isDeleted: boolean;
  serviceRequests?: IServiceRequestPayload[];
  reviews?: IReviewPayload[];
  createdAt: Date | string;
  updatedAt: Date | string;
}
