import React from 'react';

function SendContact({ sent }) {
  return (
    <button
      type='submit'
      className='button__cta button__cta--small button__cta--flex'
      disabled={sent}
    >
      <p id='contact__response'>Envoyer</p>
      <img src='assets/icons/send_icon.svg' className='button__cta--icon' />
    </button>
  );
}

export default SendContact;
