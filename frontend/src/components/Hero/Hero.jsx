import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/stylish.jpeg';

export const Hero = () => {
    return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>our</p>
                </div>
                <p>latest</p>
                <p>collection</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero" />
        </div>
    </div>
    )
}
