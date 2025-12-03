'use client'

import Link from "next/link"
import { useCartStore } from "@/store/cart/cart-store"
import { useEffect, useState } from "react"
import { currentCurrency } from "@/utils/currentCurrency"

export const OrderSummary = () => {

    const {getSummaryOrder, getTotalItem} = useCartStore()
    const {subTotal, tax, total} = getSummaryOrder()
    const totalItems = getTotalItem()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if(isLoading) {
        return (
            <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
                <span className='animate-pulse'>Loading...</span>
            </div>
        )
    }

    return (
        <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
            <h2 className='text-2xl mb-2 font-bold'>Your order</h2>
            <div className='grid grid-cols-2'>
                <span>N Products</span>
                <span className='text-right'>{totalItems} items</span>
                <span>Subtotal</span>
                <span className='text-right'>{currentCurrency(subTotal)}</span>
                <span>Tax (15%)</span>
                <span className='text-right'>{currentCurrency(tax)}</span>
                <span className='mt-5 text-2xl'></span>
                <span className='mt-5 text-2xl text-right'>{currentCurrency(total)}</span>
            </div>
        <div className='mt-5 mb-2 w-full'>
            <Link className='flex btn-primary justify-center'
                href='/checkout/address'>
                Checkout
            </Link>
        </div>
        </div>
    )
}