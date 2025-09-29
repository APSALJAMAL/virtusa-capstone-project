import { createRouteHandler } from "uploadthing/next";
import { mediaFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: mediaFileRouter,
  // Apply an (optional) custom config:
  // config: { ... },
});