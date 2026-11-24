import * as z from "zod";

export const questionTopics = [
  "Room categories",
  "Property facilities",
  "Dining information",
  "Location and directions",
  "Nearby attractions",
  "General property question",
] as const;

export const enquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  email: z
    .string()
    .min(1, "Please enter an email address")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === "") return true;
      return /^(?:\+91|91)?[-\s]?[6-9]\d{9}$/.test(val.trim());
    }, "Please enter a valid 10-digit mobile number if providing phone"),
  questionTopic: z.enum(questionTopics, {
    message: "Please select a question topic",
  }),
  message: z
    .string()
    .min(5, "Please enter your question (at least 5 characters)")
    .max(1000, "Message must not exceed 1000 characters"),
  privacyAcknowledgement: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge and agree to the Privacy Policy",
  }),
  sourcePage: z.string().default("/"),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
