import React from 'react';
import frame from '../../assets/logos/Frame.png';

const Banner = () => {
    return (
        <section className='container'>
            <div id='banner-section'>
                <div
                    className='row gx-lg-5 gy-5'
                >
                    <div className='col-lg-5 col-12'>
                        <h2 id='banner-title'>
                            Let's Grow Your <br />
                            Brand To The <br />
                            Next Level
                        </h2>
                        <p className='text-muted' id='banner-desc'>
                            This is an inspiration series curated by Corebook° <br />
                            with a few brilliant examples by designers aspiring to protect their brand design integrity with a brand book.
                        </p>
                        <button
                            id='matched-btn'
                            className='btn btn-dark'
                        >
                            Hire
                        </button>
                    </div>
                    <div
                        className='col-lg-7 col-12'
                        style={{
                            backgroundImage: `url(${frame})`
                        }}
                        id='banner-img'
                    >
                        {/* <img
                        src={frame}
                        alt="frame"
                    /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
