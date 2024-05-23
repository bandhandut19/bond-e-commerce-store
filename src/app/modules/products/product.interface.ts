export type Variant = {
  type: string;
  value: string;
};

export type InventoryValues = {
  quantity: string;
  inStock: boolean;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: InventoryValues;
};
