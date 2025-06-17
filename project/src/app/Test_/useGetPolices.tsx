import useSWR from "swr";
import { useMemo } from "react";
import { PoliciesPayload } from "./PoliciesPayload";
import { ResponseError } from "./ResponseError";
import { PoliciesReturntype } from "./PoliciesReturntype";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export function useGetPolices(): PoliciesReturntype {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const { data, error, isLoading, mutate } = useSWR<
    PoliciesPayload,
    ResponseError
  >(URL, fetcher, {
    revalidateOnFocus: true,
    shouldRetryOnError: false,
  });

  if (error) {
    console.error(error.message);
  }

  const response = data;

  return useMemo<PoliciesReturntype>(
    () => ({
      policies: response?.data || [],
      policyLoading: isLoading,
      policyError: error,
    }),
    [data, error, isLoading]
  );
}
