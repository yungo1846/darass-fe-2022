export const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://darass.site"
    : "http://localhost:8000";
