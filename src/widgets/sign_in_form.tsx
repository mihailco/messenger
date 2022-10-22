import React from "react";
import "../styles/style.css"
export function SignInForm() {
    return (
        <>
            <h1>Sign in</h1>
            <input type="text" className="textfield" placeholder="login" />
            <input type="password" className="textfield" placeholder="password" />
        </>
    )
}