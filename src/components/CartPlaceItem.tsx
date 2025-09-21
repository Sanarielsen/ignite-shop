import Image from "next/image";
import imgExample from "../assets/Camisetas/1.png"

import { Container, DescriptionSection, ImageSection } from "../styles/components/cartplaceitem";

interface CartPlaceItemProps {
  title: string,
  price: string,
  imageUrl: string,
}

export function CartPlaceItem( { title, price, imageUrl }: CartPlaceItemProps) {
  return (
    <Container>
      <ImageSection>
        <Image src={imgExample} alt="" width={92} height={92} />
      </ImageSection>
      <DescriptionSection>
        <div>          
          <h4 id="titleProduct">{title}</h4>
          <h4>{price}</h4>
        </div>
        <p>Cancelar</p>        
      </DescriptionSection>
    </Container>
  )
}