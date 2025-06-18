import { IPolicy } from "./IPolicy";

export type PoliciesPayload = {
  data: IPolicy[];
  message: string;
  status: boolean;
};
