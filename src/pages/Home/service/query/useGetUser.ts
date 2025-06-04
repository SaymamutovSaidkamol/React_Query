import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export interface UserT {
  name: string;
  id: number;
}
interface RegionT {
  data: UserT[];
  currentPage: number;
}
export interface responseT {
  regions: RegionT;
  totalPages: number;
}

const useGetUser = (page = 1) => {
  return useQuery({
    queryKey: ["users", page],
    queryFn: () =>
      request
        .get<responseT>("/region", {
          params: {
            limit: 4,
            page: page,
          },
        })
        .then((res) => {

          return { regions: res.data };
          
        }),
  });
};

export default useGetUser;
