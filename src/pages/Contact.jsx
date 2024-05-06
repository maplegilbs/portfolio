//Components
import Loader from '../components/Loader';
//Hooks
import { useRef, useState } from 'react';
//Libraries
import ReCAPTCHA from 'react-google-recaptcha';
//Styles
import './Contact.css';

function ContactSubmittedMessage({ messageInfo }) {
    return (
        <div className='message__container'>
            <p>Thanks for the message {messageInfo.contactName.split(" ")[0]}.</p>
            <p>I will get back to you as soon as possible.</p>
            <p style={{alignSelf: 'flex-end', marginRight: '2.5rem'}}>-Scott</p>
        </div>
    )
}

function ContactFailedMessage() {
    return (
        <div className='message__container'>
            <p>We apologize but the message failed to be submitted.</p>
            <p>Please try and contact me directly at scott@sapmappers.com.</p>
        </div>
    )
}

export function Contact() {
    const [formData, setFormData] = useState({ contactName: null, contactEmail: null, contactMessage: null })
    const [submissionStatus, setSubmissionStatus] = useState(null) //null, pending, submitted, failed
    const recaptcha = useRef();

    function handleChange(e) {
        setFormData(prev => {
            let updatedFormData = {
                ...prev,
                [e.target.name]: e.target.value
            }
            return updatedFormData
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmissionStatus('pending')
        const recaptchaValue = recaptcha.current.getValue();
        if (!recaptchaValue) {
            alert("ReCaptcha not verified.");
            setSubmissionStatus(null)
        } else {
            let submittedFormData = {
                ...formData,
                recaptchaValue: recaptchaValue
            }
            let contactResponse = await fetch(`${process.env.REACT_APP_SERVER}/portfolio/contact`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submittedFormData)
            })
            if (contactResponse.status >= 200 && contactResponse.status < 300) {
                setTimeout(() => setSubmissionStatus('submitted'), 1500)
            }
            else {
                setTimeout(() => setSubmissionStatus('failed'), 1500)
            }
        }
    }


    return (
        <main>
            <h1 className='main__heading'>Get In Touch</h1>
            <hr className='main__heading__horizontal-rule' />
            {submissionStatus === 'failed' &&
                <ContactFailedMessage />
            }
            {submissionStatus === 'pending' &&
                <Loader loader_text={"Sending Message..."} />
            }
            {submissionStatus === 'submitted' &&
                <ContactSubmittedMessage messageInfo={formData} />
            }
            {!submissionStatus &&
                <>
                    <h4>Leave a message here or drop an email to <a href='mailto:scott@sapmappers.com'>scott@sapmappers.com</a> </h4>
                    <div className='contact-form-container'>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <label>Name: *<br /><input required name='contactName' type='text' onChange={handleChange} /></label>
                            <label>Email: *<br /><input required name='contactEmail' type='email' onChange={handleChange} /></label>
                            <label>Message: *<br /><textarea rows={25} required name='contactMessage' onChange={handleChange} /></label>
                            <ReCAPTCHA sitekey="6LcskNApAAAAAHQJUBVnxvT_27h21Py97fZXj1KY" ref={recaptcha} />
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </>
            }
        </main >
    )

}