import { createContext, useState } from "react";
import IProductRepository from "../../../data/repositories/ProductRepository/IProductRepository";
import Product from "../../../core/models/Product";

interface CartValueProps {
    cart: any,
    addToCart: any,
    removeFromCart:any
}

export const cartValue = () => {

    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        
    }

    const removeFromCart = (product: Product) => {
        
    }

    return { cart, addToCart, removeFromCart } as CartValueProps
}

export const CartContext = createContext({} as CartValueProps);