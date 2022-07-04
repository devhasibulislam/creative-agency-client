import React from 'react';
import Header from '../Shared/Header';
import Contact from './Contact';
import banner from '../../assets/banner-bg.png';
import Banner from './Banner';

const Landing = () => {
    return (
        <section
            id='landing-section'
            style={{
                backgroundImage: `url(${banner})`
            }}
        >
            <Header />
            <Banner />
            <Contact />
        </section>
    );
};

export default Landing;
