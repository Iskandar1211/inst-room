import { Request, Response } from "express";
import { IProduct } from "../../../client/src/types/Model";
import { ProductModel } from '../models/ProductModel';

export default class ProductController {
    static getAllProducts() {
        return async (req: Request, res: Response) => {
            try {
                const products = await ProductModel.getProducts()
                return res.json(products)
            } catch (error) {
                return res.status(401).json(error)
            }
        }

    }
    static async getAllProductsForFilter(): Promise<IProduct[]> {
        try {
            const products: IProduct[] = await ProductModel.getProducts();
            return products;
        } catch (error) {
            throw new Error('Failed to retrieve products');
        }
    }

    static onCreateProduct() {
        return async (req: any, res: Response) => {
            try {
                if (!req.body) {
                    throw new Error("No message Information")
                } else {
                    const result = await ProductModel.createProduct(req);
                    return res.send(result);
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onEditProduct() {
        return async (req: any, res: Response) => {
            try {
                const result = ProductModel.editProduct(req)
                return res.json(result);
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }

    }
    static onDeleteProduct() {
        return async (req: any, res: Response) => {
            try {
                await ProductModel.deleteProduct(req)
                res.json({ message: 'Сообщение успешно удалено' });
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
}