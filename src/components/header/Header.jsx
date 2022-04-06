import React from 'react';
import './header.css';
import Logo from '../assets/amazon-png-logo-vector-6694.png';
import Search from '../assets/698627-icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
        <nav>
            <img src={Logo} alt="Logo" width='60px' height='60px'/>
            <div className="search">
              <input type="text" name="" id="" placeholder='Search...'/>
              <img src={Search} alt="" width='30px' height='30px'/>
            </div>
            <ul>
              <li><Link to="/login" className="links">Login</Link></li>
              <li><Link to="/signup" className="links">Signup</Link></li> 
            </ul>
        </nav>
    </div>
  )
}
export default Header;