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
    const onSizeChange = (size:ValidSizes) => {
        setSizeSelected(size)
    }

    return (
        <>
            <SizeSelector availableSizes={sizes} onSizeChanged={onSizeChange} sizeSelected={sizeSelected}/>
            
            <QuantitySelector quantity={1} />
            
            <button className="btn-primary my-5">Add to cart</button>
        </>
    )
}