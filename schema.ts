import { z } from "zod";

export const mediaSchema = z.object({
  id: z.string().uuid().optional(), // Let DB generate if not provided
  name: z.string().min(1, "Name is required"),
  image: z.string().url({ message: "Invalid image URL" }), // Single image
  multipleImages: z.array(z.string().url({ message: "Invalid image URL" })).optional(),
  video: z.string().url({ message: "Invalid video URL" }).optional(),
  file: z.string().url({ message: "Invalid file URL" }).optional(), // pdf, docs, ppt etc.
});

export type MediaType = z.infer<typeof mediaSchema>;
