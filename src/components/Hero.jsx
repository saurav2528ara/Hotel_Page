import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const { handleSearch } = useOutletContext();
    const [guestType, setGuestType] = useState('hourly');
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [time, setTime] = useState('');

    const handleGuestTypeChange = (e) => {
        setGuestType(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSearchClick = () => {
        const searchParams = {
            guestType,
            city,
            startDate,
            endDate: guestType === 'daily' ? endDate : startDate,
            time: guestType === 'hourly' ? time : null
        };
        handleSearch(searchParams);
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hotels</h1>
                <p>#SHORTSTAY with India's best hotel Brand</p>

                <div className="toggle-buttons">
                    <label className={`toggle-button ${guestType === 'hourly' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            value="hourly"
                            checked={guestType === 'hourly'}
                            onChange={handleGuestTypeChange}
                        />
                        Hourly
                    </label>
                    <label className={`toggle-button ${guestType === 'daily' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            value="daily"
                            checked={guestType === 'daily'}
                            onChange={handleGuestTypeChange}
                        />
                        Daily
                    </label>
                </div>

                <div className="search-box">
                    <select value={city} onChange={handleCityChange}>
                        <option value="">Select City or Area</option>
                        <option value="Alpha 1, Greater Noida">Alpha 1, Greater Noida</option>
                        <option value="Ansal Golf Link 1, Greater Noida">Ansal Golf Link 1, Greater Noida</option>
                        <option value="Beta 1, Greater Noida">Beta 1, Greater Noida</option>
                        <option value="Botanical Garden">Botanical Garden</option>
                        <option value="Chhapraula">Chhapraula</option>
                        <option value="Greater Noida">Greater Noida</option>
                        <option value="Iteda, Greater Noida">Iteda, Greater Noida</option>
                        <option value="Khora Colony">Khora Colony</option>
                    </select>

                    <input type="date" value={startDate} onChange={handleStartDateChange} />

                    {guestType === 'hourly' && (
                        <input type="time" value={time} onChange={handleTimeChange} />
                    )}
                    {guestType === 'daily' && (
                        <input type="date" value={endDate} onChange={handleEndDateChange} />
                    )}
                    
                    <button onClick={handleSearchClick}>Search</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
