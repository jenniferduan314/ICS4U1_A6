import "./Account.css";
import Collage from "../images/collage.jpeg";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useStoreContext } from "../context";

function Register() {
    const navigate = useNavigate();
    console.log({ setFirstName, setLastName, setEmail, setPassword });
    const { setFirstName, setLastName, setEmail, setPassword } = useStoreContext();
    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const password = useRef('');
    const [rePass, setRePass] = useState('');

    function create(event) {
        event.preventDefault();
        setFirstName(firstName.current.value);
        setLastName(lastName.current.value);
        setEmail(email.current.value);
        setPassword(password.current.value);
        return;
    }

    return (
        <div className="hero">
            <img src={Collage} alt="collage" id="hero-image"></img>
            <div className="shadow"></div>
            <div className="hero-frame">
                <div className="register-box">
                    <div className="account-creation">
                        <div className="account-title">Create Account</div>
                        <form onSubmit={(event) => create(event)}>
                            <label className="account-text">First Name:</label>
                            <input className="account-input" type="text" ref={firstName} required></input>
                            <label className="account-text">Last Name:</label>
                            <input className="account-input" type="text" ref={lastName} required></input>
                            <label className="account-text">Email:</label>
                            <input className="account-input" type="email" ref={email} required></input>
                            <label className="account-text">Password:</label>
                            <input className="account-input" type="password" ref={password} required></input>
                            <label className="account-text">Re-enter Password:</label>
                            <input className="account-input" type="password" value={rePass} onChange={(event) => { setRePass(event.target.value) }} required></input>
                            <label>Already have an account? </label>
                            <label className="account-no" onClick={() => navigate("/login")}>Click here</label>
                            <button className="account-button" type="submit">CREATE</button>
                        </form>
                    </div>
                    <div className="account-genres">
                        hi
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;