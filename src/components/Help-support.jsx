
import React from 'react';
import '../styles/Help-support.css';

const HelpSupport = () => {
    return (
        <section className="help-supp">
        <div className="help-support-container">
            <h2>Help & Support</h2>
            <section>
                <h3>Frequently Asked Questions</h3>
                <div className="faq-item">
                    <h4>How do I make a reservation?</h4>
                    <p>You can make a reservation by visiting our booking page and selecting your desired dates and location.</p>
                </div>
                <div className="faq-item">
                    <h4>What is your cancellation policy?</h4>
                    <p>You can cancel your reservation up to 24 hours before your check-in date for a full refund.</p>
                </div>
            </section>
            <section>
                <h3>Contact Us</h3>
                <p>If you need further assistance, feel free to contact us at:</p>
                <ul>
                    <li>Email: support@brevstay.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                </ul>
            </section>
            <section>
                <h3>Support Form</h3>
                <form className="support-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
        </section>
    );
};

export default HelpSupport;

