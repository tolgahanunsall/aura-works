import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleAddToCart,
  handleGetCart,
  handleRemoveFromCart,
} from "./routes/cart";
import { handleCheckout, handleOrderStatus } from "./routes/checkout";
import { handleGetProducts, handleGetProductById } from "./routes/products";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Products routes
  app.get("/api/products", handleGetProducts);
  app.get("/api/products/:id", handleGetProductById);

  // Cart routes
  app.post("/api/cart", handleAddToCart);
  app.get("/api/cart", handleGetCart);
  app.delete("/api/cart/:id", handleRemoveFromCart);

  // Checkout and Orders routes
  app.post("/api/checkout", handleCheckout);
  app.get("/api/orders/:orderId", handleOrderStatus);

  return app;
}
