import Image from "next/image";

import { Container, DescriptionActions, DescriptionSection, ImageSection } from "../styles/components/cartplaceitem";
import { useShoppingCart } from "use-shopping-cart";

interface CartPlaceItemProps {
  id: string,
  price_id: string,
  title: string,
  quantity: number
  price: string,
  imageUrl: string | null,
}

export function CartPlaceItem( product: CartPlaceItemProps) {

  const { decrementItem, removeItem } = useShoppingCart();

  return (
    <Container>
      <ImageSection>
        { product.imageUrl && <Image src={product.imageUrl} alt="" width={92} height={92} /> }
      </ImageSection>
      <DescriptionSection>
        <div>          
          <h4 id="titleProduct">{product.title}</h4>
          <h4>{product.price} | Quantidade: {product.quantity}</h4>
        </div>
        <DescriptionActions>
          <span onClick={() => removeItem(product.id)}>Remover</span>
          <span onClick={() => decrementItem(product.id)}>Remover uma unidade</span>
        </DescriptionActions>
      </DescriptionSection>
    </Container>
  )
}