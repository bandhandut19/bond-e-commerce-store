import { Schema, model } from 'mongoose';
import { Order } from './oder.interface';

export const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const orderModel = model<Order>('Order', orderSchema);
