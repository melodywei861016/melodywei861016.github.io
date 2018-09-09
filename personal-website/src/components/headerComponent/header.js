import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className="first">
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/11RnzZRcJOyB1kInKImCXO49Vwpa-s7ZC/view?usp=sharing">RESUME</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wei-melody/">LINKEDIN</a>
            </li>
            <li className="last">
              <a href="https://github.com/melodywei861016">GITHUB</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
