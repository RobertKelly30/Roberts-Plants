import styled from "styled-components";

const PanelStyles= styled.section`
    flex:1;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.3) ;
    background-color: white ;
    border-radius:3px ;
    margin:1rem;
    
`;

const PanelHeader = styled.header`
    h2{
        background-color: #f8f8f8;
        padding:0.5rem;
        border-radius: 3px ;
        border-bottom-left-radius:0;
        border-bottom-right-radius:0 ;
        color:#3f3f3f;
    }
`;

const PanelBody = styled.div`
    margin: ${props => props.margin || " 4rem"};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export {PanelStyles, PanelHeader, PanelBody}