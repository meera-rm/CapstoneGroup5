import React from 'react';
import './SubscriptionForm.scss';
import logoImage from '../../Components/asset/sheeplogo.png';

const SubscriptionForm = () => {
  return (
    <div className='emailSubscriptionForm '>
      <div className='emailSubscriptionForm__image'>
        <img src={logoImage} alt='' style={{borderRadius:'50%'}}/>
      </div>

      <div className='emailSubscriptionForm__newsletter'>Email Newsletter</div>
      <div className='emailSubscriptionForm__header'>
        Be the first to get notified about our new services.
      </div>
      <div className='emailSubscriptionForm__content'>
        Tools to help your children become leaders. Subscribe to
        <a href='www' className='emailSubscriptionForm__content-link'>
          {' '}
          our newsletter for updates
        </a>{' '}
        - in your inbox. 🎁
      </div>
      <div className='emailSubscriptionForm__label'>
        <input
          className='emailSubscriptionForm__input'
          type='email'
          placeholder='Your email'
        />
        <button className='emailSubscriptionForm__button'>Read More!</button>
      </div>
      <div className='emailSubscriptionForm__smallText'>
        <i>
          Free
          <span className='emailSubscriptionForm__smallText-link'>
            {' '}
            Education for all
          </span>
          .Trusted by parents and teachers
        </i>
      </div>
    </div>
  );
};
export default SubscriptionForm;
