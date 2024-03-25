import './PrimaryFooter.css'
import { Link } from 'react-router-dom'
import emailIcon from '../assets/icons/email.png'
import reactIcon from '../assets/icons/React-icon.svg.png'
import githubIcon from '../assets/icons/github-mark.png';
import stackOverflowIcon from '../assets/icons/stackoverflow-icon.svg';
import linkedinIcon from '../assets/icons/LI-In-Bug.png';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function PrimaryFooter() {

    return (
        <div className='footer-wrapper'>
            <hr className='footer__hr' />
            <footer className='footer--primary'>
                <div className='footer__section'>
                    <Link to="../contact">
                        <img className='footer__icon' src={emailIcon} alt='Email envelope icon'/> Get in touch</Link>
                </div>
                <div className='footer__section'>
                    Scott Gilbert 2024
                </div>
                <div className='footer__section'>
                    <a href="https://github.com" style={{color: 'black'}}>
                        <img className='footer__icon' src={githubIcon} alt='Github Icon' />
                    </a>
                    <a href="https://stackoverflow.com" style={{color: '#f48024'}}>
                        <img className='footer__icon' src={stackOverflowIcon} alt='Stack Overflow Icon' />
                    </a>
                    <a href='https://linkedin.com' style={{color: '#2867b2'}}>
                        <img className='footer__icon' src={linkedinIcon} alt='Linkedin Icon' />
                    </a>

                </div>

            </footer>
        </div>
    )
}