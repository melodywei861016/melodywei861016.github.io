import React, { Component } from 'react';
import MelodyPhoto from '../Assets/images/melody_photo.JPG';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import MelodyResume from '../Assets/images/melody_resume.pdf';
import './AboutPage.css';

class Resume extends Component {
  render() {
    return (
        <body>
            <div className="resume-page-container">
                <NavBar selectedItem="resume"/>
                <div className="resume-page-contents">
                    <embed src={MelodyResume} />
                </div>
                <Footer />
            </div>
        </body>
    );

  }
}

export default Resume;
