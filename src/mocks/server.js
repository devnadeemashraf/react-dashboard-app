import { createServer } from "miragejs";

import DeviceModel from "./models/Device";
import DeviceFactory from "./factories/DeviceFactory";

import devicesRoutes from "./routes/devices";
import updatesRoutes from "./routes/updates";

export default function () {
  return createServer({
    models: {
      device: DeviceModel,
    },

    factories: {
      device: DeviceFactory,
    },

    seeds(server) {
      server.createList("device", 10000);
    },

    routes() {
      this.namespace = "api";
      this.timing = 500;

      devicesRoutes.call(this);
      updatesRoutes.call(this);

      this.passthrough("/_next/**");
      this.passthrough("/public/**");
    },
  });
}
