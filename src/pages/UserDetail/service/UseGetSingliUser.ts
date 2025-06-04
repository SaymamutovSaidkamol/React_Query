import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

const UseGetSingliUser = (id: string) => {
  return useQuery({
    queryKey: ["single-user"],
    queryFn: () => request.get(`/region/${id}`).then((res) => res.data),
  });
};

export default UseGetSingliUser;
