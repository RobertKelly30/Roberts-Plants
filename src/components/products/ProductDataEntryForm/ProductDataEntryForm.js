import React from 'react';

import { ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice } from './styles'
import { ProductImageDropBox } from '../ProductImageDropBox';
import { Label, Input} from "ui/forms"
import { TextArea } from "ui/forms/textarea"
import { SubmitButton } from 'ui/buttons';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, setProductImage, handleSubmit, handleProductDescription, ...props})  {
  return (
    <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
      <ProductImage>
        <Label>Product Image</Label>
        <ProductImageDropBox setProductImage={setProductImage}/>
      </ProductImage>
      <fieldset>
        <ProductName>
          <Label>Product Name</Label>
          <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
        </ProductName>

        <ProductPrice>
          <Label>Product Price</Label>
          <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
        </ProductPrice>
      </fieldset>
      <ProductDescription>
        <Label>Product Description</Label>
        <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} rows={6}/>
      </ProductDescription>

      <div>
        <SubmitButton width="100%" type="submit" padding="0.75rem" margin="1rem 0 0 0">Add Product</SubmitButton>
      </div>

    </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm