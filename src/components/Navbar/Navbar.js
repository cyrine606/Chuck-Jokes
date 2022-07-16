import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <Router>
            <nav className='navbar'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <NavLink className="nav-links" to="/funktionierts">so funktionierts</NavLink >
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-links" to="/sonderangeobote">sonderangebote</NavLink >
                    </li>
                    <li className='nav-item' onClick={() => setShowDropdown(!showDropdown)}>
                        <img className='nav-icon' width={12} height={12} src={require('../../assets/images/shape.png')} alt='user icon' />
                        <NavLink className="nav-links" to="/bereich">mein bereich</NavLink >
                        <img className="menu-toggle" width={10} height={5} src={require('../../assets/images/path.png')} alt='toggle' />
                    </li>
                </ul>
                <Routes>
                    <Route path="/funktionierts" />
                    <Route path="/sonderangeobote" />
                    <Route path="/bereich" />
                </Routes>
            </nav>
            {showDropdown && <div className='dropdown'>
                <ul className='dropdown-menu'>
                    <li className='dropdown-item'>
                        <NavLink className="dropdown-links" to="/publishedJokes">My published jokes</NavLink>
                    </li>
                    <hr className='dropdown-divider' />
                    <li className='dropdown-item'>
                        <NavLink className="dropdown-links" to="/savedJokes">My saved jokes</NavLink>
                    </li>
                    <hr className='dropdown-divider' />
                    <li className='dropdown-item'>
                        <NavLink className="dropdown-links" to="/information">Account information</NavLink>
                    </li>
                    <hr className='dropdown-divider' />
                    <li className='dropdown-item'>
                        <NavLink className="dropdown-links special-item" to="/publish">Publish new joke</NavLink>
                    </li>
                </ul>
            </div>}
        </Router>
    )
}

export default Navbar