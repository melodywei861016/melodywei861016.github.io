import React, { Component } from 'react';
import ProPic from '../../Assets/images/pro_pic_circle.png';
import YarnGif from '../../Assets/images/yarn_giphy.gif';
import YarnIcon from '../../Assets/images/yarn_icon.png';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>
          Melody Wei
        </h1>
        <p>
          <p1>
            <img src={ProPic} width="200" height="200"/>
          </p1>
          <p2>
            <b>Hello!</b> I'm a junior studying EECS at UC Berkeley. I am looking for an internship for <br/>
            summer 2019 and am interested in frontend and UI design. I've developed several <br/>
            mobile and web applications, and interned at Google as an Engineering Practicum <br/>
            Intern and at Mammoth Media as an Android Developer Intern. <br/>
          </p2>
        </p>
        <p3>
          <b>Projects</b>
        </p3>
        <p5>
          <img src={YarnIcon} width="250" height="250"/>
          <p4>
            <ul>
              <li>
                Android Studio using Java, Javascript, HTML/CSS <br/>
              </li>
              <li>
                Developed new frontend features for Android app Yarn (ex. fullscreen <br/>
                expansion of images in chat screens when tapped)<br/>
              </li>
              <li>
                Redesigned UI for Yarn’s different screens (ex. Updated Yarn’s splash <br/>
                screen and catalog display, redesigned Yarn’s chat screen with animations, <br/>
                new chat bubbles shapes and colors, left/right alignment of chat bubbles, <br/>
                character avatars, etc) <br/>
              </li>
            </ul>
          </p4>
        </p5>
      </div>
    );

  }
}

export default Homepage;
