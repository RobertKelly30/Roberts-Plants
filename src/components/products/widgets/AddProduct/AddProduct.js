import React, {useState} from 'react';

import { useNumberFormat } from 'hooks/useNumberFormat';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import { ProductEditor } from 'components/products/ProductEditor';
import ProductPreview from "assets/images/plant-preview.jpg";
import { EditorFeedBack } from 'components/products/EditorFeedBack';
import {AddProductStyles} from './styles'

const defaults = {
  description:`The planting of a tree, especially one of the long-living hardwood trees, 
  is a gift which you can make to posterity at almost no cost and with almost no trouble, 
  and if the tree takes root it will far outlive the visible effect of any of your other actions, good or evil.`,
  name:"Product Name",
  price:20.00
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState();
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productDescription, setproductDescription] = useState(defaults.description)
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }

  function handleProductDescription (description){
    setproductDescription(description)
  }

  function handleSubmit (e) {
    e.preventDefault();

    const productData = {
      productName,
      productPrice,
      productDescription
    }

    setIsWriting(true)
    productLoader(productData, productImage.file)
    setproductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
  }

  if(isWriting){
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
  }else{
    return (
      <AddProductStyles  {...props}>
        <ProductEditor 
          productName={productName} 
          productPrice={productPrice}
          productImage={productImage} 
          productDescription={productDescription}
          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          handleProductDescription={handleProductDescription}
          setProductImage={setProductImage}
          handleSubmit={handleSubmit}
          />

      </AddProductStyles>
)
  }
}

export default AddProduct