import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import classnames from 'classnames';
import MIcon from '../Assets/images/icons/m_icon.png'
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    const mobileMenu = () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    };
  
    hamburger.addEventListener("click", mobileMenu);
  }

  render() {
    const { selectedItem } = this.props;
    return (
      <div className="navbar">
        <div className="navbar-and-menu">
          <div className="icon-and-hamburger">
            <Link to ="/" className="nav-item"><img src={MIcon} width="50" height="50"/></Link>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
          </div>
          <ul className="nav-menu">
            <li className="nav-li">
              <Link
                to ="/"
                className={classnames({
                  ["nav-item"]: true,
                  ["nav-item--selected"]: selectedItem === 'home',
                })}
              >
                home
              </Link>
            </li>
            <li className="nav-li">
              <Link
                to ="/about"
                className={classnames({
                  ["nav-item"]: true,
                  ["nav-item--selected"]: selectedItem === 'about',
                })}
              >
                about
              </Link>
            </li>
            <li className="nav-li">
              <Link
                to ="/resume"
                className={classnames({
                  ["nav-item"]: true,
                  ["nav-item--selected"]: selectedItem === 'resume',
                })}
              >
                resume
              </Link>
            </li>
            <li className="nav-li">
              <a
                href="mailto:melodywei861016@gmail.com"
                className={classnames({
                  ["nav-item"]: true,
                })}
              >
                contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  selectedItem: PropTypes.string,
}

NavBar.defaultProps = {
  selectedItem: 'home',
}

export default NavBar;
