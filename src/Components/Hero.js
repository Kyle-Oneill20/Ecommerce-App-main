import React from 'react';
import PropTypes from 'prop-types';
import commerce from './lib/commerce';


commerce.merchants.about().then((merchant) => console.log(merchant));



const Hero = ({ merchant }) => {
    return (
        <div className="hero">
            
            <div className="hero__text">
                <h1>
                    {merchant.business_name}
                </h1>
                <a href="#products" className="btn">Shop</a>
            </div>
        </div>
    )
}

export default Hero;


Hero.propTypes = {
    merchant: PropTypes.object,
};