import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import MelodyResume from '../Assets/images/melody_resume.jpg';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="resume-page-container">
        <NavBar selectedItem="resume"/>
        <div className="resume-page-contents">
          <Link className="download-link-container" to="/files/melody_resume.pdf" target="_blank" download>
            <div className="download-button">
              <p1 className="download-text">
                Download Resume as PDF
              </p1>
            </div>
          </Link>
          <img className="resume-image" src={MelodyResume} />
        </div>
      </div>
    );

  }
}

export default Resume;
