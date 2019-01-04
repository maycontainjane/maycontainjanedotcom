import React from "react";
import Header from './Header';

class ContactPage extends React.Component {
    /* When form is submitted, "words" is sent as email to "email" with no page reload */
    formSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value.trim();
        const words = e.target.elements.words.value.trim();
        console.log("email from", email, "that says", words);
    }

    render = () => (
        <div id="/contact" className="contactpage">
            <Header subtitle={<div>Get in <span>touch</span>.</div>} title="Contact" />
            <div className="contactpage__body">
                <div className="contactpage__buttons">
                    <a target="_blank" href="mailto:jane@maycontainjane.com"><button>email me</button></a>
                    <a target="_blank" href="https://www.linkedin.com/in/janekagan/"><button>linkedin</button></a>
                    <a target="_blank" href="https://github.com/maycontainjane"><button>github</button></a>
                </div>
                <div className="contactpage__form">
                    <h3>contact form</h3>
                    <form target="_blank" id="contact-form" onSubmit={this.formSubmit}>
                        <input name="email" placeholder="youremail@coolemailsite.com" type="text"/>
                        <textarea name="words" rows="15" placeholder="What are you looking for?" form="contact-form"/>
                        <div className="contactpage__form-send"><button>send</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;