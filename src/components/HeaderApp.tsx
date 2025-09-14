import Image from "next/image";
import { CartIcon, CartItemsCount, Header } from "../styles/pages/app";
import logoImg from '../assets/logo.svg';
import cartImg from '../assets/CartIcon.svg';
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import { useState } from "react";
import { CartPlace } from "./CartPlace";

export function HeaderApp() {
  const [showCartSide, setShowCartSide] = useState(false)

  const { cartCount } = useShoppingCart();

  return (
    <Header>
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={52}/>
      </Link>
      <CartIcon onClick={() => setShowCartSide(!showCartSide)}>
        <Image src={cartImg} alt="" width={24} height={24}/>
      </CartIcon>      
      <CartItemsCount>{ cartCount }</CartItemsCount>
      <CartPlace open={showCartSide} onClose={() => setShowCartSide(!showCartSide)} />
    </Header>
  )
}