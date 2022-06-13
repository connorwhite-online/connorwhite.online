import '../App.css';
import { Link } from "react-router-dom";


function Nav () {
    return (
        <div id='navbar'>
            <div id='logo'>
                <Link to="/" className='navlink'>Connor White</Link>
            </div>
            <div id='links'>
                <Link to="/work" className='navlink'>Work</Link>
                <Link to="/info" className='navlink'>Info</Link>
            </div>
        </div>
    );
}

export default Nav;