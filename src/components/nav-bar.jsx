import React from 'react';
import './styles/nav-bar.css';
import { Link } from 'react-router-dom';
// import AddProperty from './add-property';

const NavBar = () => (
  <div className="NavBar">
    <ul>
      {/* <Link to="/" className="link"><i className="fas fa-building"></i></Link> */}
      <Link to="/properties" className="link">Properties ></Link>
      <Link to="/add-property" className="link">Add Properties ></Link>
    </ul>
  </div>
);

export default NavBar;
