import React from "react";
import "../styles/style.css"
export function SignInForm() {
    return (
        <>
            <input type="text" className="textfield" placeholder="login" />
            <input type="password" className="textfield" placeholder="password" />
        </>
    )
}