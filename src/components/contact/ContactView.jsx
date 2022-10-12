import React from 'react';
import ContactForm from './ContactForm';

function ContactView() {
  return (
    <section id='contact'>
      <h2 className='contactview__section--title'>Me contacter</h2>
      <ContactForm />
    </section>
  );
}

export default ContactView;
