import { z } from "zod";

export const serviceRequestZodSchema = z.object({
  serviceId: z.string().uuid("Service ID must be a valid UUID").optional(),

  serviceDescription: z
    .string({ error: "Service description is required" })
    .min(10, "Service description must be at least 10 characters")
    .max(2000, "Service description must not exceed 2000 characters"),

  serviceAddress: z
    .string({ error: "Service address is required" })
    .min(5, "Service address must be at least 5 characters")
    .max(300, "Service address must not exceed 300 characters"),

  activePhone: z
    .string({ error: "Active phone number is required" })
    .regex(/^\d{11,13}$/, "Phone number must be 11-13 digits"),
});

export type IServiceRequestPayload = z.infer<typeof serviceRequestZodSchema>;

export const updateServiceRequestByManagementZodSchema = z
  .object({
    id: z.string().optional(),
    status: z.enum(
      ["ACCEPTED", "REJECTED", "PENDING", "COMPLETED", "CANCELLED"],
      {
        error: "Status is required and must be ACCEPTED or REJECTED",
      },
    ),
    rejectionReason: z
      .string()
      .trim()
      .min(5, "Rejection reason must be at least 5 characters")
      .max(500, "Rejection reason must not exceed 500 characters")
      .optional(),

    providerId: z.string().optional().or(z.literal("")),

    scheduleId: z.string().optional().or(z.literal("")),
  })
  .refine((data) => data.status !== "REJECTED" || !!data.rejectionReason, {
    message: "Rejection reason is required when status is REJECTED",
    path: ["rejectionReason"],
  })
  .refine(
    (data) =>
      data.status !== "ACCEPTED" || (!!data.providerId && !!data.scheduleId),
    {
      message:
        "Provider ID and Schedule ID are required when status is ACCEPTED",
      path: ["providerId"],
    },
  );

export type IServiceRequestUpdatePayload = z.infer<
  typeof updateServiceRequestByManagementZodSchema
>;
