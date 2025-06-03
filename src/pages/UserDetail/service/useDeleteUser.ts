import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";

const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/user/${id}`).then((res) => res.data),
  });
};

export default useDeleteUser;
