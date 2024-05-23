import { Schema, model } from 'mongoose';
import { Order } from './oder.interface';

export const orderSchema = new Schema<Order>({
  email: String,
  productId: String,
  price: Number,
  quantity: Number,
});

export const orderModel = model<Order>('Order', orderSchema);
