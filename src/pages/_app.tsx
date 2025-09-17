"use client"

import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

import { CartProvider } from "use-shopping-cart";
import { HeaderApp } from "../components/HeaderApp";
import { Toaster } from "sonner";

globalStyles();

export default function App({ Component, pageProps }: AppProps) { 

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
      shouldPersist={false}
    >
      <Container>
        <HeaderApp />
        <Toaster/>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
