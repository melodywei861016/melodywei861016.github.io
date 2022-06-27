import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classnames from 'classnames';
import MIcon from '../Assets/images/m_icon.png'
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedItem } = this.props;
    return (
      <div className="navbar">
        <Link to ="/" className="nav-item"><img src={MIcon} width="50" height="50"/></Link>
        <div className="nav-menu">
          <Link
            to ="/"
            className={classnames({
              ["nav-item"]: true,
              ["nav-item--selected"]: selectedItem === 'home',
            })}
          >
            HOME
          </Link>
          <Link
            to ="/about"
            className={classnames({
              ["nav-item"]: true,
              ["nav-item--selected"]: selectedItem === 'about',
            })}
          >
            ABOUT
          </Link>
          <Link
            to ="/resume"
            className={classnames({
              ["nav-item"]: true,
              ["nav-item--selected"]: selectedItem === 'resume',
            })}
          >
            RESUME
          </Link>
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
