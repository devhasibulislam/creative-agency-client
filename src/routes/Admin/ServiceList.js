import React from 'react';

const ServiceList = () => {
    return (
        <section className='dashboard-section py-5'>
            <div className='container'>
                <div className='table-responsive'>
                    <table class="table table-hover">
                        <thead className='bg-white shadow rounded-pill'>
                            <tr className=''>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th
                                    scope="col"
                                    style={{ whiteSpace: 'nowrap' }}
                                >Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td
                                    style={{ whiteSpace: 'nowrap' }}
                                >Sufi Ahmed Hamim</td>
                                <td
                                    style={{ whiteSpace: 'nowrap' }}
                                >sufi01@gmail.com</td>
                                <td
                                    style={{ whiteSpace: 'nowrap' }}
                                >Graphics designer</td>
                                <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id cum mollitia sed dolorum illo aliquam soluta numquam laudantium beatae?</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;