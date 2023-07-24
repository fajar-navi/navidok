import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs2 = () => {
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
        <>
            <form ref={form} onSubmit={sendEmail}>
                <label>Email</label>
                <input
                    type="email"
                    name="user_email"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                />

                <label>Number</label>
                <input
                    type="text"
                    name="user_number"
                    required
                    pattern="[0-9]+"
                    title="Please enter only numeric values"
                />

                <label>Message</label>
                <textarea name="user_message" />

                <input type="submit" value="Send" />
            </form>

            {showModal && (
                <div className="modal-bg">
                    <div className="modal">
                        <h4>Successfully Submitted!</h4>
                        <button onClick={closeModal} className="btn btn-dark">Close</button>
                    </div>
                </div>
            )}
        </>
    );
};