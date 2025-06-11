import { Elysia } from "elysia";
import { readdirSync } from "fs";
import { join } from "path";

export function loadRoutes(app: Elysia, routesPath = "src/routes") {
  const files = readdirSync(routesPath);

  for (const file of files) {
    if (!file.endsWith(".ts") && !file.endsWith(".js")) continue;

    const routeModule = require(join(process.cwd(), routesPath, file));
    const route = routeModule.default || Object.values(routeModule)[0];

    if (route instanceof Elysia) {
      app.use(route);
    } else {
      console.warn(`⚠️ ${file} geçerli bir Elysia route değil.`);
    }
  }

  return app;
}
