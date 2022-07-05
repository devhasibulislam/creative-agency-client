import React from 'react';

const Review = () => {
    return (
        <section
            id='order-section'
            className='py-5 dashboard-section'
        >
            <div className='container'>
                <div>
                    <form>
                        <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Your/Company name...'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Your email address...'
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                className="description-box"
                                placeholder='Product detail...'
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            id='matched-btn'
                            className='btn btn-success'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;