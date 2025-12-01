'use client'

import SizeSelector from "@/components/product/size-selector/SizeSelector"
import { QuantitySelector } from "@/components/quantity-selector/QuantitySelector"
import { useCartStore } from "@/store/cart/cart-store"
import { useState } from "react"
import type { CartProduct, Product, ValidSizes } from "@/interfaces/product.interface"

interface Props {
    product: Product
}

export default function AddToCart({product}:Props) {

    const addProductToCart = useCartStore(state => state.addProductToCart)

    const [sizeSelected, setSizeSelected] = useState<ValidSizes|undefined>()
    const [quantitySelected, setQuantitySelected] = useState(1)
    const [showAdvertence, setShowAdvertence] = useState(false)

    const onSizeChange = (size:ValidSizes) => {
        setSizeSelected(size)
        setShowAdvertence(false)
    }
    const onQuantityChange = (quantity:number) => {
        const newQuantity = quantitySelected + quantity
        if (newQuantity < 1 || newQuantity > 10) return
        setQuantitySelected(newQuantity)
    }

    const addProductsCart = () => {
        if(!sizeSelected){
            setShowAdvertence(true)
            return
        }

        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quantitySelected,
            size: sizeSelected,
            image: product.images[0]
        }

        addProductToCart(cartProduct)
        setSizeSelected(undefined)
        setQuantitySelected(1)
        setShowAdvertence(false)
    }



    return (
        <>
            <SizeSelector availableSizes={product.sizes} onSizeChanged={onSizeChange} sizeSelected={sizeSelected} showAdvertence={showAdvertence}/>
            <QuantitySelector  quantitySelected={quantitySelected} onQuantityChange={onQuantityChange} />
            <button className="btn-primary my-5"
                onClick={() => addProductsCart()}
            >
                Add to cart
            </button>
        </>
    )
}