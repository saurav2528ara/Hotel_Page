import React from 'react';
import { useOutletContext } from 'react-router-dom';
import '../styles/Search.css';

const Search = () => {
    const { results } = useOutletContext();

    const areaList = ["Alpha 1, Greater Noida", "Ansal Golf Link 1, Greater Noida", "Beta -1, Greater Noida", "Botanical Garden", "Chhapraula", "Greater Noida", "Iteda, Greater Noida", "khora colony", "Knowledge Park III, Greater Noida", "Lakhnawali, Greater Noida", "Noida City Centre", "Pari Chowk, Greater Noida", "Sector 1", "Sector 104", "Sector 11", "Sector 116", "Sector 117", "Sector 12", "Sector 121", "Sector 122", "Sector 128", "Sector 144", "Sector 15", "Sector 18", "Sector 19", "Sector 20", "Sector 22", "Sector 27", "Sector 31", "Sector 34", "Sector 35", "Sector 44", "Sector 45", "Sector 46", "Sector 49", "Sector 5", "Sector 50", "Sector 51", "Sector 52", "Sector 53", "Sector 55", "Sector 56", "Sector 57", "Sector 58", "Sector 62", "Sector 63", "Sector 63A", "Sector 66", "Sector 70", "Sector 72", "Sector 82", "Sector 92", "Sector 163", "Zeta I, Greater Noida"];

    return (
        <div className="search-container">
            <div className="search-filter">
                <h2>Select Filters</h2>
                <button className="clear-all-btn">Clear All</button>

                <div className="filter-section">
                    <h3>Area Filter</h3>
                    <button className="reset-btn">Reset</button>
                    <input type="text" placeholder="Search Areas in Noida" />
                    <ul className="filter-list">
                        {areaList.map((area, index) => (
                            <li key={index} className="filter-list-item">
                                <input type="checkbox" id={`area-${index}`} required />
                                <label htmlFor={`area-${index}`}>{area}</label>
                            </li>
                        ))}
                    </ul>
                    <input type="hidden" required />
                </div>

                {/* Your Budget Section */}
                <div className="filter-section">
                    <h3>Your Budget</h3>
                    <button className="reset-btn">Reset</button>
                    <div>
                        <input type="checkbox" id="budget-3-hours" />
                        <label htmlFor="budget-3-hours">3 Hours</label>
                    </div>
                    <div>
                        <input type="checkbox" id="budget-6-hours" />
                        <label htmlFor="budget-6-hours">6 Hours</label>
                    </div>
                    <div>
                        <input type="checkbox" id="budget-12-hours" />
                        <label htmlFor="budget-12-hours">12 Hours</label>
                    </div>
                    <h4>Sort By Price</h4>
                    <div>
                        <input type="radio" name="sort-price" id="price-low-high" />
                        <label htmlFor="price-low-high">Low to High</label>
                    </div>
                    <div>
                        <input type="radio" name="sort-price" id="price-high-low" />
                        <label htmlFor="price-high-low">High to Low</label>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="filter-section">
                    <h3>Categories</h3>
                    <button className="reset-btn">Reset</button>
                    <div>
                        <input type="checkbox" id="category-couple-friendly" />
                        <label htmlFor="category-couple-friendly">Couple Friendly</label>
                    </div>
                    <div>
                        <input type="checkbox" id="category-pay-at-hotel" />
                        <label htmlFor="category-pay-at-hotel">Pay At Hotel</label>
                    </div>
                </div>

                {/* Sort By Section */}
                <div className="filter-section">
                    <h3>Sort By</h3>
                    <button className="reset-btn">Reset</button>
                    <div>
                        <input type="radio" name="sort" id="sort-popularity" />
                        <label htmlFor="sort-popularity">Popularity</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="sort-rating-4-5" />
                        <label htmlFor="sort-rating-4-5">Ratings 4.5 and Above</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="sort-rating-4" />
                        <label htmlFor="sort-rating-4">Ratings 4 and Above</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="sort-rating-3" />
                        <label htmlFor="sort-rating-3">Ratings 3 and Above</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="sort-rating-2" />
                        <label htmlFor="sort-rating-2">Ratings 2 and Above</label>
                    </div>
                </div>

                {/* Hotel Type Section */}
                <div className="filter-section">
                    <h3>Hotel Type</h3>
                    <button className="reset-btn">Reset</button>
                    <div>
                        <input type="checkbox" id="hotel-type-premium" />
                        <label htmlFor="hotel-type-premium">Premium</label>
                        <p className="hotel-type-description">Hotels with superior facilities and prime location, created for your comfort</p>
                    </div>
                    <div>
                        <input type="checkbox" id="hotel-type-luxury" />
                        <label htmlFor="hotel-type-luxury">Luxury</label>
                        <p className="hotel-type-description">Impeccable accommodation and elegant experience in renowned hotel brands.</p>
                    </div>
                </div>

            </div>
            <div className="search-results">
                {results.map(result => (
                    <div className="search-card" key={result.id}>
                        <img src={result.image} alt={result.name} className="search-card-image" />
                        <div className="search-card-details">
                            <h2 className="search-card-name">{result.name}</h2>
                            <p className="search-card-location">{result.location}</p>
                            <div className="search-card-info">
                                <span className="search-card-rating">{result.rating} ⭐</span>
                                <span className="search-card-price">{result.price}</span>
                            </div>
                            <div className="search-card-amenities">
                                {result.amenities && result.amenities.map((amenity, index) => (
                                    <span key={index} className="search-card-amenity">{amenity}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
