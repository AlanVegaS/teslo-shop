'use client'

import { useState } from "react"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface Props {
    quantity: number
}

export const QuantitySelector = ({ quantity }: Props) => {
    const [counter, setCounter] = useState(quantity)

    const onQuantityChange = (value: number) => {
        const newQuantity = counter + value
        if (newQuantity < 1 || newQuantity > 10) return
        setCounter(newQuantity)
    }

    return (
        <div className="flex">
            <button onClick={() => onQuantityChange(-1)}>
                <IoRemoveCircleOutline size={30} className="hover:bg-gray-200 rounded-full transition-colors" />
            </button>
            <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
                {counter}
            </span>
            <button onClick={() => onQuantityChange(1)}>
                <IoAddCircleOutline size={30} className="hover:bg-gray-200 rounded-full transition-colors" />
            </button>
        </div>
    )
}