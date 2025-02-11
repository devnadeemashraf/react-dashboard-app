/**
 * Validate the perPage query parameter.
 */
export const validatePerPage = (perPage) => {
  const defaultPerPage = 25;
  const options = [10, 25, 50, 100, Infinity];
  return options.includes(Number(perPage)) ? Number(perPage) : defaultPerPage;
};

/**
 * Calculate the pagination metadata.
 */
export const calculatePagination = (totalItems, page, perPage) => ({
  currentPage: page,
  totalPages: perPage === Infinity ? 1 : Math.ceil(totalItems / perPage),
  itemsPerPage: perPage,
  totalItems,
});
