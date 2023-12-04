import Product from "../../../core/models/Product";
import IProductRepository from "./IProductRepository";

export class LocalProductRepository implements IProductRepository{
    getProducts(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    getProductById(): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    updateProduct(): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}