import React from "react";
import { useNavigate } from "react-router-dom";

import { Label, Input } from "./../../ui/forms";

import { SubmitButton } from "../../ui/buttons";
import { LoginPageStyles, FormControl } from "./styles";

function LoginPage(props) {
  let navigation = useNavigate();

  function onHandleSubmit(e) {
    e.preventDefault();
    navigation("/dashboard");
  }

  return (
    <>
      <LoginPageStyles>
        <header>
          <h1>Login Page</h1>
        </header>

        <form onSubmit={onHandleSubmit}>
          <FormControl className="form-control">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" placeholder="johndoe@gmail.com" />
          </FormControl>

          <FormControl className="form-control">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="text" placeholder="Password" />
          </FormControl>

          <FormControl className="form-control">
            <SubmitButton
              type="submit"
              padding="0.88rem"
              margin="1rem 0 0"
              fs="1rem"
            >
              Sign In
            </SubmitButton>
          </FormControl>
        </form>
      </LoginPageStyles>
      <LoginPageStyles>
        <h2>Welcome to Robert's Plants</h2>
        <p>Enjoy the greenery</p>
      </LoginPageStyles>
    </>
  );
}

export default LoginPage;
