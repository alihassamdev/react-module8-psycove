import './Contact.css';

import ContactBanner from './ContactBanner/ContactBanner';
import { ContactForm } from './ContactForm/ContactForm';


const Contact = () => {
    return (
        <div className='container'>
            <ContactBanner />
            <ContactForm />

        </div>
    );
};

export default Contact;
