import React from "react";

import { AppBar } from "./../../components/appbar"
import { SideBar } from "./../../components/sidebar"
import { ProductListing } from "./../../components/panels"
import { DashBoardPageStyles } from "./styles"


function DashBoardPage (props){
    return(
        <>
            <>
            <AppBar/>
            <DashBoardPageStyles>
            <SideBar/>
            <ProductListing />
            </DashBoardPageStyles>
           </>
        </>
    )
}

export default DashBoardPage