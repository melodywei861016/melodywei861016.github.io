import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import RebrandLogoChange from '../Assets/images/rebrand_logo_change.png';
import RebrandColorChange from '../Assets/images/rebrand_color_change.png';
import RebrandTypographyChange from '../Assets/images/rebrand_typography_change.png';
import PromoScreenshot from '../Assets/images/promo_screenshot.png';
import FinancingPackageScreenshot from '../Assets/images/financing_package_screenshot.png';
import DnaScreenshot from '../Assets/images/dna_screenshot.png';
import LoginScreenshot from '../Assets/images/login_screenshot.png';
import './RebrandPage.css';

class RebrandPage extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <body>
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
                  Main Changes in the Rebrand: <b>Logo</b>,&nbsp;<b>Color</b>,&nbsp;<b>Typography</b>
                </h3>
                <img className="rebrand-logo-change" src={RebrandLogoChange} />
                <img className="rebrand-color-change" src={RebrandColorChange} />
                <img className="rebrand-typography-change" src={RebrandTypographyChange} />
              </div>
            </div>
            <div className="rebrand-screenshots-container">
              <a target="_blank" href="">
                <div className="rebrand-screenshots-title-container">
                  <h3 className="rebrand-screenshots-title">
                    Screenshots – Rebrand vs Before 🔗
                  </h3>
                </div>
              </a>
              <div className="rebrand-screenshots">
                <div className="screenshot-container">
                  <div className="screenshot-title-container">
                    <p1 className="screenshot-title">Promotional Financing Page</p1>
                  </div>
                  <img className="screenshot-photo" src={PromoScreenshot} />
                </div>
                <div className="screenshot-container">
                  <div className="screenshot-title-container">
                    <p1 className="screenshot-title">Financing Pacakge Page</p1>
                  </div>
                  <img className="screenshot-photo" src={FinancingPackageScreenshot} />
                </div>
                <div className="screenshot-container">
                  <div className="screenshot-title-container">
                    <p1 className="screenshot-title">Home Page</p1>
                  </div>
                  <img className="screenshot-photo" src={DnaScreenshot} />
                </div>
                <div className="screenshot-container">
                  <div className="screenshot-title-container">
                    <p1 className="screenshot-title">Login Page</p1>
                  </div>
                  <img className="screenshot-photo" src={LoginScreenshot} />
                </div>
              </div>
            </div>
            <Footer />
        </div>
      </body>
    );

  }
}

export default RebrandPage;
