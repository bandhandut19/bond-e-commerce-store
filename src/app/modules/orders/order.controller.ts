import { Request, Response } from 'express';
import { orderModel } from './order.model';
import { orderServices } from './order.service';

const makeAnOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const result = await orderServices.makeAnOder(order);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Can not place an order',
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (email === null) {
      const result = await orderServices.getOrders(null);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } else {
      const regOrder = new RegExp(email, 'i');
      const result = await orderServices.getOrders(regOrder);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for ${email}!`,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Fetching all orders failed',
    });
  }
};

export const OrderControllers = {
  makeAnOrder,
  getOrders,
};
