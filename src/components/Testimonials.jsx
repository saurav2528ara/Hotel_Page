import React from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: 'Anshu Badsiwal',
        text: 'Very nice service hourly pay no question asked by hotel staff safe place for couple 👍 👍',
        rating: 5,
        backgroundImage: '../styles/couples.png'  // Add the background image path here
    },
    {
        name: 'Hotel Luxury',
        text: 'Exceptional service and very clean rooms. The staff was very friendly.',
        rating: 4,
        backgroundImage: '../styles/couples.png'  // Use appropriate image paths
    },
    {
        name: 'Budget Inn',
        text: 'Affordable and convenient for a quick rest. Highly recommend!',
        rating: 4,
        backgroundImage: '../styles/couples.png'
    },
    {
        name: 'City Lodge',
        text: 'Perfect location and great amenities. A comfortable stay overall.',
        rating: 5,
        backgroundImage: '../styles/couples.png'
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="testimonials">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide" style={{backgroundImage: `url(${testimonial.backgroundImage})`}}>
                        <div className="testimonial-content">
                            <p>{testimonial.text}</p>
                            <p>{'⭐'.repeat(testimonial.rating)}</p>
                            <h3>{testimonial.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;
