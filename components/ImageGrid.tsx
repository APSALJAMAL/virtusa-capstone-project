"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageGrid() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch images");
        return res.json();
      })
      .then((data: string[]) => setImages(data))
      .catch((err) => console.error("Failed to fetch images:", err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((url, idx) => (
        <div key={idx} className="border p-2 rounded">
          <Image
            src={url}
            alt={`uploaded-${idx}`}
            width={300}
            height={200}
            className="rounded"
          />
        </div>
      ))}
    </div>
  );
}
