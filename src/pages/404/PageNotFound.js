import React, { useState} from "react";

import { Link } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "libs/firebase"

import { Brand } from 'components/branding/'
import { PageNotFoundPageStyles } from "./styles"

function PageNotFound (props){
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }else{
            setIsUser(false)
        }
    })

    return(
        <>
        <PageNotFoundPageStyles>
            <header>
                <div className="branding">
                    <Brand size="2rem" iconSize="3rem" color="black" fill="forestgreen"/>
                </div>
                <h1>404 | Page Not Found</h1>
                <p>We are sorry, but the page you are looking for does not exist.</p>
                <p>
                    Please click 
                    {
                        isUser? <Link to="/dashboard"> here </Link> : <Link to="/"> here </Link>
                    }
                    to return to the website.
                </p>
            </header>
        </PageNotFoundPageStyles>
            
        </>
    )
}

export default PageNotFound