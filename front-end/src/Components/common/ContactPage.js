import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div>
      <div>
        <input id='name' name='name' type='text' placeholder='Your name...' />
      </div>
      <div>
        <input
          id='email'
          name='email'
          type='text'
          placeholder='Your email...'
        />
      </div>

      <div>
        <textarea
          rows='10'
          name='message'
          placeholder='Enter your message here'
        ></textarea>
      </div>
      <button>Share Your Thoughts</button>
    </div>
  );
};

export default ContactPage;
