import { validatePerPage, calculatePagination } from "../utils/pagination";

export default function (server) {
  this.get("/devices", (schema, request) => {
    const page = parseInt(request.queryParams.page || "1", 10);
    const perPage = validatePerPage(request.queryParams.perPage);
    const allDevices = schema.all("device").models;

    const data =
      perPage === Infinity
        ? allDevices
        : allDevices.slice((page - 1) * perPage, page * perPage);

    return {
      data,
      pagination: calculatePagination(allDevices.length, page, perPage),
    };
  });
}
