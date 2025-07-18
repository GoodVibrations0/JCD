// Joseph Doherty 27/06/2025
// I think I should move the logic, like the axios post request, to the auth provider
import {FormEvent, useEffect, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface Props{
    login : () => void // login method passed in from App.tsx. All this does is check if a jwt token exists
}

function Login(props : Props) {
    const [error, setError] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);    // references for the login form
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const login = (event : FormEvent) => {
        event.preventDefault();
        if(emailRef.current != null && passwordRef.current != null) // if the input fields are not null then assign the values to variables
        {
            let email = emailRef.current.value;
            let password = passwordRef.current.value;
            const body = {
                email:email, passwordPlaintext:password}

            axios.post(`http://localhost:3000/auth/login`,body).then((response) =>{
                // store jwt in localStorage
                const token = response.data.token;
                if(token){
                    localStorage.setItem("token",token);    // store in local storage
                    props.login();
                    navigate('/');
                }

                console.log("LOGIN RESPONSE:"+response.data.message);
            })
            .catch((error)=>{
                console.error("Login failed:", error.response?.data || error.message);
                setError("Invalid email or password");
            });
        }
    }

    return(
        <form onSubmit={login}>
            <h1>Login</h1><hr/>
            <div>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input ref={emailRef} id="email" type="email" className="form-control" placeholder="Enter email"></input>
            </div>
            <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input ref={passwordRef} id="password" type="password" className="form-control" placeholder="Password"></input>
            </div>
            <p id="invalid">{error}</p>
            <button className="btn btn-primary" type="submit">Login</button>       
        </form>
        
    )
}

export default Login;