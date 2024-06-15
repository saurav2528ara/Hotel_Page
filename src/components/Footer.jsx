import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact-info">
                    <h3>Contact Us</h3>
                    <p>OOAK Hotel, DELTA I,<br/>Greater Noida,India</p>
                    <p>Email: info@hotel.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section navigation">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/list-hotel">Hotels</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section social-media">
                    <h3>Follow Us</h3>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} OOAK. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
