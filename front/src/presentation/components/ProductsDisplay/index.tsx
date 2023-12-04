import React from "react"
import Product from "../../../core/models/Product"
import { CardAdapter } from "../common/CardAdapter"

interface ProductsDisplayProps {
    products: Product[] 
}

export const ProductsDisplay = (props: ProductsDisplayProps) => {
    return(
        <>
            {props.products.map(product => (
                <CardAdapter height={"10px"} width={"10px"}>
                    <h1>{product.name}</h1>
                </CardAdapter>
            ))}
        </>
    )
}