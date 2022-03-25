    import React from "react"

    import { GiFern } from "react-icons/gi"
    import { BrandStyles } from "./styles"

    function Brand  (props){
        return( 
            <BrandStyles {...props}>
                <GiFern size={props.iconSize} color={props.fill}/>
                <figcaption> Robert's Plants</figcaption>
            </BrandStyles>
        )
    }

    export default Brand 