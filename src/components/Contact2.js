import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs2 = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_kzrxhwj","template_ephg62t", form.current, 'yWwUY3i5GnsQKzhIU')
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Email</label>
            <input type="email" name="user_email" />

            <label>Number</label>
            <input type="text" name="user_number" />

            <label>Message</label>
            <textarea name="user_message" />

            <input type="submit" value="Send" />
        </form>
    );
};