import React from 'react';
import './styles/nav-bar.css';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const NavBar = (onLogin) => (
  <div className="NavBar">
    <ul>
      {/* <Link to="/" className="link"><i className="fas fa-building"></i></Link> */}
      <Link to="/properties" className="link">Properties ></Link>
      <Link to="/add-property" className="link">Add Properties ></Link>
    </ul>
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={true}
      fields="name,email,picture"
      callback={onLogin}
    />
  </div>
);

export default NavBar;
