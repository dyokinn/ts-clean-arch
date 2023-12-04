import React, { useEffect, useState } from "react"
import IProductRepository from "../../../data/repositories/ProductRepository/IProductRepository"
import Product from "../../../core/models/Product"
import { ProductsDisplay } from "../../components/ProductsDisplay"

type HomePageProps = {
    productRepository: IProductRepository
}

const HomePage = (props: HomePageProps) => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const homePageProducts = await props.productRepository.getProducts()
                setProducts(homePageProducts)
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