
import { NavLink } from 'react-router-dom';
import './PrimaryNav.css';

export function PrimaryNav({isMobileMenuDisplayed, setIsMobileMenuDisplayed}) {

    return (
            <nav className="nav--top">
                <div className={`nav--top_menu-container ${isMobileMenuDisplayed ? 'menu--mobile' : '' }`}>
                    <menu className="nav--top_menu">
                        <li><NavLink to="/" onClick={()=> setIsMobileMenuDisplayed(false)}>About</NavLink></li>
                        <div className='vertical-divider'></div>
                        <li><NavLink to="/projects" onClick={()=> setIsMobileMenuDisplayed(false)}>Projects</NavLink></li>
                        <div className='vertical-divider'></div>
                        <li><NavLink to="/work" onClick={()=> setIsMobileMenuDisplayed(false)}>Work</NavLink></li>
                        <div className='vertical-divider'></div>
                        <li><NavLink to="/personal" onClick={()=> setIsMobileMenuDisplayed(false)}>Personal</NavLink></li>
                        <div className='vertical-divider'></div>
                        <li><NavLink to="/contact" onClick={()=> setIsMobileMenuDisplayed(false)}>Contact</NavLink></li>
                    </menu>
                </div>
            </nav>

    )
}