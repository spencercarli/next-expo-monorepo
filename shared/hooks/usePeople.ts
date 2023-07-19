import { useQuery } from "react-query";

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
        const res = await fetch("https://swapi.dev/api/people");
        const data = await res.json();
        return data;
      } catch (error) {
        throw error;
      }
    },
  });
};
