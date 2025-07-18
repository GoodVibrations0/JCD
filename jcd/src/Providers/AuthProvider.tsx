import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type LoginCredentials = {
    emailIn:string,
    passwordIn:string,
    rememberMe:boolean | null
}

type RegisterType = {
    emailIn:string,
    usernameIn:string,
    passwordIn:string,
    rememberMe:boolean
}

interface User {
    id:number,
    username:string
}

interface TokenPayload {
    id: number;
    username: string;
    exp: number;
    iat: number;
  }

interface Props{
    username: string | null,
    token: string,
    login(data:LoginCredentials):Promise<void>,
    logout():void,
    register(data:RegisterType):Promise<void>
}

const AuthContext = createContext<Props>({
    username: null,
    token: '',
    login:()=>{},
    logout:()=>{},
    register:()=>{}
})


const AuthProvider = ({children}:{children: ReactNode}) => {
    const [user,setUser] = useState<User | null>(null);
    const [token,setToken] = useState<string|null>(null);
    const [error,setError] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        // check for a token in localstorage to keep users logged in or log out on expiry
        const checkToken=()=>{
            const token = localStorage.getItem("token");
            if(token){
                try{
                    const decoded: TokenPayload = jwtDecode(token);
                    // if token not expired then log user in
                    if(decoded.exp * 1000 > Date.now()){
                        setUser({id:decoded.id, username:decoded.username});
                        setToken(token);
                    }
                    else{
                        logout();
                        console.log("Token expired. Please log in.");
                    }
                } catch(error){
                    logout();
                    console.log("Could not decode token:",error);
                }
            }
        };
        checkToken();
        // check after another minute;
        const interval = setInterval(checkToken, 60_000);
        return () => clearInterval(interval);
    },[])

    const login= async (data:LoginCredentials):Promise<void> => {
        const body = {
            email:data.emailIn,
            passwordPlaintext:data.passwordIn
        }
        axios.post(`http://localhost:3000/auth/login`,body).then((response) =>{
            // store jwt in localStorage
            const token = response.data.token;
            if(token){
                localStorage.setItem("token",token);    // store in local storage
                try{
                    const decoded: TokenPayload = jwtDecode(token);
                    setUser({id:decoded.id, username:decoded.username});
                    console.log(user?.id+" "+user?.username);
                    navigate('/');
                  } catch(error){
                    console.error("Could not decode token:",error);
                  }
            }
            console.log("LOGIN RESPONSE:"+response.data.message);
        })
        .catch((error)=>{
            console.error("Login failed:", error.response?.data || error.message);
            setError("Invalid email or password");
        });
      }

    const logout = ()=>{
        setUser(null);
        setToken(null);
        // call check token method which will redirect if we are on a page that requries authentication.
    }
}