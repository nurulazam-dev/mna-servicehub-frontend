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
