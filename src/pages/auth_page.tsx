import "../styles/style.css"
import { SignInForm } from './../widgets/sign_in_form';
import { SignUpForm } from './../widgets/sign_up_form';
import { SignInState, SignUpState } from './../state manager/auth_page_states';
import useStore from './../state manager/auth_page_manager';
import { useNavigate } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export function AuthPage() {
    let navigate = useNavigate();

    const store = useStore();
    console.log(store.states.constructor.name)//function(
    return (
        <body>
            <div className="wrapper">

                <div className="column center">
                    <SwitchTransition mode={"out-in"}>
                        <CSSTransition
                            key={Object.is(store.states, SignInState) ? "1" : "2"}
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                            classNames='fade'
                        >
                            <div className="container">
                                <h1>
                                    {Object.is(store.states, SignInState) ? "Sign up" : "Sign in"}
                                </h1>
                                <div className="indent"></div>
                                {Object.is(store.states, SignInState) ? <SignInForm /> : <SignUpForm />}
                                <div className="indent"></div>
                                <button className="btn" onClick={() => navigate("/messages")}>
                                    {Object.is(store.states, SignUpState) ? "Sign up" : "Sign In"}
                                </button>
                                <button className="btn-link" onClick={Object.is(store.states, SignUpState) ? store.setSignIn : store.setSignUp}>
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