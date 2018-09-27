import React, { Component } from 'react';
import ProPic from '../../Assets/images/pro_pic_circle.png';
import YarnGif from '../../Assets/images/yarn_giphy.gif';
import YarnIcon from '../../Assets/images/yarn_icon.png';
import YarnSquare from '../../Assets/images/yarn_square.jpg';
import Mammoth from '../../Assets/images/mammoth.png';
import Google from '../../Assets/images/google.png';
import Blueprint from '../../Assets/images/blueprint.png';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <p>
          <p1>
            <a href="/">
              <b>Melody Wei</b>
            </a>
          </p1>
          <p2>
            <b>Hello!</b> I'm a junior studying Electrical Engineering and Computer Science at UC Berkeley.<br/>
            Currently looking for a software engineering internship for summer 2019 and am <br/> interested in frontend & mobile/web development.
            Interned as Engineering Practicum <br/>Intern at <font color="#FF3300"><b>Google</b></font> in summer 2017, and as Android Developer Intern at <font color="#9933FF"><b>Mammoth Media</b></font> <br/>in summer 2018.
            I also developed mobile/web apps for <font color="#3366FF"><b>Blueprint, Technology for Nonprofit</b></font>.
          </p2>
        </p>
        <p3>
          <p4>
            <img src={Mammoth} width="300" height="170"/>
          </p4>
          <p5>
            <img src={Google} width="300" height="170"/>
          </p5>
          <p6>
            <img src={Blueprint} width="300" height="170"/>
          </p6>
        </p3>
      </div>
    );

  }
}

export default Homepage;
