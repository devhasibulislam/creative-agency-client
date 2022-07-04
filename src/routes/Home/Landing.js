import React from 'react';
import Header from '../Shared/Header';
import Contact from './Contact';
import Banner from './Banner';
import Partners from './Partners';

const Landing = () => {
    return (
        <section>
            <Header />
            <Banner />
            <Partners />
            <Contact />
        </section>
    );
};

export default Landing;
