'use client'

import { QuantitySelector } from "@/components/quantity-selector/QuantitySelector"
import Image from "next/image"
import Link from "next/link"
import type { CartProduct } from "@/interfaces/product.interface"
import { useState } from "react"
import { useCartStore } from "@/store/cart/cart-store"

interface Props {
    product: CartProduct
}

export const ProductInCart = ({ product }: Props) => {

    const [quantitySelected, setQuantitySelected] = useState(product.quantity)
    const {updateProductQuantity, removeProductFromCart} = useCartStore(state => state)

    const onQuantityChange = (quantity: number) => {
        const newQuantity = quantitySelected + quantity
        if (newQuantity < 1 || newQuantity > 10) return
        setQuantitySelected(newQuantity)
        updateProductQuantity({ ...product, quantity: newQuantity })
    }

    return (
        <>
            <Image className="mr-5 rounded"
                src={`/products/${product.image}`}
                width={100}
                height={100}
                alt={product.title}
            />
            <div>
                <Link
                    className="hover:underline cursor-pointer"
                    href={`/product/${product.slug}`}
                >
                    <span>{product.size} - {product.title}</span>
                </Link>
                <p>${product.price}</p>
                <QuantitySelector
                    quantitySelected={quantitySelected}
                    onQuantityChange={onQuantityChange}
                />
                <button 
                onClick={() => removeProductFromCart(product)}
                className='mt-3 hover:cursor-pointer hover:underline hover:text-red-500'>Remove</button>
            </div>
        </>
    )
}