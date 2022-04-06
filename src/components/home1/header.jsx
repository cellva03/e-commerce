import React from 'react';
import './header1.css';
import Logo from '../assets/amazon-png-logo-vector-6694.png';
import Search from '../assets/698627-icon.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Avatar from '../assets/avtar.png';


const header = () => {
  return (
    <div className='containers'>
        <nav>
            <img src={Logo} alt="Logo" width='60px' height='60px'/>
            <div className="search">
              <input type="text" name="" id="" placeholder='Search...'/>
              <img src={Search} alt="" width='30px' height='30px'/>
            </div>
            {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src="https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1648969211~hmac=6686ee7ba528ea0b7a8e3e017fd54c23" alt="" className='avatar-img'/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                  <Dropdown.Item ><Link to='/'>Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <NavDropdown eventKey={1} 
                title={
                    <div className="pull-right">
                        <img className="thumbnail-image" 
                            src={Avatar}
                            alt="user pic"
                            width="50px"
                            height="50px"
                        />
                    </div>
                } 
                id="basic-nav-dropdown">

                {/* <MenuItem eventKey={1.1} href="/profile">Profile</MenuItem>
                <MenuItem divider /> */}
                <NavDropdown.Item><Link to="/" className='link'>Logout</Link></NavDropdown.Item>
                {/* <MenuItem eventKey={1.3}>
                    <i className="fa fa-sign-out"></i> Logout
                </MenuItem> */}
            </NavDropdown>
        </nav>
    </div>
  )
}
export default header;