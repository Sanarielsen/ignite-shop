import { CartEntry } from "use-shopping-cart/core"

export type CartProductDetails = {
  totalPrice: number,
  totalQuantity: number,
  items: CartEntry[]
}