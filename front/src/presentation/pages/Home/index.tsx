import React, { useContext, useEffect, useState } from "react"
import { ProductsDisplay } from "../../components/ProductsDisplay"
import { useOrder } from "../../hooks/useOrder"
import { LocalProductRepository } from "../../../data/repositories/ProductRepository/LocalUserRepository"
import {CartContext, cartValue } from "../../hooks/contexts/useCart"
import { useProducts } from "../../hooks/useProducts"
import { AxiosClient } from "../../../infra/clients/AxiosClient"

const HomePage = () => {

    const {cart, addToCart} = useContext(CartContext)
    const {products, getProducts} = useProducts({
        productRepository: new LocalProductRepository("products.json")
    })


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const homePageProducts = await getProducts()
            } catch (error) {
                window.alert("Error during products loading!")
            }
        }
        fetchProducts()
    }, [])
    
    return (
        <div>
            <h1>
                Home
            </h1>
            <ProductsDisplay products={products}/>
        </div>
    )
}

export default HomePage