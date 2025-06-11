import { Elysia } from "elysia";

import { corsPlugin } from "./plugins/cors";

import { loadRoutes } from "./functions/loadRoutes";

const app = new Elysia().use(corsPlugin);
loadRoutes(app);

app.listen(3000);
console.log("🐺 API is running at http://localhost:3000.");
console.log(
  "🚀 Check the http://localhost:3000/health endpoint to monitor the API's health status",
);
