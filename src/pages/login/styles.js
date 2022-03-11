import styled from "styled-components";

const LoginPageStyles = styled.section`
  display: inline-block;
  vertical-align: middle;
  margin: 4rem auto 0;
  margin-top: 0rem;
  width: 50vh;

  h2 {
    text-align: center;
    font-size: 2rem;
  }
  p {
    text-align: center;
    font-size: 1rem;
  }
`;
const FormControl = styled.div`
  margin: 1rem 0;
`;
const LoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;

export { LoginPageStyles, LoginPageContainer, FormControl };
