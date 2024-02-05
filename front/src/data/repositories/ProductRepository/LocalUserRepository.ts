import { RepositoryException } from './../../../validation/exceptions/RepositoryException';
import Product from "../../../core/models/Product";
import { IClient } from "../../../infra/clients/IClient";
import IProductRepository from "./IProductRepository";
import { JSONPreset } from 'lowdb/node'

export class LocalProductRepository implements IProductRepository{
    url: string;
    
    constructor(url: string){
        this.url = url
    }

    async presetConnection(){
        const defaultData: {products: Product[]} = { products: [] }
        const db = await JSONPreset(this.url + '.json', defaultData)
        return db
    }

    async getProducts(): Promise<Product[]> {
        try {
            const db = await this.presetConnection()
            return db.data.products
        } catch (error) {
            console.log(error);
            throw new RepositoryException("Error during products read operations")
        }
    }
    getProductById(): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    createProduct(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    updateProduct(): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}