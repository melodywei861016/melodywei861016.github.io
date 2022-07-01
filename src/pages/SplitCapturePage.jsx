import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import SplitCaptureRecording from '../Assets/videos/split_capture_recording.mov';
import './SplitCapturePage.css';

class RebrandPage extends Component {
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
                  <h1 className="project-title">Affirm Split Capture</h1>
                  <p1 className="project-description">
                      Led project team to add Split Capture and Partial Void funtionalities to Affirm's Merchant Portal
                  </p1>
              </div>
              <div className="project-subheader-container">
                <div className="project-overview-container">
                  <h3 className="project-overview-title">
                    Project Overview
                  </h3>
                  <p1 className="project-overview-contents">
                    Split capture is a feature that enables a merchant to get paid incrementally as they are captured. 
                    This brings Affirm's Direct API integration at parity with credit cards. Split Capture creates a 
                    more consistent payment and reporting experience as merchants can charge and recognize revenue as 
                    goods are fulfilled, similar to card networks.
                  </p1>
                </div>
                <div className="my-contributions-container">
                  <h3 className="my-contributions-title">
                    My Contributions
                  </h3>
                  <p1 className="my-contributions-contents">
                    I led the project team to implement frontend features for split capture and partial void, as part
                    of the Split Capture GA Launch. I also designed the UI for the modals. This project has increased 
                    Gross Merchandise Value by $250mm. The new split capture and partial void features also include 
                    frontend error validation features that makes the user experience smoother. 
                  </p1>
                </div>
              </div>
              <video className="split-capture-video-container" controls autoPlay loop muted>
                <source className="split-capture-video" src={SplitCaptureRecording} />
              </video>
            </div>
            <Footer />
        </div>
      </>
    );

  }
}

export default RebrandPage;
