import { useState } from "react"
import IProductRepository from "../../data/repositories/ProductRepository/IProductRepository"
import Product from "../../core/models/Product"

interface useProductsParams {
    productRepository: IProductRepository
}

export const useProducts = (params: useProductsParams) => {
    
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async () => {
        try {
            const products = await params.productRepository.getProducts()
            setProducts(products)
        } catch (error) {
            
        }
    }
    
    return { products, getProducts}
}