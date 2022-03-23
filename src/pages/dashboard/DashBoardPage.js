import React, { useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";
import { useNavigate } from "react-router-dom";

import { AppBar } from "./../../components/appbar"
import { SideBar } from "./../../components/sidebar"
import { ProductListing } from "./../../components/panels"
import { DashBoardPageStyles } from "./styles"


function DashBoardPage (props){
    const [isUser, setIsUser] = useState(false)
    const navigation = useNavigate();

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }else{
            setIsUser(false)
            navigation("/")
        }
    })

    if(isUser){
        return (
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
    }else{
        return null
    }
}

export default DashBoardPage