import { useQuery } from "react-query";

export const usePeople = () => {
  return useQuery({
    queryKey: "people",
    queryFn: async () => {
      try {
        const res = await fetch("https://swapi.dev/api/people");
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
};
