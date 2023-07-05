import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import bg_Contact from "../assets/img/bg_contact3.jpg";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kzrxhwj', 'template_ephg62t', form.current, 'yWwUY3i5GnsQKzhIU')

            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <section id="contact" style={{ background: `url(${bg_Contact}) no-repeat center center`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="title"><span style={{color: '#283891'}}>Help</span> Center</h3></div>
                </div>
                <div className="col-md-5">
                    <p>For technical quarries or business quarries, please feel free to email us</p>
                    <form id="contactForm" name="sentMessage" noValidate ref={form} onSubmit={sendEmail}>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="email" className="sr-only control-label">Email</label>
                                <input id="from_email" type="email" placeholder="Email" required data-validation-required-message="Please enter email" className="form-control input-lg" /><span className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="number" className="sr-only control-label">Contact Number</label>
                                <input id="from_number" type="number" placeholder="Contact Number" required data-validation-required-message="Please enter contact number" className="form-control input-lg" /><span className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="message" className="sr-only control-label">Message</label>
                                <textarea id="message" rows={2} placeholder="Message" required data-validation-required-message="Please enter a message." aria-invalid="false" className="form-control input-lg" defaultValue={""} /><span className="help-block text-danger" />
                            </div>
                        </div>
                        <div id="success" />
                        <button type="submit" className="btn btn-dark">Send</button>
                    </form>




                </div>
            </div>
        </section>


    );
};
