import Product from "../../../core/models/Product"
import { IClient } from "../../../infra/clients/IClient"

export default interface IProductRepository {

    client: IClient

    getProducts(): Promise<Product[]>
    getProductById(id: number): Promise<Product>
    updateProduct(product: Product): Promise<Product>
    deleteProduct(product: Product): Promise<boolean>
}