import React, { useState } from 'react';
import { Link } from "react-router-dom";
import config from '../config'
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import PasswordPrompt from '../components/PasswordPrompt.jsx';
import Rebrand from '../Assets/images/rebrand.png';
import SplitCaptureMainPhoto from '../Assets/images/split_capture_main_photo.png';
import AccountCreationMainPhoto from '../Assets/images/account_creation_main_photo.png';
import OnboardingFunnelMainPhoto from '../Assets/images/onboarding_funnel_main_photo.png';
import MobileResponsiveMainPhoto from '../Assets/images/mobile_responsive_main_photo.png';
import NerdwalletCompare from '../Assets/images/nerdwallet_compare.png';
import NerdwalletRoundup from '../Assets/images/nerdwallet_roundup.png';
import NerdwalletBcc from '../Assets/images/nerdwallet_bcc.png';
import './Work.css';

const Work = ({}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handlePasswordSubmit = async (password) => {
      fetch(`${config.apiUrl}/api/check-password`, {
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: { 
            'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
            setIsLoggedIn(true);
            }
        })
        .catch((error) => console.error(error));
    }
      
    const renderProjectGallery = (imageSrc, title, description, links = {}) => {
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

    return (
        <div className="work-container">
            <NavBar selectedItem="work"/>
            {isLoggedIn ? (
                <>
                    <div className="homepage-project-gallery">
                        {renderProjectGallery(Rebrand, 'Affirm Merchant Portal Rebrand', 'Project Team Lead', { pageLink: '/rebrand' })}
                        {renderProjectGallery(MobileResponsiveMainPhoto, 'Affirm Merchant Portal Mobile Responsive', 'Frontend Developer', { pageLink: '/mobile-responsive' })}
                        {renderProjectGallery(SplitCaptureMainPhoto, 'Affirm Merchant Portal Split Capture', 'Project Team Lead', { pageLink: '/split-capture' })}
                        {renderProjectGallery(AccountCreationMainPhoto, 'Affirm Merchant Account Creation Improvements', 'Project Developer', { pageLink: '/account-creation' })}
                        {renderProjectGallery(OnboardingFunnelMainPhoto, 'Affirm Merchant Onboarding Improvements', 'Frontend Developer', { pageLink: '/onboarding-funnel' })}
                        {renderProjectGallery(NerdwalletCompare, 'NerdWallet Compare Page', 'Frontend Developer', { externalLink: 'https://www.nerdwallet.com/compare/credit-cards' })}
                        {renderProjectGallery(NerdwalletRoundup, 'NerdWallet Roundup Page', 'Frontend Developer', { externalLink: 'https://www.nerdwallet.com/best/credit-cards/balance-transfer' })}
                        {renderProjectGallery(NerdwalletBcc, 'NerdWallet Best Credit Cards Page', 'Frontend Developer', { externalLink: 'https://www.nerdwallet.com/the-best-credit-cards' })}
                    </div>
                    <Footer />
                </>
            ) : (
                <PasswordPrompt onPasswordSubmit={handlePasswordSubmit} />
            )}
        </div>
    );
}

export default Work;

// {isLoggedIn ? (
// ) : (
//     <PasswordPrompt onPasswordSubmit={handlePasswordSubmit} />
// )}