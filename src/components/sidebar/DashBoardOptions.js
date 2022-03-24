import React from 'react'
import { Link } from "react-router-dom"

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
                    <Link to="/dashboard"><IoFlowerOutline/> All Plants</Link>
                </li>
                <li>
                    <Link to="addPlant"><IoAddCircleOutline/> Add Plant</Link>
                </li>
                <li>
                    <Link to="categories"><IoFileTrayStackedOutline/> Categories</Link>
                </li>
                <li>
                    <Link to="favorites"><IoHeartCircleOutline/> Favorites</Link>
                </li>
                <li>
                    <Link to="orders"><IoClipboardOutline/> Orders</Link>
                </li>
                <li>
                    <Link to="reviews"><IoStarOutline/> Reviews</Link>
                </li>
                <li>
                    <Button onClick={onLogoutRequest}><IoExitOutline/> Sign Out</Button>
                </li>
            </DashBoardOptionsStyles>
        </>
     )
 }
 
 export default DashBoardOptions 