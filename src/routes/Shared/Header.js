import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';

const Header = () => {
    return (
        <section className='container py-4'>
            <div id='header-section' className='d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center'>
                <div id='header-logo'>
                    <Link to={'/home'}>
                        <img
                            src={logo}
                            alt="creative agency"
                        />
                    </Link>
                </div>
                <div id='header-items' className='d-flex align-items-center'>
                    <Link
                        to='/admin'
                        title='admin dashboard'
                        className='header-item'
                    >
                        Dashboard
                    </Link>
                    <Link
                        to='/customer'
                        title='customer dashboard'
                        className='header-item'
                    >
                        Dashboard
                    </Link>
                    <button id='authenticate-btn' className='btn btn-dark'>
                        <Link
                            to='/login'
                        >
                            Login
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;
