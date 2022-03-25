import React from "react";

import { IoEllipsisVertical, IoMailOutline, IoNotificationsOutline } from "react-icons/io5"

import {AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup} from "./styles"
import {IconButton} from "./../../ui/buttons"
import {Brand} from '../branding/'

function AppBar (props){
    return(
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>
                    <Brand size="1.5rem" iconSize="2rem" color="black" fill="forestgreen"/>
                </AppBarItem>

                <AppBarItemGroup>
                    <IconButton>
                        <IoNotificationsOutline size="1.5rem" color="black"/>
                    </IconButton>

                    <IconButton>
                        <IoMailOutline size="1.5rem" color="black"/>
                    </IconButton>

                    <IconButton>
                        <img src="https://avatars.dicebear.com/api/initials/Robert%20Plants.svg?r=50" width="48" alt="" />
                    </IconButton>

                    <IconButton>
                        <IoEllipsisVertical size="1.5rem" color="black"/>
                    </IconButton>
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar