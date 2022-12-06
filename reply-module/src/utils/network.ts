import ky from "ky";
import { ENDPOINT } from "src/constants/endpoint";

export const client = ky.create({
  retry: 0,
  prefixUrl: ENDPOINT,
  credentials: "include",
});
