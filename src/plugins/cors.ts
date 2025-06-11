import cors from "@elysiajs/cors";

export const corsPlugin = cors({
  origin: [
    "http://localhost:8080",
    "http://localhost:8082",
    "http://localhost:8083", 
    "http://localhost:3000", 
    "http://localhost:5173",
    "http://127.0.0.1:8080",
    "http://127.0.0.1:8082",
    "http://127.0.0.1:8083",
    "http://127.0.0.1:5173",
  ],
  methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  credentials: true,
});
