import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className="first">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1cjpJiCnD2SLM1PeMDCG8cvBlU0KJlK8O/view?usp=sharing">Resume</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wei-melody/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/melodywei861016">Github</a>
            </li>
            <li className="last">
              <a href="mailto:melodywei861016@berkeley.edu">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
