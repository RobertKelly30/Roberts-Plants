import React from "react";

import {Link} from 'react-router-dom'


function DashBoardPage (props){
    return(
        <>
            <header>
                <h1>Dashboard Page</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Sign Out</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard Page</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default DashBoardPage