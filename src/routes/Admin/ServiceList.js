import React from 'react';

const ServiceList = () => {
    return (
        <section className='dashboard-section py-5'>
            <div className='container'>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead className='bg-white shadow rounded-pill'>
                            <tr className=''>
                                <th scope="col">#</th>
                                <th scope="col" className='ps-5'>Name</th>
                                <th scope="col" className='ps-5'>Email ID</th>
                                <th scope="col" className='ps-5'>Service</th>
                                <th
                                    scope="col"
                                    style={{ whiteSpace: 'nowrap' }}
                                    className='ps-5'
                                >Project Details</th>
                                <th scope="col" className='ps-5'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td
                                    style={{ whiteSpace: 'nowrap' }}
                                    className='ps-5'
                                >Sufi Ahmed Hamim</td>
                                <td
                                    style={{ whiteSpace: 'nowrap' }}
                                    className='ps-5'
                                >sufi01@gmail.com</td>
                                <td
                                    style={{ whiteSpace: 'nowrap' }}
                                    className='ps-5'
                                >Graphics designer</td>
                                <td className='ps-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id cum mollitia sed dolorum illo aliquam soluta numquam laudantium beatae?</td>
                                <td className='ps-5'>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;