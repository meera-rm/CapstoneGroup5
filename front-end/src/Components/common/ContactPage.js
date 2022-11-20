import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <form
      action='https://getform.io/f/476beae0-dd8a-4759-ae31-71be7ecc9a8e'
      method='POST'
    >
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
    </form>
  );
};

export default ContactPage;
