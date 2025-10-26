import { RequestHandler } from "express";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartResponse {
  success: boolean;
  items: CartItem[];
  total: number;
  message?: string;
}

export const handleAddToCart: RequestHandler = (req, res) => {
  const { id, name, price, quantity = 1 } = req.body;

  if (!id || !name || !price) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  const response: CartResponse = {
    success: true,
    items: [{ id, name, price, quantity }],
    total: price * quantity,
    message: "Item added to cart successfully",
  };

  res.json(response);
};

export const handleGetCart: RequestHandler = (req, res) => {
  const response: CartResponse = {
    success: true,
    items: [],
    total: 0,
    message: "Cart retrieved successfully",
  };

  res.json(response);
};

export const handleRemoveFromCart: RequestHandler = (req, res) => {
  const { id } = req.params;

  const response: CartResponse = {
    success: true,
    items: [],
    total: 0,
    message: `Item ${id} removed from cart`,
  };

  res.json(response);
};
