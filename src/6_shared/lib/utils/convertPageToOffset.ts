export const convertPageToOffset = (page: number, itemsPerPage: number) => {
  return (page - 1) * itemsPerPage;
};
