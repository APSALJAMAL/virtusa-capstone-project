import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const mediaFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }) // Single image
    .onUploadComplete(({ file }) => ({
      url: file.url,
    })),

  multiImageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } }) // Multiple images
    .onUploadComplete(({ file }) => ({
      url: file.url,
    })),

  videoUploader: f({ video: { maxFileSize: "32MB" } })
    .onUploadComplete(({ file }) => ({
      url: file.url,
    })),

  fileUploader: f({ "application/pdf": { maxFileSize: "8MB" } }) // Add docs/ppt by MIME type
    .onUploadComplete(({ file }) => ({
      url: file.url,
    })),
} satisfies FileRouter;

export type MediaFileRouter = typeof mediaFileRouter;
