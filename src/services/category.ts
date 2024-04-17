import api from "configs/api";

export const categoryService = {
  getList: () => api.get("/categories"),
};
