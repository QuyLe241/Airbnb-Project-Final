import { http } from "./config";

export const roomService = {
  listRoom: () => {
    return http.get("/phong-thue");
  },
  detailRoom: (id) => {
    return http.get(`/phong-thue/${id}`);
  },
};
