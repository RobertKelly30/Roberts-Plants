import React from "react";

import { MdDashboard } from "react-icons/md";

import { SideBarStyles, SideBarHeader} from "./styles"
import DashBoardOptions from "./DashBoardOptions"

function SideBar (props){
    return(
        <SideBarStyles>

            <SideBarHeader>
                <MdDashboard size="1.75rem"/>
                <h2>Dashboard</h2>
            </SideBarHeader>

            <DashBoardOptions/>

        </SideBarStyles>
    )
}

export default SideBar