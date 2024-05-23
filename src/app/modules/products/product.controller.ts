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

const getProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    if (!searchTerm) {
      const result = await productServices.getProducts(null);
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully',
        data: result,
      });
    } else {
      const result = await productServices.getProducts(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully`,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching products',
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching product',
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedData = req.body.product;
    const result = await productServices.updateProduct(productId, updatedData);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while updating the product',
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Products deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while deleting the product',
    });
  }
};

export const ProductControllers = {
  createNewProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
