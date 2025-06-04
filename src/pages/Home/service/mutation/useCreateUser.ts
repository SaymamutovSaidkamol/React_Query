import { useMutation } from "@tanstack/react-query";
import type { InputUserT } from "../../components/form";
import { request } from "../../../../config/request";

export const UseCreateUser = () => {
  return useMutation({
    mutationFn: (data: InputUserT) =>
      request.post("/region", data).then((res) => res.data),
  });
};
