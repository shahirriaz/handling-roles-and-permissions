import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useDataFetcher = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return { data };
};
