import { ValidSizes } from "@/interfaces/product.interface"
import clsx from 'clsx';


interface Props {
    selectSize: ValidSizes
    availableSizes: ValidSizes[]
}

export default function SizeSelector({ selectSize, availableSizes }: Props) {
    return (
        <div className="my-5">
            <h3 className="font-bold mb-4">A vailable sizes</h3>
            <div className="flex">
                {
                    availableSizes.map(size =>
                        <span className={clsx(
                            "font-bold mr-3 text-lg cursor-pointer rounded-sm hover:underline hover:bg-gray-200",
                            {
                                'underline': size === selectSize
                            }
                        )}
                            key={size}
                        >
                            {size}
                        </span>
                    )
                }
            </div>
        </div>
    )
}
