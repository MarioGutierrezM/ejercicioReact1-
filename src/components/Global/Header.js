//Dependencies
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    //console.log(this.props);
    const { title } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" >
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          {title}
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav Menu">
            <li className="nav-item"> <Link to={'/'}> Home </Link> </li>
            <li className="nav-item"> <Link to={'/products'}> Products </Link> </li>
            <li className="nav-item"> <Link to={'/orders'}> Orders </Link> </li>
            <li className="nav-item"> <Link to={'/admin'}> Admin </Link> </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
