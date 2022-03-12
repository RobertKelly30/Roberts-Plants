 import React from 'react'
 import { Link } from 'react-router-dom';
 import styled from 'styled-components';

 import { IoFlowerOutline, IoFileTrayStackedOutline, IoHeartCircleOutline, IoStarOutline, IoAddCircleOutline, IoClipboardOutline, IoExitOutline} from "react-icons/io5"

const DashBoardOptionsStyles = styled.ul`
    margin: 3rem 0 0;
    li{
        font-size: 1.25rem;
        padding: 15px 0;
        color: black;
    }
`;

 function DashBoardOptions  (props){
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
                    <Link to="/"><IoExitOutline/> Sign Out</Link>
                </li>
            </DashBoardOptionsStyles>
        </>
     )
 }
 
 export default DashBoardOptions 