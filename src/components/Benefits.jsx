import React from 'react';
import '../styles/Benefits.css';

// Import images
import nightStayImg from '../styles/nightstay.png';
import couplesImg from '../styles/couples.png';
import businessMeetingsImg from '../styles/meeting.png';
import frequentTravelImg from '../styles/frequent.png';

const benefitsData = [
    {
        title: "Night Stay",
        description: "One late night check-in with 12 hr slot and pay only for night",
        image: nightStayImg
    },
    {
        title: "Couples",
        description: "We welcome unmarried or married couples with best prices",
        image: couplesImg
    },
    {
        title: "Business Meetings",
        description: "Book fancy hotels for meetings and pay just for hours",
        image: businessMeetingsImg
    },
    {
        title: "Frequent Travel",
        description: "Save a lot when you pay for full day or 3, 6 and 12 hour packages",
        image: frequentTravelImg
    }
];

const Benefits = () => {
    return (
        <section className="benefits">
            <h2>Benefits of Hourly Stay</h2>
            <div className="benefits-grid">
                {benefitsData.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                        <div className="overlay">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
