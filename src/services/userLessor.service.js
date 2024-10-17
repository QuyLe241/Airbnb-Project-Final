import { http } from "./config";

export const userLessor = {
  lessor: () => {
    return http.get("");
  },
};
