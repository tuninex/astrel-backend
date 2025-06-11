import { Elysia } from "elysia";

export default new Elysia({ prefix: "/health" }).get("/", () => ({
  status: "🐺 API is working.",
}));
