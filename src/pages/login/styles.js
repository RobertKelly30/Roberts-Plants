import styled from "styled-components";

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c6c6c6;
`;

const LoginPageStyles = styled.section`
  width: 40vw;
  height: 80vh;
  background-color: white;
  border-radius: 10px 0 0 10px;
  padding: 4rem 6rem 6rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 2.5rem;
  }
  p {
    text-align: center;
    font-size: 1.125rem;
    padding-bottom: 2rem;
  }
`;

const FormControl = styled.div`
  margin: 1rem 0;
`;

const LoginImageStyles =styled.div`
  width: 40vw;
  height: 80vh;
  background-color: forestgreen;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export { LoginPageStyles, LoginPageContainer, FormControl, LoginImageStyles };
