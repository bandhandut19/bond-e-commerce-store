import { Schema, model, connect } from 'mongoose';
import { InventoryValues, Product, Variant } from './product.interface';

export const variant = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

export const inventoryValues = new Schema<InventoryValues>({
  quantity: { type: String, required: true },
  inStock: { type: Boolean, required: true },
});

export const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variant], required: true },
  inventory: inventoryValues,
});
