import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cities.css';

const cities = [
    { name: 'Mumbai', image: require('../styles/Mumbai.jpg') },
    { name: 'Delhi', image: require('../styles/Delhi.jpg') },
    { name: 'Kolkata', image: require('../styles/Kolkata.jpg') },
    { name: 'Bangalore', image: require('../styles/Bangalore.jpg') },
    { name: 'Hyderabad', image: require('../styles/Hyderabad.jpg') },
    { name: 'Chennai', image: require('../styles/Chennai.jpg') },
    { name: 'Noida', image: require('../styles/Noida.jpg') },
    { name: 'Gurgaon', image: require('../styles/Gurgaon.jpg') },
    { name: 'Pune', image: require('../styles/Pune.jpg') }
];

const Cities = () => {
    return (
        <section className="cities">
            <h2>Explore By Cities</h2>
            <div className="cities-grid">
                {cities.map((city, index) => (
                    <Link to={`/city/${city.name.toLowerCase()}`} key={index} className="city-card">
                        <img src={city.image} alt={city.name} />
                        <h3>{city.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Cities;
