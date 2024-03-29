import styled from "styled-components";

const SideBarStyles = styled.aside`
   width:289px;
   box-shadow: 2px 0 4px -2px grey;
   padding:3rem;
   background-color:#ffffff;
   margin:1rem 0rem;
`;

const SideBarHeader = styled.header`
    color:black;
    display:flex;
    align-items: center ;
    gap:0.25rem;

    h2{
        font-size:18px;
    }
    svg{
        color:black;
        vertical-align:middle;
    }
`;

export {SideBarStyles, SideBarHeader}