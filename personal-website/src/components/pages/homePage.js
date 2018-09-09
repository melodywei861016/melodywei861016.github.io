import React, { Component } from 'react';
import ProPic from '../../Assets/images/pro_pic_circle.png';

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
      </div>
    );

  }
}

export default Homepage;
