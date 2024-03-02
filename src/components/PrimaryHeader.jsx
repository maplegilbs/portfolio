import { useState } from 'react';
import profileImage from '../assets/profileBW2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './PrimaryHeader.css';
import { PrimaryNav } from './PrimaryNav.jsx'

export function PrimaryHeader() {
    const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);

    return (
        <>
            <header className="header--primary">
                <div className='header__profile-image-container'>
                    <img className='header__profile-image' src={profileImage} alt='A headshot of Scott Gilbert, the creator of this site' />
                </div>
                <div className='header__profile-info'>
                    <h3>Scott Gilbert</h3>
                    <h5>Web Developer / Sugarmaker / Cartographer</h5>
                    <h5 className='mobile-hidden'><a target="_blank" href="https://www.calebkenna.com/galleries/gallery/fine-art-prints/">Middlebury, VT <FontAwesomeIcon icon={faLocationDot}/></a></h5>
                </div>
                <FontAwesomeIcon icon={faBars} onClick={() => setIsMobileMenuDisplayed((prev) => !prev)} className="nav--icon menu-expand"/>
            </header>
            <hr className="header__hr" />
            <PrimaryNav isMobileMenuDisplayed={isMobileMenuDisplayed} setIsMobileMenuDisplayed={setIsMobileMenuDisplayed} />
            <hr className="header__hr mobile-hidden" />
        </>
    )
}