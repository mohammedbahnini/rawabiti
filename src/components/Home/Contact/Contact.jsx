import React from 'react'
import ContactForm from './ContactForm'
import ContactDescription from './ContactDescription'

function Contact() {
    return (
        <div className="contact bg-gray-100">
            <div className="container pt-8 pb-12">
                <ContactDescription />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
