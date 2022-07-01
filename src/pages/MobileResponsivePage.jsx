import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import OnboardingFpRecording from '../Assets/videos/onboarding_fp_recording.mov';
import PromoStatusScreenRecording from '../Assets/videos/promo_status_screen_recording.mov';
import OnboardingPackageSelectionRecording from '../Assets/videos/onboarding_package_selection_recording.mov';
import OnboardingPackageConfirmationRecording from '../Assets/videos/onboarding_package_confirmation_recording.mov';

import './MobileResponsivePage.css';

class MobileResponsivePage extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <div className="project-container">
            <NavBar />
            <div className="project-contents">
              <div className="project-header">
                  <h1 className="project-title">Affirm Merchant Portal<br/>Mobile Responsive</h1>
                  <p1 className="project-description">
                      Implemented improvements on making Merchant Portal mobile responsive
                  </p1>
              </div>
              <div className="project-subheader-container">
                <div className="project-overview-container">
                  <h3 className="project-overview-title">
                    Project Overview
                  </h3>
                  <p1 className="project-overview-contents">
                    Our analytics show that half of our merchants access Affirm Merchant Portal on mobile
                    devices. To move merchant portal Financing Packages to a more mobile responsive direction, 
                    we are updating the styles of the Financing Packages Page and Promotional Financing
                    Page.
                  </p1>
                </div>
                <div className="my-contributions-container">
                  <h3 className="my-contributions-title">
                    My Contributions
                  </h3>
                  <p1 className="my-contributions-contents">
                    I worked with a Project Manager and a Designer to make improvements on the 
                    onboarding process. I worked on creating the newly styled Financing Package 
                    Cards and making the rest of the pages completely mobile responsive. This 
                    provides a more seamless process for merchants on mobile devices and allow 
                    them to onboarding and start promotions with a better user experience.
                  </p1>
                </div>
              </div>
              <div className="mobile-responsive-video-container">
                <video controls autoPlay loop muted>
                  <source src={OnboardingFpRecording} type="video/mp4" />
                </video>
                <video controls autoPlay loop muted>
                  <source src={PromoStatusScreenRecording} type="video/mp4" />
                </video>
                <div className="mobile-screens">
                  <video className="mobile-video" controls autoPlay loop muted>
                    <source src={OnboardingPackageSelectionRecording} type="video/mp4" />
                  </video>
                  <video className="mobile-video" controls autoPlay loop muted>
                    <source src={OnboardingPackageConfirmationRecording} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <Footer />
        </div>
      </>
    );

  }
}

export default MobileResponsivePage;
