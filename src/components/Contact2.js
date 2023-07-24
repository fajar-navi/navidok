import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs2 = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccessMessage('Email sent successfully!');
                    setShowModal(true);
                },
                (error) => {
                    console.log(error.text);
                    setSuccessMessage('Error sending email. Please try again.');
                    setShowModal(true);
                }
            );
    };

    const closeModal = () => {
        setShowModal(false);
        setSuccessMessage('');
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
                <input type="text" name="user_number" required pattern="[0-9]+" title="Please enter only numeric values" />

                <label>Message</label>
                <textarea name="user_message" />

                <input type="submit" value="Send" />
            </form>

            {showModal && (
                <div className="modal-bg">
                    <div className="modal">
                        <h4>{successMessage}</h4>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};