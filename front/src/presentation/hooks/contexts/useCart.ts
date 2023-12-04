import { createContext, useState } from "react";
import IProductRepository from "../../../data/repositories/ProductRepository/IProductRepository";
import Product from "../../../core/models/Product";

export const useCart = () => {

    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        
    }

    const removeFromCart = (product: Product) => {
        
    }

    return { cart, addToCart, removeFromCart }
}

export const cartContext = createContext({});