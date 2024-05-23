import { Request } from 'express';
import { productModel } from './product.model';
import { Product } from './product.interface';

const createNewProductToDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProducts = async () => {
  const result = await productModel.find();
  return result;
};

export const productServices = {
  createNewProductToDB,
  getAllProducts,
};
