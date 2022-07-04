import React from 'react';
import Footer from '../Shared/Footer';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const handleSentMessage = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            emailjs.sendForm("service_dozo57k", "template_cn03kep", event.target, "zVtSQ7zi_vZn2K-mv")
                .then((result) => {
                    console.log(result.text);
                    event.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        }
    };
    return (
        <section id='contact-section'>
            <div className='container'>
                <div className='row gx-lg-5'>
                    <div
                        className='col-lg-6 col-12'
                    >
                        <h3>
                            Let us handle your project, professionally.
                        </h3>
                        <p>
                            With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                        </p>
                    </div>
                    <div
                        className='col-lg-6 col-12'
                    >
                        <form onSubmit={handleSentMessage}>
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
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='Your/Company name...'
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder='Your message...'
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                id='matched-btn'
                                className='btn btn-dark'
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Contact;
