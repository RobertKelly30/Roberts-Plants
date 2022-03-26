import React from 'react';


import {ProductPreviewStyles, ProductName, ProductDescription, ProductPrice, ProductImage} from './styles'

function ProductPreview ({children, productName, productPrice, productDescription, productImage, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>

          <ProductName>{productName}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductDescription>{productDescription}</ProductDescription>
          <ProductImage>
            <img src={productImage.previewImage} alt="Spider Plant" width="320" height="184"></img>
          </ProductImage>
        </ProductPreviewStyles>
  )
}

export default ProductPreview