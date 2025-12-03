'use client'

import { useCartStore } from "@/store/cart/cart-store"
import { useEffect, useState } from "react"
import { ProductInCart } from "./ProductInCart"

export const ProductsInCart = () => {

    const [loading, setLoading] = useState(true)
    const productsInCart = useCartStore(state => state.cart)

    useEffect(() => {
        setLoading(false)
    })

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    
    return (
        <>
            {productsInCart.map(product => (
                <div key={`${product.slug}-${product.size}`} className='flex mb-5'>
                    <ProductInCart product={product}/>
                </div>
            ))}
        </>
    )
}