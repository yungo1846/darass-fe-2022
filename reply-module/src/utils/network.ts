import ky from "ky";

export const client = ky.create({
  retry: 0,
  prefixUrl: "http://localhost:8000/",
  credentials: "include",
});
