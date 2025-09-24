import Image from "next/image";
import closeIcon from '../assets/CartPlace/close-icon.svg';
import cartIcon from '../assets/CartIcon.svg';
import { useShoppingCart } from 'use-shopping-cart'

import { Container, CloseButton, ListItems, Footer, ListEmpty, DescriptionEmpty, BackgroundContainer } from "../styles/components/cartplace"
import { CartPlaceItem } from "./CartPlaceItem";
import { CartEntry } from "use-shopping-cart/core";
import axios from "axios";

interface CartPlaceProps {
  open: boolean
  onClose: () => void;
}

interface checkoutSessionDataProps {
  line_items?: {  
    price: string,
    quantity: number
  }[]  
}

export function CartPlace({ open, onClose }: CartPlaceProps) {
  const { cartDetails } = useShoppingCart();

  const checkoutSessionData: checkoutSessionDataProps = {
    line_items: []
  }

  let products: CartEntry[] = [], newQuantity, newTotal;
  if (cartDetails) { 
    products = Object.values(cartDetails)
    newQuantity = products.reduce( (total, item) => {
      return total + item.quantity
    },0)
    newTotal = products.reduce( (total, item) => {
      return total + item.price
    },0)
  }

  async function handleClickRedirectToCheckout() {

    checkoutSessionData.line_items = products.map((product) => ({
      price: product.id,
      quantity: product.quantity,
    }));

    try{
      const response = await axios.post('/api/checkout_products', {
        checkoutData: checkoutSessionData
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    }catch(e){
      alert('Ocorreu um erro no processo de Checkout' + e)
    }
  }

  return (
    <BackgroundContainer
      css={{ '--open-cart': open ? 'grid' : 'none' }}
      onClick={onClose}
    >
      <Container 
        css={{ '--open-cart': open ? 'grid' : 'none' }}
        onClick={e => e.stopPropagation()}
      > 
        <CloseButton>
          <button type="button" onClick={() => onClose()} >
            <Image src={closeIcon} alt="" width={24} height={24}/>
          </button>
        </CloseButton>
        <h3>Carrinho de compras</h3>
        { products && products.length > 0 ? (
          <ListItems>
            {products.map( (item, i) => {
              return (
                <CartPlaceItem 
                  key={i}
                  id={item.id}
                  price_id="a"
                  title={item.name}
                  quantity={item.quantity}
                  price={item.formattedValue}
                  imageUrl={item.image ? item.image : null}
                />
              )
            })}
          </ListItems>
        ) : (
          <ListEmpty>
            <DescriptionEmpty>
              <Image src={cartIcon} alt="" />
              <p> Carrinho vazio, adicione produtos para aparecer nessa sessao. </p>
            </DescriptionEmpty>
          </ListEmpty>
        ) }
        
        <Footer>
          <p>Quantidade: </p>
          <p className="rightText">{newQuantity}</p>
          <p className="boldValue">Valor total: </p>
          <p className="boldValue rightText">{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(Number(newTotal) / 100)}</p>
          <button 
            className="fullCollumn" 
            disabled={!products || products.length < 1}
            onClick={() => handleClickRedirectToCheckout()}
          >
            Finalizar compra
          </button>
        </Footer>
      </Container>
    </BackgroundContainer>
  )
}