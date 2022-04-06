import React from "react";

import { PanelStyles, PanelHeader, PanelBody } from "./styles";
import { ProductCard } from 'components/products/ProductCard'
import { useGetAllProducts } from 'hooks/useGetAllProducts'

function AllPlantsPanel ({title, ...props}){
    const [isLoading, products] = useGetAllProducts();

    function cruff(){
        const temp = products.map(product=> <ProductCard key={product.uid} product={product}/>)
        return temp
     }

    return(
        <PanelStyles>
            <PanelHeader>
                <h2>{title || "Display Panel"}</h2>
            </PanelHeader>
            <PanelBody>
                {isLoading? cruff(): <p>no data</p>}
            </PanelBody>
        </PanelStyles>
        
    )
}

export default AllPlantsPanel