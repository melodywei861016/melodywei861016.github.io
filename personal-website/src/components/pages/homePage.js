import React, { Component } from 'react';
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
            Currently looking for a software engineering internship for Summer 2019 and am <br/> interested in frontend & mobile/web development.
            Interned as Engineering Practicum <br/>Intern at <u1><font color="#FF3300"><b>Google</b></font></u1> in Summer 2017, and as Android Developer Intern at <u2><font color="#9933FF"><b>Mammoth Media</b></font> <br/></u2>in summer 2018.
            I also developed mobile/web apps for <u3><font color="#3366FF"><b>Blueprint, Technology for Nonprofit</b></font></u3>.
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
