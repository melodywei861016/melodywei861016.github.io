import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import RebrandLogoChange from '../Assets/images/rebrand_logo_change.png';
import RebrandColorChange from '../Assets/images/rebrand_color_change.png';
import RebrandTypographyChange from '../Assets/images/rebrand_typography_change.png';
import PromoOld from '../Assets/images/screenshots/promo_old.png';
import PromoNew from '../Assets/images/screenshots/promo_new.png';
import FpOld from '../Assets/images/screenshots/fp_old.png';
import FpNew from '../Assets/images/screenshots/fp_new.png';
import HomeOld from '../Assets/images/screenshots/home_old.png';
import HomeNew from '../Assets/images/screenshots/home_new.png';
import LoginOld from '../Assets/images/screenshots/login_old.png';
import LoginNew from '../Assets/images/screenshots/login_new.png';

import './RebrandPage.css';

class RebrandPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="project-container">
          <NavBar />
          <div className="project-contents">
            <div className="project-header">
                <h1 className="project-title">Affirm Rebrand</h1>
                <p1 className="project-description">
                    Led project team to rebrand Affirm's Merchant Portal
                </p1>
            </div>
            <div className="project-subheader-container">
              <div className="project-overview-container">
                <h3 className="project-overview-title">
                  Project Overview
                </h3>
                <p1 className="project-overview-contents">
                  The Merchant Portal Rebrand Launch included logo, color, typography, 
                  component style and size changes. As part of Affirm's new brand launch, 
                  the Rebrand Project aims to increase <b>brand awareness</b> and <b>brand equity</b>, 
                  as well as enable consumer experiences that <b>inspire and delight</b>. This 
                  helps Affirm <b>compete more successfully</b> in the market.
                </p1>
              </div>
              <div className="my-contributions-container">
                <h3 className="my-contributions-title">
                  My Contributions
                </h3>
                <p1 className="my-contributions-contents">
                  I led the project team to apply rebrand changes to Merchant Portal. 
                  I also coordinated with designers and web team to facilitate and 
                  confirm all the components, colors, and typography changes.
                </p1>
              </div>
            </div>
            <div className="rebrand-changes-container">
              <h3 className="rebrand-changes-title">
                Main Changes in the Rebrand: Logo, Color, Typography
              </h3>
              <div className="rebrand-change-images">
                <img className="rebrand-logo-change" src={RebrandLogoChange} alt="rebrand logo change" />
                <img className="rebrand-color-change" src={RebrandColorChange} alt="rebrand color change" />
                <img className="rebrand-typography-change" src={RebrandTypographyChange} alt="rebrand typography change" />
              </div>
            </div>
          </div>
          <div className="rebrand-screenshots-container">
            <div className="rebrand-screenshots-title-container">
              <h3 className="rebrand-screenshots-title">
                Screenshots – Before vs After
              </h3>
            </div>
            <div className="rebrand-screenshots">
              <div className="screenshot-container">
                <div className="screenshot-title-container">
                  <p1 className="screenshot-title">Promotional Financing Page</p1>
                </div>
                <div className="screenshots-grid">
                  <img className="screenshot-photo" src={PromoOld} alt="promo old" />
                  <img className="screenshot-photo" src={PromoNew} alt="promo new" />
                </div>
              </div>
              <div className="screenshot-container">
                <div className="screenshot-title-container">
                  <p1 className="screenshot-title">Financing Pacakge Page</p1>
                </div>
                <div className="screenshots-grid">
                  <img className="screenshot-photo" src={FpOld} alt="fp old" />
                  <img className="screenshot-photo" src={FpNew} alt="fp new" />
                </div>
              </div>
              <div className="screenshot-container">
                <div className="screenshot-title-container">
                  <p1 className="screenshot-title">Home Page</p1>
                </div>
                <div className="screenshots-grid">
                  <img className="screenshot-photo" src={HomeOld} alt="home old" />
                  <img className="screenshot-photo" src={HomeNew} alt="home new" />
                </div>
              </div>
              <div className="screenshot-container">
                <div className="screenshot-title-container">
                  <p1 className="screenshot-title">Login Page</p1>
                </div>
                <div className="screenshots-grid">
                  <img className="screenshot-photo" src={LoginOld} alt="login old" />
                  <img className="screenshot-photo" src={LoginNew} alt="login new" />
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
    );

  }
}

export default RebrandPage;
