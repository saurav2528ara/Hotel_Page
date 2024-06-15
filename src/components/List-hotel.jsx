


import React, { useState, useEffect } from 'react';
import '../styles/List-hotel.css';

const ListHotel = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call to fetch hotels
        setTimeout(() => {
            const fetchedHotels = [
                { id: 1, name: 'Hotel California', location: 'Los Angeles', rating: 4.5 },
                { id: 2, name: 'The Ritz-Carlton', location: 'New York', rating: 4.8 },
                { id: 3, name: 'The Plaza', location: 'New York', rating: 4.7 },
                { id: 4, name: 'The Beverly Hills Hotel', location: 'Beverly Hills', rating: 4.6 },
                { id: 5, name: 'The Peninsula', location: 'Chicago', rating: 4.9 },
            ];
            setHotels(fetchedHotels);
            setLoading(false);
        }, 1000); // Simulate a 1 second delay
    }, []);

    if (loading) {
        return <p>Loading hotels...</p>;
    }

    return (
        <section className="list-hot">
        <div className="list-hotel-container">
            <h2>List of Hotels</h2>
            <ul>
                {hotels.map(hotel => (
                    <li key={hotel.id}>
                        <h3>{hotel.name}</h3>
                        <p>Location: {hotel.location}</p>
                        <p>Rating: {hotel.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
        </section>
    );
};

export default ListHotel;

