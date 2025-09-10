import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Samuel Henrique</strong>, sua camiseta <strong>Beyond the Limits</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  console.log(session);

  if (!session.customer_details || !session.line_items) {

  }

  const customerName = session.customer_details!.name
  const product = session.line_items?.data[0].product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.object,
        imageUrl: product.images[0]
      }
    }
  }
}