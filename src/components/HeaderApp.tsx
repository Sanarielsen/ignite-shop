import Image from "next/image";
import { CartIcon, CartItemsCount, Header } from "../styles/pages/app";
import logoImg from '../assets/logo.svg';
import cartImg from '../assets/CartIcon.svg';
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";

export function HeaderApp() {

  const { cartCount } = useShoppingCart();

  function handleClickOpenCart() {
    console.log("handleClickOpenCart() -> Executed")

    console.log("Quantidade de itens = ", cartCount)
  }

  return (
    <Header>
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={52}/>
      </Link>
      <CartItemsCount>{ cartCount }</CartItemsCount>
      <CartIcon onClick={handleClickOpenCart}>
        <Image src={cartImg} alt="" width={24} height={24}/>
      </CartIcon>
    </Header>
  )
}