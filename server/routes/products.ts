import { RequestHandler } from "express";

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  bestseller: boolean;
}

export interface ProductsResponse {
  success: boolean;
  products: Product[];
  count: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Rose Garden",
    category: "floral",
    description: "A delicate blend of pink roses and amber",
    price: 45,
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    bestseller: true,
  },
  {
    id: 2,
    name: "Vanilla Dream",
    category: "sweet",
    description: "Warm vanilla with hints of musk",
    price: 40,
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    bestseller: false,
  },
  {
    id: 3,
    name: "Ocean Breeze",
    category: "fresh",
    description: "Fresh citrus and oceanic notes",
    price: 48,
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    bestseller: false,
  },
  {
    id: 4,
    name: "Midnight Jasmine",
    category: "oriental",
    description: "Luxurious jasmine with woody undertones",
    price: 55,
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    bestseller: false,
  },
  {
    id: 5,
    name: "Lavender Serenity",
    category: "floral",
    description: "Calming lavender with eucalyptus notes",
    price: 42,
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    bestseller: true,
  },
  {
    id: 6,
    name: "Honey Whisper",
    category: "sweet",
    description: "Golden honey with soft florals",
    price: 46,
    image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    bestseller: false,
  },
  {
    id: 7,
    name: "Cedar Forest",
    category: "woody",
    description: "Deep cedarwood with spice accents",
    price: 52,
    image: "linear-gradient(135deg, #8b7355 0%, #d4a574 100%)",
    bestseller: false,
  },
  {
    id: 8,
    name: "Citrus Sunrise",
    category: "fresh",
    description: "Bright bergamot and grapefruit blend",
    price: 44,
    image: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    bestseller: false,
  },
  {
    id: 9,
    name: "Silk & Musk",
    category: "oriental",
    description: "Sensual musk with creamy base",
    price: 58,
    image: "linear-gradient(135deg, #c471ed 0%, #f64f59 100%)",
    bestseller: true,
  },
  {
    id: 10,
    name: "Peony Bloom",
    category: "floral",
    description: "Soft peony with rose petals",
    price: 45,
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    bestseller: false,
  },
  {
    id: 11,
    name: "Patchouli Nights",
    category: "woody",
    description: "Rich patchouli with amber undertones",
    price: 50,
    image: "linear-gradient(135deg, #8d4426 0%, #c9913d 100%)",
    bestseller: false,
  },
  {
    id: 12,
    name: "Mint Mojito",
    category: "fresh",
    description: "Refreshing mint with lime zest",
    price: 41,
    image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    bestseller: false,
  },
];

export const handleGetProducts: RequestHandler = (req, res) => {
  const { category } = req.query;

  let filtered = products;
  if (category && typeof category === "string" && category !== "all") {
    filtered = products.filter((p) => p.category === category);
  }

  const response: ProductsResponse = {
    success: true,
    products: filtered,
    count: filtered.length,
  };

  res.json(response);
};

export const handleGetProductById: RequestHandler = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.json({
    success: true,
    product,
  });
};
