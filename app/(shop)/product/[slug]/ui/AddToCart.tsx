'use client'

import SizeSelector from "@/components/product/size-selector/SizeSelector"
import { QuantitySelector } from "@/components/quantity-selector/QuantitySelector"
import { ValidSizes } from "@/interfaces/product.interface"
import { useState } from "react"

interface Props {
    sizes : ValidSizes[]
}

export default function AddToCart({sizes}:Props) {


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
        const product = { size: sizeSelected, quantity: quantitySelected}
        if(!sizeSelected)
            setShowAdvertence(true)
    }



    return (
        <>
            <SizeSelector availableSizes={sizes} onSizeChanged={onSizeChange} sizeSelected={sizeSelected} showAdvertence={showAdvertence}/>
            <QuantitySelector  quantitySelected={quantitySelected} onQuantityChange={onQuantityChange} />
            <button className="btn-primary my-5"
                onClick={() => addProductsCart()}
            >
                Add to cart
            </button>
        </>
    )
}