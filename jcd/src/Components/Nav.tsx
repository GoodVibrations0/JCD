import {NavLink, Link} from 'react-router-dom';
import {useState} from "react";
interface Props{    // properties passes in by App.tsx that tell the navbar what to render
    loggedIn : boolean, 
    logout : () => void,
    user : string
}

function Nav(props : Props){
    const logout = () =>
        {
            props.logout();
        }
    if(props.loggedIn)
    {   // '<Link onClick={logout} to="/">Logout</Link>' uses a reference to the logout function defined in App.tsx
        return(
            <nav className='navbar-light bg-light'>
                <Link to="/">Home</Link>|
                <NavLink to="/deltaminor">Delta Minor</NavLink>|
                <Link to="/artist">Artist</Link>|
                <Link onClick={logout} to="/">Logout</Link>| 
                <Link to="/admin">-&gt; Admin</Link>| {props.user}
            </nav>
        );
    }
    else
    {
        return(
            <nav className='navbar-light bg-light'>
                <Link to="/">Home</Link>|
                <Link to="/deltaminor">Delta Minor</Link>|
                <Link to="/artist">Artist</Link>| 
                <Link to="/login">Login</Link>|
            </nav>
        );
    }
    
}

export default Nav