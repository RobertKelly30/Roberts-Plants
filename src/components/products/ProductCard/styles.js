import styled from "styled-components";

const ProductCardStyles = styled.aside`
  max-width: 360px; 
  align-self: stretch;
  padding: 3rem 2rem;
`;

const ProductImage = styled.div`
  margin: 1rem auto 0;
  width:300px;
  img{
    width: 100%;
    /* height:auto; */
  }
`;
 
 const ProductName = styled.h2`
   font-size: 2.25rem;
   font-weight:700;
   line-height: 2.5rem;
   letter-spacing: -0.5px;
   color: black;
   word-wrap: break-word;
 `;
 

const ProductPrice = styled.p`
  font-size:2rem;
  font-weight: 100;
  letter-spacing: -1px;
  color:#64748b;
  margin-bottom:0.25rem;
`;

const ProductDescription = styled.p`
  font-size:13px;
  color:#94a3b8;
`;

const ProductIcons = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1.5rem;
`;
 
export {
  ProductCardStyles, ProductImage, ProductPrice, ProductName, ProductDescription, ProductIcons
};
