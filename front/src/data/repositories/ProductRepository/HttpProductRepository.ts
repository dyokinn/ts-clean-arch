import Product from "../../../core/models/Product";
import { IClient } from "../../../infra/clients/IClient";
import IProductRepository from "./IProductRepository";

export class HttpProductRepository implements IProductRepository{
    client: IClient;

    constructor(client: IClient){
        this.client = client
    }

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