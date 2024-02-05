import { useState } from "react"
import { IPayStrategy } from "../../data/stategies/payStrategy/IPayStrategy"
import Product from "../../core/models/Product"
import IProductRepository from "../../data/repositories/ProductRepository/IProductRepository"

interface orderParams {
    productRepository: IProductRepository
}

export const useOrder = (params: orderParams) => {

    const [products, setProducts] = useState<Product[]>([])


    const applyDiscount = (value,) => {
        
    }

    const setPaymentStrategy = (strategy: IPayStrategy) => {

    }

    return { applyDiscount, setPaymentStrategy}
}
