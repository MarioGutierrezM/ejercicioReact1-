//Dependencies
import React, { Component } from 'react';
import PropTypes from "prop-types";

//Assets
import './css/Footer.css';

class Footer extends Component {
  //Validar que un string venga en copyrigth
  static propTypes = {
    copyrigth: PropTypes.string.isRequired
  };

  render() {
    //si no encuentra algun valor en props, tomara el string por defecto
    //recibe la informacion que es mandada desde APP en props
    const { copyrigth = '&copy; React 2018' } = this.props;
    return (
      <div className="Footer">
          <p> {copyrigth} </p>
      </div>
    );
  }
}

export default Footer; 