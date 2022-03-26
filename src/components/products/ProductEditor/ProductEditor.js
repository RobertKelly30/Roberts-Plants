import React from 'react';

import { ProductDataEntryForm } from './../ProductDataEntryForm';
import { ProductPreview } from './../ProductPreview';
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, productName, productPrice, productImage, productDescription, handleSubmit, handleProductName, handleProductDescription, handleProductPrice, setProductImage, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
          <ProductDataEntryForm 
              handleProductName={handleProductName}
              handleProductPrice={handleProductPrice}
              handleProductDescription={handleProductDescription}
              setProductImage={setProductImage}
              handleSubmit={handleSubmit}
          />
          <ProductPreview 
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            productDescription={productDescription}
          />

        </ProductEditorStyles>
  )
}

export default ProductEditor