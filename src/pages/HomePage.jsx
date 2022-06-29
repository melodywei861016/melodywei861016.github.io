import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import Rebrand from '../Assets/images/rebrand.png';
import SplitCaptureMainPhoto from '../Assets/images/split_capture_main_photo.png';
import AccountCreationMainPhoto from '../Assets/images/account_creation_main_photo.png';
import OnboardingFunnelMainPhoto from '../Assets/images/onboarding_funnel_main_photo.png';
import MobileResponsiveMainPhoto from '../Assets/images/mobile_responsive_main_photo.png';
import PersonalWebsiteMainPhoto from '../Assets/images/personal_website_main_photo.png';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  };

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }

  renderDescriptionComponent = () => (
    <div ref={this.myRef} className="homepage-header">
      <h1 className="homepage-title">Melody Wei</h1>
      <span className="homepage-description">
        <p1 className="homepage-description--text">
          Hello! 👋 I am a Software Engineer at&nbsp;
        </p1>
        <p1 className="homepage-description--affirm">
          Affirm, Inc.&nbsp;
        </p1>
        <p1 className="homepage-description--text">
          based in San Francisco. Currently looking for opportunities in the&nbsp;
        </p1>
        <p1 className="homepage-description--music-tech">
          music tech&nbsp;
        </p1>
        <p1 className="homepage-description--text">
          space.
        </p1>
      </span>
    </div>
  );

  renderProjectGallery = (imageSrc, title, description, links = {}) => {
    const childComponent = (
      <div className="homepage-project-container">
        <img className="homepage-project-photo" src={imageSrc} />
        <div className="homepage-project-text">
          <p1 className="homepage-project-title">{title}<br/></p1>
          <p1 className="homepage-project-description">{description}</p1>
        </div>
      </div>
    );
    if (links.pageLink) {
      return (
        <Link className="homepage-project-link-container" to={links.pageLink}>
          {childComponent}
        </Link>
      );
    } else if (links.externalLink) {
      return (
        <a className="homepage-project-link-container" href={links.externalLink} target="_blank">
          {childComponent}
        </a>
      );
    }
    return childComponent;
  };

  render() {
    return (
      <body>
        <div className="homepage-container">
          <NavBar />
          <div className="homepage-contents">
            {this.renderDescriptionComponent()}
            <div className="homepage-project-gallery">
              {this.renderProjectGallery(Rebrand, 'Affirm Merchant Portal Rebrand', 'Project Team Lead', { pageLink: '/rebrand' })}
              {this.renderProjectGallery(MobileResponsiveMainPhoto, 'Affirm Merchant Portal Mobile Responsive', 'Frontend Developer', { pageLink: '/mobile-responsive' })}
              {this.renderProjectGallery(SplitCaptureMainPhoto, 'Affirm Merchant Portal Split Capture', 'Project Team Lead', { pageLink: '/split-capture' })}
              {this.renderProjectGallery(AccountCreationMainPhoto, 'Affirm Merchant Account Creation Improvements', 'Project Developer', { pageLink: '/account-creation' })}
              {this.renderProjectGallery(OnboardingFunnelMainPhoto, 'Affirm Merchant Onboarding Improvements', 'Frontend Developer', { pageLink: '/onboarding-funnel' })}
              {this.renderProjectGallery(PersonalWebsiteMainPhoto, 'Personal Website', 'melodywei.me', { externalLink: 'https://github.com/melodywei861016/melodywei861016.github.io' })}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    );

  }
}

export default HomePage;
