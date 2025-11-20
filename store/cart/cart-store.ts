import type { CartProduct } from "@/interfaces/product.interface"
import { create } from "zustand"

interface State {
    cart: CartProduct[]
    addProductToCart: (product: CartProduct) => void
}

export const useCartStore = create<State>()(
    (set, get) => ({
        cart: [],

        //Methodds
        addProductToCart: (product: CartProduct) => {
            const {cart} = get()

            //1. Validate if the product exist in the store
            const productInCart = cart.some(
                (item:CartProduct) => (item.id === product.id && item.size === product.size)
            )

            if(!productInCart){
                set({cart: [...cart, product]})
                return
            }

            //2. Increment product number by size
            const updatedCartProducts = cart.map((item:CartProduct) => {
                if(item.id === product.id && item.size === product.size){
                    return{...item, quantity: item.quantity + product.quantity}
                }
                return item
            })

            set({cart: updatedCartProducts})
        }
    })
)