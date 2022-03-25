import styled from 'styled-components';

const PageNotFoundPageStyles = styled.aside`

   height: 100vh;
   display:flex;
   justify-content: center;
   align-items: center;
   background-color: #c6c6c6;

   header {
        background-color: white;
        border-radius: 10px;
        padding: 4rem 6rem 6rem 6rem;
        display: flex;
        width: 50vw;
        flex-direction: column;
   }

   h1 {
       font-size: 5rem;
   }

   p {
       font-size: 1.5rem;
       align-self: center;
   }

   .branding {
       align-self: center;
       padding-bottom: 2rem;
   }
`;

export {PageNotFoundPageStyles}