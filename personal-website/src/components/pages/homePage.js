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
          <img src={ProPic} width="500" height="500"/>
        </p>
      </div>
    );

  }
}

export default Homepage;
