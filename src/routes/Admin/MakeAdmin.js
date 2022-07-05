import React from 'react';

const MakeAdmin = () => {
    return (
        <section
            id='order-section'
            className='py-5 dashboard-section'
        >
            <div className='container'>
                <div>
                    <form>
                        <div className='d-flex flex-lg-row flex-column justify-content-between'>
                            <div className='w-75' id='make-admin-input'>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Existing email address...'
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                id='matched-btn'
                                className='btn btn-success align-self-lg-center'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;