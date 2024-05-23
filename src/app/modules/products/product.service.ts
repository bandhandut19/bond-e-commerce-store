import { Request } from 'express';
import { productModel } from './product.model';
import { Product } from './product.interface';

const createNewProductToDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

const getProducts = async (search: string | null) => {
  if (search === null) {
    const result = await productModel.find();
    return result;
  } else {
    const regTerm = new RegExp(search, 'i');
    const result = await productModel.find({
      $or: [{ name: regTerm }, { description: regTerm }, { tags: regTerm }],
    });
    return result;
  }
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

const deleteProduct = async (productId: string) => {
  const result = await productModel.deleteOne({ _id: productId });
  return result;
};

export const productServices = {
  createNewProductToDB,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
