import React from 'react';
import { Link, IndexLink } from 'react-router';
import logo from '../common/logo.svg';


const Header = () => (
  <div>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to PirateCon</h2>
    </div>
  </div>
  <div className="text-center">
    <br/>

    <nav className="navbar navbar-default">
      <br/>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="productList" activeClassName="active">All Products</Link>
      {" | "}
      <Link to="addProduct" activeClassName="active">Add Products</Link>
      {" | "}
      <Link to="/" activeClassName="active">Search</Link>
    </nav>
  </div>
  </div>
);

export default Header;
