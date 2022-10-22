import React from "react";
import "../styles/style.css"
import { SignInForm } from './../widgets/sign_in_form';
import { SignUpForm } from './../widgets/sign_up_form';
import { AuthPageStates, SignInState, SignUpState, LoadingState, ErrorState } from './../state manager/auth_page_states';
import useStore from './../state manager/auth_page_manager';
import { Route, Router, Routes } from "react-router-dom";
import { AboutPage } from "./about_page";
import shallow from 'zustand/shallow'
import { Transition, CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";

export function AuthPage() {
    const store = useStore();
    console.log(store.states.constructor.name)//function(
    return (
        <body>
            <div className="wrapper">

                <div className="center">
                    <div className="one-fifth-offset"> </div>
                    {/*Haven't figured out how to fix it yet.  */}

                    <SwitchTransition mode={"out-in"}>
                        <CSSTransition
                            key={Object.is(store.states, SignInState) ? "1" : "2"}
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                            classNames='fade'
                        >
                            <div className="container">
                                {/* TODO: Add more widgets */}
                                {Object.is(store.states, SignInState) ? <SignInForm /> : <SignUpForm />}
                                <button className="btn" onClick={Object.is(store.states, SignUpState) ? store.setSignIn : store.setSignUp}>
                                    {Object.is(store.states, SignUpState) ? "Already have an account?" : "Create account"}
                                    </button>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </body>
    );
};