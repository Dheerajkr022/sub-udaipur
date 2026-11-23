import * as z from "zod";

export const enquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    // Simple regex for Indian mobile numbers allowing spaces and +91
    .regex(/^(?:\+91|91)?[-\s]?[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
  email: z
    .string()
    .min(1, "Please enter an email address")
    .email("Please enter a valid email address"),
  checkInDate: z
    .string()
    .min(1, "Please select a check-in date")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Check-in date cannot be in the past"),
  checkOutDate: z
    .string()
    .min(1, "Please select a check-out date")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Check-out date cannot be in the past"),
  adults: z
    .number()
    .int("Must be a whole number")
    .min(1, "Must have at least 1 adult")
    .max(50, "Max 50 adults"),
  children: z
    .number()
    .int("Must be a whole number")
    .min(0, "Cannot be negative")
    .max(50, "Max 50 children"),
  rooms: z
    .number()
    .int("Must be a whole number")
    .min(1, "Must have at least 1 room")
    .max(50, "Max 50 rooms"),
  accommodationPreference: z.string().min(1, "Please select an accommodation preference"),
  requirement: z
    .string()
    .max(300, "Requirement must not exceed 300 characters")
    .optional(),
  sourcePage: z.string().default("/"),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
