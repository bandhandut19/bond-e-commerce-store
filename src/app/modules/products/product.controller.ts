import { Request, Response } from 'express';
import { productServices } from './product.service';

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body.product;
    const result = await productServices.createNewProductToDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while adding products',
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching products',
    });
  }
};

export const ProductControllers = {
  createNewProduct,
  getAllProducts,
};