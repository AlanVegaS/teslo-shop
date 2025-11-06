'use client'

import { getStockBySlug } from "@/actions/products/get-stock-by-slug"
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react"


export const StockLabel = ({ slug }: { slug: string }) => {

    const [Stock, setStock] = useState(0)

    const getStock = async() =>{
        const inStock = await getStockBySlug(slug)
        setStock(inStock)
    }

    useEffect(() => {
        getStock()
    }, [])

    return (
        <p className={`${titleFont.className} antialiased font-bold text-xs`}>
            In stock: {Stock}
        </p>
    )
}