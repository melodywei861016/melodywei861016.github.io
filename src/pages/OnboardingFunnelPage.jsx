import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import ActivationVideo from '../Assets/images/screenshots/activation_video.png';
import OnboardingFunnelApproved from '../Assets/images/screenshots/onboarding_funnel_approved.png';
import OnboardingFunnelPending from '../Assets/images/screenshots/onboarding_funnel_pending.png';
import OnboardingFunnelBlurApi from '../Assets/images/screenshots/onboarding_funnel_blur_api.png';
import './OnboardingFunnelPage.css';

class OnboardingFunnelPage extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <body>
        <div className="project-container">
            <NavBar />
            <div className="project-contents">
              <div className="project-header">
                  <h1 className="project-title">Affirm Merchant Self-Service<br/>Onboarding Funnel Improvements</h1>
                  <p1 className="project-description">
                      Implemented improvements for Merchant Portal's Merchant Self-Service Onboarding Funnel process
                  </p1>
              </div>
              <div className="project-subheader-container">
                <div className="project-overview-container">
                  <h3 className="project-overview-title">
                    Project Overview
                  </h3>
                  <p1 className="project-overview-contents">
                    The Merchant Self-Service Onboarding Improvements project aims to make the signup process frictionless 
                    and magical for merchants. After the launch, they will be able to onboard into Affirm network in a 
                    single, uninterrupted session. As part of the Merchant Self-Service onboarding funnel improvements 
                    projects, we've made two major changes – adding video guidance to the merchant onboarding activation 
                    step, and allowing merchants to access integration instructions before getting approved (while blurring 
                    API credentials until approval).
                  </p1>
                </div>
                <div className="my-contributions-container">
                  <h3 className="my-contributions-title">
                    My Contributions
                  </h3>
                  <p1 className="my-contributions-contents">
                    I worked with a Project Manager and a Designer to make improvements on the 
                    onboarding process. I worked on adding the video guidance feature in the 
                    activation step, and setting up the integration details for merchants to access 
                    while they wait for approval. In addition, I also worked on safety features such 
                    as blurring the API credentials in the integration details until the merchant
                    gets approved. By providing video guidance to the activation step, 
                    we increased the activation rate by 5% and decreased activation time by 5%. 
                    By allowing merchants to access integration details while awaiting approval, 
                    we improved activation rate by 25% and decreased time-to-activation by 15%.
                  </p1>
                </div>
              </div>
              <div className="onboarding-funnel-image-container">
                <img className="activation-video-image" src={ActivationVideo} />
                <div className="unlock-integration-container">
                  <img className="blur-api-image" src={OnboardingFunnelBlurApi} />
                  <div className="onboarding-funnel-status-container">
                    <img className="onboarding-funnel-status-image" src={OnboardingFunnelApproved} />
                    <img className="onboarding-funnel-status-image" src={OnboardingFunnelPending} />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
        </div>
      </body>
    );

  }
}

export default OnboardingFunnelPage;
