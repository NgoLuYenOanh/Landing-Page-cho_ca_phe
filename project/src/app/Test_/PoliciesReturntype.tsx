import { IPolicy } from "./IPolicy";
import { ResponseError } from "./ResponseError";

export type PoliciesReturntype = {
  policies: IPolicy[];
  policyLoading: boolean;
  policyError: ResponseError | undefined;
};
