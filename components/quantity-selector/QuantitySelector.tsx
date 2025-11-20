import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface Props {
    onQuantityChange: (quantity: number) => void,
    quantitySelected: number,
}

export const QuantitySelector = ({ onQuantityChange, quantitySelected }: Props) => {
    return (
        <div className="flex">
            <button onClick={() => onQuantityChange(-1)}>
                <IoRemoveCircleOutline size={30} className="hover:bg-gray-200 rounded-full transition-colors" />
            </button>
            <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
                {quantitySelected}
            </span>
            <button onClick={() => onQuantityChange(1)}>
                <IoAddCircleOutline size={30} className="hover:bg-gray-200 rounded-full transition-colors" />
            </button>
        </div>
    )
}