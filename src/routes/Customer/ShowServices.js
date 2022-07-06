import React from 'react';
import service1 from '../../assets/icons/service1.png';
// import '../../App.css'

const ShowServices = () => {
    return (
        <section>
            <div className='container'>
                <div id='service-card'>
                    <div className='p-5 dashboard-section'>
                        <div className='d-flex justify-content-between mb-3'>
                            <div>
                                <img
                                    src={service1}
                                    alt="service1"
                                    style={{
                                        height: '74px',
                                        width: '74px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div>
                                <span
                                    className="badge rounded-pill text-bg-danger"
                                    style={{fontWeight: '500'}}
                                >
                                    Pending
                                </span>
                            </div>
                        </div>
                        <div>
                            <h4>
                                Web & Mobile design
                            </h4>
                            <p className='text-muted'>
                                We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowServices;