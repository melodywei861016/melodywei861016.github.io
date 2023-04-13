import React, { Component } from 'react';
import MelodyPhoto from '../Assets/images/melody_photo.JPG';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import './AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
        <>
            <div className="about-page-container">
                <NavBar selectedItem="about"/>
                <div className="about-page-contents">
                    <div className="about-page-description"> 
                        <span>
                            <div className="about-page-text--hey-there--container">
                                <p1 className="about-page-text--hey-there">HEY THERE!<br/></p1>
                            </div>
                            <div className="about-page-text--im-melody--container">
                                <p1 className="about-page-text--im-melody">I'm Melody<br/></p1>
                            </div>
                            <div className="about-page-text--container">
                                <p1 className="about-page-text">
                                    I currently work as a Software Engineer at Affirm, Inc. based in San Francisco.&nbsp;
                                    I've had the most experience in frontend/web development but also have various&nbsp;
                                    experiences in backend, mobile, etc.<br/><br/>

                                    I am also very passionate about music, and working on products that will allow me to&nbsp;
                                    work closely with artists and the music space in general. I am looking to expand my&nbsp;
                                    career outside of tech and am interested in any opportunities in the music industry/music&nbsp;
                                    tech space.
                                </p1>
                            </div>
                            <div className="about-page-text--my-experience--container">
                                <p1 className="about-page-text--my-experience">My Experience</p1>
                            </div>
                            <div className="about-page-text--experience-content--container">
                                <p1 className="about-page-text--experience-content">
                                Affirm – Software Engineer<br/>
                                Affirm – Software Engineer Intern<br/>
                                Microsoft – Software Engineer Intern<br/>
                                Google – Engineering Practicum Intern<br/>
                                Mammoth Media – Android Develop Intern<br/>
                                </p1>
                            </div>
                        </span>
                    </div>
                    <div className="about-page-photo-container">
                        <img className="about-page-photo" src={MelodyPhoto} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );

  }
}

export default AboutPage;
