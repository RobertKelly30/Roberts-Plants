import React from 'react';

import { IoPencil, IoCloseCircleOutline } from "react-icons/io5"
 
import {ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription, ProductIcons} from './styles'
import { IconButton, SubmitButton } from "ui/buttons"


function ProductPreview ({children, product, ...props})  {
  const{productName, productPrice,imageUrl, productDescription} = {...product}
  return (
      <ProductCardStyles  {...props}>
         <ProductImage>
            <img src={imageUrl}  alt="8k nike flex" width="320" height="320"/>
         </ProductImage>
         <ProductName>{productName}</ProductName>
         <ProductPrice>${productPrice}</ProductPrice>
         <ProductDescription>
            {productDescription}
         </ProductDescription>
         <ProductIcons>
            <SubmitButton width="250%" type="submit">Buy</SubmitButton>
            <IconButton>
               <IoPencil type="submit" size="1.5rem" color="black"/>
            </IconButton>
            <IconButton>
               <IoCloseCircleOutline size="1.5rem" color="black"/>
            </IconButton>
         </ProductIcons>

      </ProductCardStyles>
  )
}

export default ProductPreview