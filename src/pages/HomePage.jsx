import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar.jsx';
import Github from '../Assets/images/icons/github.png';
import Instagram from '../Assets/images/icons/instagram.png';
import Linkedin from '../Assets/images/icons/linkedin.png';
import Tiktok from '../Assets/images/icons/tiktok.png';
import Email from '../Assets/images/icons/email.png';
import Youtube from '../Assets/images/icons/youtube.png';
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
      <h1 className="homepage-title">melody wei.</h1>
      <span className="homepage-description">
        <p1 className="homepage-description--text">
          hello! 👋 I am a software engineer at&nbsp;
        </p1>
        <p1 className="homepage-description--nerdwallet">
          NerdWallet.&nbsp;
        </p1>
        <p1 className="homepage-description--text">
          based in New York. Currently looking for new software engineer opportunities that are based in SF, NY, LA, or remote. 
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
      <div className="homepage-container">
        <NavBar />
        <div className="homepage-contents">
          {this.renderDescriptionComponent()}
        </div>
        <div className="social-media-menu">
            <a target="_blank" href="https://www.linkedin.com/in/wei-melody/" className="social-media-item">
                <img src={Linkedin} width="40" height="40"/>
            </a>
            <a target="_blank" href="https://github.com/melodywei861016" className="social-media-item">
                <img src={Github} width="40" height="40"/>
            </a>
            <a target="_blank" href="https://www.tiktok.com/@melodyweiii" className="social-media-item">
                <img src={Tiktok} width="40" height="40"/>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCUnB5rduMjJ2Gf89DWdhcJA" className="social-media-item">
                <img src={Youtube} width="40" height="40"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/melodyweiii/" className="social-media-item">
                <img src={Instagram} width="40" height="40"/>
            </a>
            <a target="_blank" href="mailto:melodywei861016@gmail.com" className="social-media-item">
                <img src={Email} width="40" height="40"/>
            </a>
        </div>
      </div>
    );

  }
}

export default HomePage;
