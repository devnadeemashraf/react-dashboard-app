import { createServer } from "miragejs";

export default function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      /**
       * GET /api/devices
       */
      this.get("/devices", () => {
        return {
          filter: "*",
          data: [],
        };
      });
    },
  });
}
