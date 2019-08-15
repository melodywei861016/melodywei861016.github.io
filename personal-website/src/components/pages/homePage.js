import React, { Component } from 'react';
import Mammoth from '../../Assets/images/mammoth.png';
import Google from '../../Assets/images/google.png';
import Blueprint from '../../Assets/images/blueprint.png';
import Card from "react-bootstrap/Card";

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
            <b>Hello!</b> I'm a senior studying Electrical Engineering and Computer Science at UC Berkeley.<br/>
            Currently looking for software engineer full time opportunities for 2020 and am <br/> interested in frontend & mobile/web development.
            Interned as Engineering Practicum <br/>Intern at <a href="/Google"><u1><b>Google</b></u1></a> in Summer 2017, as Android Developer Intern at <a href="/Mammoth"><u2><b>Mammoth Media</b><br/></u2></a>in Summer 2018,
            and as Software Engineer Intern at Microsoft. I also developed mobile <br/> and web apps for <a href="/Blueprint"><u3><b>Blueprint, Technology for Nonprofit</b></u3></a>.
          </p2>
        </p>
        <p3>
            <a href="/Mammoth"><img src={Mammoth} width="300" height="170" class="mammoth"/></a>
            <a href="/Google"><img src={Google} width="300" height="170" class="google"/></a>
            <a href="/Blueprint"><img src={Blueprint} width="300" height="170" class="blueprint"/></a>
        </p3>
        <div className="captions">
          <ul>
            <li>Mammoth Media</li>
            <li>Google</li>
            <li className="blueprint_cap">Blueprint</li>
          </ul>
        </div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );

  }
}

export default Homepage;
