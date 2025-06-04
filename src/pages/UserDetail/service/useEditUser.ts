import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";
import type { InputUserT } from "../../Home/components/form";

const useEditUser = (id: number | undefined) => {
  return useMutation({
    mutationFn: (data: InputUserT) =>
      request.put(`/region/${id}`, data).then((res) => res.data),
  });
};

export default useEditUser;
