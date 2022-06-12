import '.App.css';
import { Routes, Route, Link, Router } from "react-router-dom";


function Nav () {
    return (
        <div id='navbar'>
            <div id='logo'>
                <Link to="/">Connor White</Link>
            </div>
            <div id='links'>
                <Link to="/work">Work</Link>
                <Link to="/info">Info</Link>
            </div>
        </div>
    );
}

export default Nav;