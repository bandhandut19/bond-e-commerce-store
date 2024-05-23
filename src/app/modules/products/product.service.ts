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

const getSingleProduct = async (productId: string) => {
  const result = await productModel.findOne({ _id: productId });
  return result;
};

const updateProduct = async (productId: string, updatedData: Product) => {
  const result = await productModel.updateOne(
    { _id: productId },
    { $set: updatedData },
  );
  return result;
};

export const productServices = {
  createNewProductToDB,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
