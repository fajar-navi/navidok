import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bg_Contact from "../assets/img/bg_contact3.jpg";

export const ContactUs = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_kzrxhwj", "template_ephg62t", form.current, 'yWwUY3i5GnsQKzhIU')
            .then((result) => {
                console.log(result.text);
                setShowModal(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="contact" style={{ background: `url(${bg_Contact}) no-repeat center center`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="title"><span style={{ color: '#283891' }}>Help</span> Center</h3>
                    </div>
                </div>
                <div className="col-md-5">
                    <p>For technical queries or business queries, please feel free to email us</p>
                    <form ref={form} onSubmit={sendEmail} id="contactForm" name="sentMessage" >
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="from_email" className="sr-only control-label">Email</label>
                                <input
                                    id="email"
                                    name="user_email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    data-validation-required-message="Please enter email"
                                    className="form-control input-lg"
                                /><span className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="from_number" className="sr-only control-label">Contact Number</label>
                                <input
                                    type="text"
                                    name="user_number" id="number" className="form-control input-lg"
                                    required pattern="[0-9]+" title="Please enter only numeric values" placeholder="Contact Number"
                                />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="message" className="sr-only control-label">Message</label>
                                <textarea
                                    name="user_message"
                                    id="user_message"
                                    rows={2}
                                    placeholder="Message"
                                    required
                                    data-validation-required-message="Please enter a message."
                                    aria-invalid="false"
                                    className="form-control input-lg"
                                    defaultValue={""}
                                /><span className="help-block text-danger" />
                            </div>
                        </div>
                        <div id="success" />
                        <button type="submit" className="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>

            {showModal && (
                <div className="modal-bg">
                    <div className="modal">
                        <h4>Successfully Submitted!</h4>
                        <button onClick={closeModal} className="btn btn-dark">Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};