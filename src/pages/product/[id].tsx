import { stripe } from '@/src/lib/stripe';
import { ImageContainer, ProductActions, ProductContainer, ProductDetails } from '@/src/styles/pages/product';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'sonner';
import Stripe from 'stripe';
import { useShoppingCart } from 'use-shopping-cart';

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product( { product }: ProductProps ) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const { addItem } = useShoppingCart();

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout')
    }
  }

  function handleAddProductOnCart() {
    addItem({
      name: product.name,
      description: product.description,
      id: product.id,
      price: Number(product.price),
      currency: 'BRL',
      image: product.imageUrl
    })

    toast.success('Produto adicionado no carrinho com sucesso', { 
      className: 'sonner-success'
    });
  }

  const { isFallback } = useRouter();

  if (isFallback)
    return <h1>Loading...</h1> 

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>  

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          
          <ProductActions>
            <button 
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession}
            >Comparar agora</button>

            <button 
              onClick={handleAddProductOnCart}
              disabled={isCreatingCheckoutSession}
            >Adicionar ao carrinho</button>
          </ProductActions>
        </ProductDetails>
      </ProductContainer>
    </>
    
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    //Coloca os id mais acessados;
    paths: [
      { params: { id: "prod_T174U86l1LfNQc" } },
    ],
    fallback: true
  }
} 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

  if (!params) {
    return {
      notFound: true,
    };
  }

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}