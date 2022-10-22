import React from "react";

export function SignUpForm(){
    return(
        <>
            <h1>Sign up</h1>
            <input type="text"  className="textfield" placeholder="login*"/>
            <input type="text"  className="textfield" placeholder="firstname"/>
            <input type="text"  className="textfield" placeholder="status"/>
            <input type="password"  className="textfield" placeholder="password*"/>
            <input type="password"  className="textfield" placeholder="confirm password"/>
        </>
    )
}