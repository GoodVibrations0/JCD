import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav'
import Artist from './Components/Artist'
import DeltaMinor from './Components/DeltaMinor'
import Admin from './Components/Admin';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import { jwtDecode } from "jwt-decode";

interface User{
  id: number,
  username: string
}
interface TokenPayload {
  id: number;
  username: string;
  exp: number;
  iat: number;
}

function App() {
  const [balance, setBalance] = useState(0);
  const [hovered, setHovered] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User>();

  const login = () => {
    const token = localStorage.getItem("token");
    if(token){
      try{
        const decoded: TokenPayload = jwtDecode(token);
        setUser({id:decoded.id, username:decoded.username});
        console.log(user?.id+" "+user?.username);
        setLoggedIn(true);
      } catch(error){
        console.error("Invalid token:",error);
      }
    }
  }
  
  useEffect(() => {
    if(user){
      console.log(user.id + " " + user.username);
      setUsername(user.username);
    }
  }, [user]);

    const logout = () => {setLoggedIn(false);}

  return (
    <div className="App">
      <Nav user={username} loggedIn={loggedIn} logout={logout} />
      <div className="card">
        <button onClick={() => setBalance(() => {
          let min = Math.ceil(-1000000);
          let max = Math.floor(1000000);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        })}>
          Your Balance is: £{balance}
        </button>
      </div>
      <div className='content page'>
        <Routes>
          <Route path="/" element={<HomePage balance={balance}/>}/>
          <Route path="/deltaminor" element={<DeltaMinor/>}/>
          <Route path="/artist" element={<Artist/>}/>
          <Route path="/login" element={<Login login={login}/>} />
          <Route path="/admin" element={
            <PrivateRoute loggedIn={loggedIn}>
              <Admin />
            </PrivateRoute>
          } />
        </Routes>
        
      </div>
      <p>
        Joseph Doherty 2025
      </p>
      <p className="read-the-docs" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
        {hovered ? `Third` : `Party`}
      </p>
    </div>
  )
}

export default App
