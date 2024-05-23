import { Order } from './oder.interface';
import { orderModel } from './order.model';

const makeAnOder = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};

const getOrders = async (email: RegExp | null) => {
  if (email === null) {
    const result = await orderModel.find();
    return result;
  } else {
    const result = await orderModel.find({
      email: email,
    });
    return result;
  }
};
export const orderServices = {
  makeAnOder,
  getOrders,
};
