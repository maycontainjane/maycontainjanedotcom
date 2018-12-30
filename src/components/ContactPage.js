import React from "react";
import Header from './Header';

const ContactPage = () => (
    <div  id="/contact" className="contactpage">
        <Header title="Contact" subtitle="Get in touch."/>
        <div className="contactpage__body">
            <div className="contactpage__buttons">
                <button>email me</button>
                <button>linkedin</button>
                <button>github</button>
            </div>
            <div className="contactpage__form">
                <h3>contact form</h3>
                <form target="_blank" id="contact-form">
                    <input placeholder="youremail@coolemailsite.com" type="text"/>
                    <textarea rows="15" placeholder="What are you looking for?" form="contact-form"/>
                    <div className="contactpage__form-send"><button>send</button></div>
                </form>
            </div>
        </div>
    </div>
);

export default ContactPage;