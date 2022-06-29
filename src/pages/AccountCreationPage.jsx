import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import AccountCreationRecording from '../Assets/videos/account_creation_recording.mov';
import './AccountCreationPage.css';

class AccountCreationPage extends Component {
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
                  <h1 className="project-title">Affirm Account Creation Improvements</h1>
                  <p1 className="project-description">
                      Implemented improvements for Merchant Portal's account creation process
                  </p1>
              </div>
              <div className="project-subheader-container">
                <div className="project-overview-container">
                  <h3 className="project-overview-title">
                    Project Overview
                  </h3>
                  <p1 className="project-overview-contents">
                    Account creation flow on Merchant Portal saw a ~50% drop off rate, and previously no 
                    password requirement guidelines were provided to users. Users only received password 
                    requirement info through error messages after submitting. During this project, we 
                    addied a password requirements checklist that provides visibility and real-time 
                    feedback.
                  </p1>
                </div>
                <div className="my-contributions-container">
                  <h3 className="my-contributions-title">
                    My Contributions
                  </h3>
                  <p1 className="my-contributions-contents">
                    I worked with a Project Manager and a Designer to make improvements on the account creation 
                    process. As part of this, I implemented a show/hide password input button and a password 
                    requirements checklist that provides real-time feedback. This project increased account creation 
                    and monthly activation rate by 2%.
                  </p1>
                </div>
              </div>
              <video className="account-creation-video-container" controls autoPlay loop muted>
                <source className="account-creation-video" src={AccountCreationRecording} />
              </video>
            </div>
            <Footer />
        </div>
      </body>
    );

  }
}

export default AccountCreationPage;
