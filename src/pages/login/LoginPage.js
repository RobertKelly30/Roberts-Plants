import React from "react";
import { useNavigate } from 'react-router-dom'

function LoginPage (props){
    let navigation = useNavigate();

    function onHandleSubmit(e){
        e.preventDefault();
        navigation('/dashboard');
    }

    return(
        <>
            <header>
                <h1>Login Page</h1>
            </header>

            <form onSubmit={onHandleSubmit}>
                <input type="text" required />
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default LoginPage