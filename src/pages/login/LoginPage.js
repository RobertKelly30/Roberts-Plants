import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"
import { ToastContainer, toast } from "react-toastify";

import { GiFern } from "react-icons/gi"
import "react-toastify/dist/ReactToastify.css"

import { auth } from "libs/firebase"
import { Label, Input } from "ui/forms";
import { SubmitButton } from "ui/buttons";
import { LoginPageStyles, LoginPageContainer, FormControl, LoginImageStyles } from "./styles";

function LoginPage(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigation = useNavigate();

    const notify = (error) => toast.error(error.code, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    function onHandleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCrediental=>{
            navigation("dashboard")
        })
        .catch(error=>{
            notify(error)
        })
    }

    return (
    <>
        <LoginPageContainer>
            <LoginPageStyles>
                <ToastContainer />
                <header>
                    <h1>Welcome to Robert's Plants</h1>
                    <p>Let's grow together</p>
                </header>
            
                <form onSubmit={onHandleSubmit}>
                    <FormControl className="form-control">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="text" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>

                    <FormControl className="form-control">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
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
            <LoginImageStyles>
                <GiFern size="50rem" color="white"/>
            </LoginImageStyles>
        </LoginPageContainer>
    </>
  );
}

export default LoginPage;
