import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_50pw5io', 'template_vlo4jqa', e.target, 'QFsy-l7_SRjQhgDes').then(
      () => {
        e.target.reset();
        delayedContactResponse('Votre message a bien été envoyé !');
      },
      (error) => {
        delayedContactResponse(
          'Une erreur est survenue, veuillez réessayer. Detail : ' + error.text,
        );
      },
    );
  };
  return (
    <div id='contact'>
      <h2 className='subtitle'>Formulaire de contact</h2>
      <form className='form__wrapper contact__form' ref={form} onSubmit={sendEmail}>
        <label htmlFor='name'>
          Nom et prénom :
          <input type='text' id='name' name='name' required />
        </label>
        <label htmlFor='email'>
          Email :
          <input type='email' id='email' name='email' required />
        </label>

        <label htmlFor='message'>
          Message :
          <textarea id='message' name='message' required />
        </label>
        <button type='submit' className='cta__button'>
          <span id='contact__response'>Envoyer</span>
        </button>
      </form>
    </div>
  );

  function delayedContactResponse(message) {
    const contactResponse = document.getElementById('contact__response');
    contactResponse.textContent = message;
    setTimeout(() => {
      contactResponse.textContent = 'Envoyer';
    }, 3000);
  }
}

export default ContactForm;
