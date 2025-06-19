"use client";
import useSWR from "swr";
// import { useMemo } from "react";
// import { PoliciesPayload } from "./PoliciesPayload";
// import { ResponseError } from "./ResponseError";
// import { PoliciesReturntype } from "./PoliciesReturntype";

export default function useGetPolices() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const { data, error, isLoading } = useSWR(URL, fetcher, {
    revalidateOnFocus: true,
    shouldRetryOnError: false,
  });

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <h1>{data.userId}</h1>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );

  // const response = data;

  // return useMemo<PoliciesReturntype>(
  //   () => ({
  //     policies: response?.data || [],
  //     policyLoading: isLoading,
  //     policyError: error,
  //   }),
  //   [data, error, isLoading]
  // );
}
