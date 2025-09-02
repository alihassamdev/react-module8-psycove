import { Link } from 'react-router'
import { useState } from 'react';

import OffCanvasMenu from '../OffCanvasMenu/OffCanvasMenu';

import logo from '../../../assets/Logo.png'

import './Header.css'


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className="container">
            <div className='navbar'>
                <div className="navbar-left">
                    <img src={logo} alt="Psycove Logo" className="logo" />
                </div>

                <nav className="navbar-right">
                    <ul className="nav-links">
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                    <button className="menu-btn" onClick={() => setIsMenuOpen(true)}>
                        <span className="menu-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.125 3.23522H16.8643C17.1748 3.23522 17.4268 2.98322 17.4268 2.67272C17.4268 2.36222 17.1748 2.11022 16.8643 2.11022H1.125C0.8145 2.11022 0.5625 2.36222 0.5625 2.67272C0.5625 2.98322 0.8145 3.23522 1.125 3.23522Z" fill="#FDFBFF" />
                                <path d="M16.8644 8.4375H1.13379C0.823289 8.4375 0.571289 8.6895 0.571289 9C0.571289 9.3105 0.823289 9.5625 1.13379 9.5625H16.8644C17.1749 9.5625 17.4269 9.3105 17.4269 9C17.4269 8.6895 17.1749 8.4375 16.8644 8.4375Z" fill="#FDFBFF" />
                                <path d="M16.8751 14.7648H1.13379C0.823289 14.7648 0.571289 15.0168 0.571289 15.3273C0.571289 15.6378 0.823289 15.8898 1.13379 15.8898H16.8751C17.1856 15.8898 17.4376 15.6378 17.4376 15.3273C17.4376 15.0168 17.1856 14.7648 16.8751 14.7648Z" fill="#FDFBFF" />
                            </svg>
                        </span>
                    </button>
                </nav>
            </div>

            {/* Offcanvas menu */}
            <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        </header>
    )
}

export default Header