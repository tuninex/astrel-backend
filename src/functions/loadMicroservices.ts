import type { Elysia } from "elysia";
import fs from "fs";
import path from "path";

export async function loadMicroservices(app: Elysia) {
  const dir = path.resolve("src/microservices"); //

  if (!fs.existsSync(dir)) {
    console.warn("📂 src/microservices directory not found.");
    return;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts"));

  for (const file of files) {
    try {
      const mod = await import(`../microservices/${file}`);
      if (typeof mod.register === "function") {
        mod.register(app);
        console.log(`✅ Loaded microservice: ${file}`);
      } else {
        console.warn(`⚠️  ${file} does not export a 'register(app)' function`);
      }
    } catch (err) {
      console.error(`❌ Failed to load microservice: ${file}`, err);
    }
  }
}
