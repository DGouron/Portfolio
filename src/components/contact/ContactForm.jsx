import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SendContact from './SendContact';

function ContactForm() {
  const [sent, setSent] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);

    emailjs.sendForm('service_50pw5io', 'template_vlo4jqa', e.target, 'QFsy-l7_SRjQhgDes').then(
      () => {
        e.target.reset();
        delayedContactResponse('Message envoyé !');
      },
      (error) => {
        delayedContactResponse(
          'Une erreur est survenue, veuillez réessayer. Detail : ' + error.text,
        );
      },
    );
  };
  return (
    <article id='contact'>
      <form className='contact__form--container' ref={form} onSubmit={sendEmail}>
        <div className='contact__form--content'>
          <input type='text' id='name' name='name' required />
          <label htmlFor='name'>Nom et prénom</label>
        </div>
        <div className='contact__form--content'>
          <input type='email' id='email' name='email' required />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='contact__form--content'>
          <textarea id='message' name='message' required />
          <label htmlFor='message'>Message</label>
        </div>
        <SendContact sent={sent} />
      </form>
    </article>
  );

  function delayedContactResponse(message) {
    const contactResponse = document.getElementById('contact__response');
    contactResponse.textContent = message;
    setTimeout(() => {
      contactResponse.textContent = 'Envoyer';
      setSent(false);
    }, 3000);
  }
}

export default ContactForm;
