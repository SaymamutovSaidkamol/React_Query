import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export interface UserT {
  createdAt: string;
  name: string;
  age: string;
  phone: number;
  profession: string;
  id: number
}

const useGetUser = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => request.get<UserT[]>("/user").then((res) => res.data),
  });
};

export default useGetUser;
