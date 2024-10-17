import { http } from "./config";

export const commentUser = {
  comment: (id) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-phong/${id}`);
  },
};
