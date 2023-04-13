import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import Rebrand from '../Assets/images/rebrand.png';
import SplitCaptureMainPhoto from '../Assets/images/split_capture_main_photo.png';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
  };

  renderDescriptionComponent = () => (
    <div className="homepage-header">
      <h1 className="homepage-title">Melody Wei</h1>
      <span className="homepage-description">
        <p1 className="homepage-description--text">
          Hello! 👋 I am a Software Engineer at&nbsp;
        </p1>
        <p1 className="homepage-description--affirm">
          Affirm, Inc.&nbsp;
        </p1>
        <p1 className="homepage-description--text">
          based in San Francisco. Currently looking for new software engineer opportunities that are based in SF, NY, LA, or remote. 
        </p1>
      </span>
    </div>
  );

  renderProjectGallery = (imageSrc, title, description ,pageLink) => (
    <Link className="homepage-project-link-container" to={pageLink}>
      <div className="homepage-project-container">
        <img className="homepage-project-photo" src={imageSrc} />
        <div className="homepage-project-text">
          <p1 className="homepage-project-title">{title}<br/></p1>
          <p1 className="homepage-project-description">{description}</p1>
        </div>
      </div>
    </Link>
  );

  render() {
    return (
      <body>
        <div className="homepage-container">
          <NavBar />
          <div className="homepage-contents">
            {this.renderDescriptionComponent()}
            <div className="homepage-project-gallery">
              {this.renderProjectGallery(Rebrand, 'Affirm Rebrand', 'Led project team to rebrand Merchant Portal', '/rebrand')}
              {this.renderProjectGallery(SplitCaptureMainPhoto, 'Affirm Split Capture', 'Led project team to implement Split Capture on Merchant Portal', '/split-capture')}
              {this.renderProjectGallery(Rebrand, 'Affirm Rebrand', 'Led project team to rebrand Affirm\'s Merchant Portal', '/rebrand')}
              {this.renderProjectGallery(Rebrand, 'Affirm Rebrand', 'Led project team to rebrand Affirm\'s Merchant Portal', '/rebrand')}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    );

  }
}

export default HomePage;
