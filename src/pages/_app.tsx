import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg';
import cartImg from '../assets/CartIcon.svg';
import { CartIcon, Container, Header } from "../styles/pages/app";

import Image from 'next/image'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {    

  function handleClickOpenCart() {
    console.log("handleClickOpenCart() -> Executed")
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" width={130} height={52}/>
        <CartIcon onClick={handleClickOpenCart}>
          <Image src={cartImg} alt="" width={24} height={24}/>
        </CartIcon>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
