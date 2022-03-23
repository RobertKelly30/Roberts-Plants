import React from 'react'

import styled from 'styled-components';
import { signOut } from 'firebase/auth'
import { auth } from "libs/firebase"
import { IoFlowerOutline, IoFileTrayStackedOutline, IoHeartCircleOutline, IoStarOutline, IoAddCircleOutline, IoClipboardOutline, IoExitOutline} from "react-icons/io5"

import { Button } from "ui/buttons"

const DashBoardOptionsStyles = styled.ul`
    margin: 3rem 0 0;
    li{
        font-size: 1.25rem;
        padding: 15px 0;
        color: black;
    }
`;

 function DashBoardOptions  (props){

    function onLogoutRequest (e){
        signOut(auth)
        console.log("hello")
    }

     return( 
        <>
            <DashBoardOptionsStyles>
                <li>
                    <p><IoFlowerOutline/> All Plants</p>
                </li>
                <li>
                    <p><IoFileTrayStackedOutline/> Categories</p> 
                </li>
                <li>
                    <p><IoHeartCircleOutline/> Favorites</p>
                </li>
                <li>
                    <p><IoStarOutline/> Reviews</p>
                </li>
                <li>
                    <p><IoAddCircleOutline/> Add Plant</p>
                </li>
                <li>
                    <p><IoClipboardOutline/> Orders</p>
                </li>
                <li>
                    <Button onClick={onLogoutRequest}><IoExitOutline/> Sign Out</Button>
                </li>
            </DashBoardOptionsStyles>
        </>
     )
 }
 
 export default DashBoardOptions 