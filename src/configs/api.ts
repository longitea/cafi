export const CATEGORY_API = import.meta.env.VITE_CATEGORY_API;
import axios from "axios";

const api = axios.create({
  baseURL: CATEGORY_API,
  headers: {
    "Notion-Version": "2022-06-28",
    Authorization: `Bearer ${import.meta.env.NOTION_API_KEY}`,
  },
});

export default api;
