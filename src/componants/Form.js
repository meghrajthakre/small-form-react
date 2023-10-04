import React from "react";
import forms from "./Forms.css";
import googleImg from "../img/Google_2015_logo.svg.png";
import { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState();
    const [em, setEm] = useState();
    const [pass, setPass] = useState();
    const [ps, setPs] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEm(email);
        setPs(pass);
    };

    return (
        <>
            <div className="forms">
                <div className="col">
                    {" "}
                    <form onSubmit={handleSubmit}>
                        <img src={googleImg} width={90} />
                        <h1>Sign in</h1>
                        <p>use your google account</p>
                        <label htmlFor="email"> Email : </label> <br />
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            name="fname"
                            placeholder="Email Or Phone"
                            required
                        />
                        <br />
                        <br />
                        <label htmlFor="pass"> password : </label> <br />
                        <input
                            type="password"
                            name="pass"
                            placeholder="Enter Your password"
                            required
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <br /> <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="col1">
                    <form>
                        <label>Your Email Is : {em}</label>
                        <br />
                        <label>Your Password Is : {ps}</label>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
