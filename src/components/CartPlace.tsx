import Image from "next/image";
import closeIcon from '../assets/CartPlace/close-icon.svg';

import { Container, CloseButton, ListItems, Footer } from "../styles/components/cartplace"
import { CartPlaceItem } from "./CartPlaceItem";

const items = [
  {
    name: 'Camisa 1',
    price: 'R$ 80,00',
    imageUrl: String(closeIcon)
  },
  {
    name: 'Camisa 2',
    price: 'R$ 70,00',
    imageUrl: String(closeIcon)
  },
  {
    name: 'Camisa 3',
    price: 'R$ 50,00',
    imageUrl: String(closeIcon)
  },
  {
    name: 'Camisa 4',
    price: 'R$ 90,00',
    imageUrl: String(closeIcon)
  },
  {
    name: 'Camisa 5',
    price: 'R$ 40,00',
    imageUrl: String(closeIcon)
  },
  {
    name: 'Camisa 6',
    price: 'R$ 75,00',
    imageUrl: String(closeIcon)
  }
]

interface CartPlaceProps {
  open: boolean
  onClose: () => void;
}

export function CartPlace({ open, onClose }: CartPlaceProps) {

  return (
    <Container 
      css={{ '--open-cart': open ? 'grid' : 'none' }}
    > 
      <CloseButton>
        <button type="button" onClick={() => onClose()} >
          <Image src={closeIcon} alt="" width={24} height={24}/>
        </button>
      </CloseButton>
      <h3>Carrinho de compras</h3>
      <ListItems>
        { items.map( (item, i) => {
            return (
              <CartPlaceItem 
                key={i}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            )
        }) }
      </ListItems>
      <Footer>
        <p>Quantidade: </p>
        <p className="rightText">3 itens</p>
        <p className="boldValue">Valor total: </p>
        <p className="boldValue rightText">R$270,00</p>
        <button className="fullCollumn">Finalizar compra</button>
      </Footer>
    </Container>
  )
}