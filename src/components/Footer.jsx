import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classnames from 'classnames';
import Github from '../Assets/images/github.png';
import Instagram from '../Assets/images/instagram.png';
import Linkedin from '../Assets/images/linkedin.png';
import Tiktok from '../Assets/images/tiktok.png';
import Email from '../Assets/images/email.png';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedItem } = this.props;
    return (
      <div className="footer-container">
        <div className="social-media-menu">
            <a target="_blank" href="https://www.linkedin.com/in/wei-melody/" className="social-media-item">
                <img src={Linkedin} width="40" height="40"/>
            </a>
            <a target="_blank" href="https://github.com/melodywei861016" className="social-media-item">
                <img src={Github} width="40" height="40"/>
            </a>
            <a target="_blank" href="https://www.tiktok.com/@melodyweiii" className="social-media-item">
                <img src={Tiktok} width="40" height="40"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/melodyweiii/" className="social-media-item">
                <img src={Instagram} width="40" height="40"/>
            </a>
            <a target="_blank" href="mailto:melodywei861016@gmail.com" className="social-media-item">
                <img src={Email} width="40" height="40"/>
            </a>
        </div>
        <div className="footer-caption-container">
            <p1 className="footer-caption">THANKS FOR VISITING! CHECK OUT MY LINKS ABOVE.</p1>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  selectedItem: PropTypes.string,
}

Footer.defaultProps = {
  selectedItem: 'home',
}

export default Footer;