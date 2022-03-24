import React from "react";
import { PanelStyles, PanelHeader, PanelBody } from "./styles";

function FavoritesPanel ({title, ...props}){
    return(
        <PanelStyles>
            <PanelHeader>
                <h2>{title || "Display Panel"}</h2>
            </PanelHeader>
            <PanelBody>

            </PanelBody>
        </PanelStyles>
        
    )
}

export default FavoritesPanel