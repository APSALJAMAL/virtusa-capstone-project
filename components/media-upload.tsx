"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";

interface MediaUploadProps {
  onChange: (value: string | string[]) => void;
  endpoint: keyof import("@/app/api/uploadthing/core").MediaFileRouter;
  multiple?: boolean;
}

export function MediaUpload({ onChange, endpoint, multiple }: MediaUploadProps) {
  const [files, setFiles] = useState<string[]>([]);

  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          if (!res) return;
          const urls = res.map((file) => file.url);
          setFiles(urls);
          onChange(multiple ? urls : urls[0]);
        }}
        onUploadError={(error) => {
          alert(`Upload failed: ${error.message}`);
        }}
      />

      {files.length > 0 && (
        <div className="mt-2 flex gap-2 flex-wrap">
          {files.map((url) => (
            <img
              key={url}
              src={url}
              alt="Preview"
              className="w-20 h-20 object-cover rounded border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
