import Product from "../../../core/models/Product"
import { IClient } from "../../../infra/clients/IClient"

export default interface IProductRepository {

    url: string

    getProducts(): Promise<Product[]>
    getProductById(id: number): Promise<Product>
    createProduct(product: Product): Promise<Product>
    updateProduct(product: Product): Promise<Product>
    deleteProduct(product: Product): Promise<boolean>
}