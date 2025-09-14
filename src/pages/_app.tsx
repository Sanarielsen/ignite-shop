"use client"

import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

import { CartProvider } from "use-shopping-cart";
import { HeaderApp } from "../components/HeaderApp";
import { Toaster } from "sonner";

globalStyles();

export default function App({ Component, pageProps }: AppProps) { 

  const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
  const defaultPath = process.env.NEXT_PUBLIC_URL;

  if (!stripePublicKey) {
    throw new Error('STRIPE_SECRET_KEY is not set in environment variables.');
  }

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripePublicKey}
      currency={'BRL'}
      shouldPersist={true}
    >
      <Container>
        <HeaderApp />
        <Toaster/>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
