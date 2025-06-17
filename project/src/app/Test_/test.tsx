"use client";
import { useGetPolices } from "./useGetPolices";

export function Test() {
  const { policies, policyLoading, policyError } = useGetPolices();

  // 👉 In ra console để kiểm tra dữ liệu
  console.log("Policies:", policies);
  console.log("Loading:", policyLoading);
  console.log("Error:", policyError);

  return <></>;
}
