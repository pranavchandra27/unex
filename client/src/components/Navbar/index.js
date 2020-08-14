import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Unex80x20.png";
import "../../main.css";

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props;
    return (
      <div className='navbar_main' onMouseLeave={onMouseLeave}>
        <div id='container'>
          <ul className='navbar_links'>
            <Link to='/'>
              <img id='unex-logo' src={Logo} alt='my logo' />
            </Link>
            <div className='navbar_items'>
              <Link to='/services'>{children}</Link>
              <Link to='/ourwork' className='jDsNIX'>
                Our Work
              </Link>
              <Link to='/contact' className='jDsNIX'>
                Contact
              </Link>
              <a
                href='tel:619-765-8277'
                id='nav-phone-button'
                className='jDsNIX'>
                <h1>619-765-8277</h1>
              </a>
            </div>
            <div className='navbar_main_links'>
              <Link to='/services' className='jDsNIX'>
                {children}
              </Link>
              <Link to='/ourwork' className='jDsNIX'>
                Our Work
              </Link>
              <Link to='/contact' className='jDsNIX'>
                Contact
              </Link>
            </div>
            <div id='nav-start-button'>
              <Link to='/contact'>Start Your Project &ensp; ></Link>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
