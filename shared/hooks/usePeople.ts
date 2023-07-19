import { useQuery } from "react-query";

import { swapi } from "../api/swapi";

type Person = {
  url: string;
  name: string;
  created: string;
  edited: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

type Response = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Person[];
};

export const usePeople = () => {
  return useQuery({
    queryKey: "people",
    queryFn: async (): Promise<Response> => {
      try {
        const { data } = await swapi.get("/people");
        return data;
      } catch (error) {
        throw error;
      }
    },
  });
};
