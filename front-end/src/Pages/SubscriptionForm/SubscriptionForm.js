import React from 'react';
import './SubscriptionForm.scss';
import logoImage from '../../Components/asset/ScholarSheep.png';

const SubscriptionForm = () => {
  return (
    <div class='emailSubscriptionForm '>
      <div class='emailSubscriptionForm__image'>
        <img src={logoImage} alt='' style={{borderRadius:'50%'}}/>
      </div>

      <div class='emailSubscriptionForm__newsletter'>Email Newsletter</div>
      <div class='emailSubscriptionForm__header'>
        Be the first to get notified about our new services.
      </div>
      <div class='emailSubscriptionForm__content'>
        Tools to help your children become leaders. Subscribe to
        <a href='www' className='emailSubscriptionForm__content-link'>
          {' '}
          our newsletter for updates
        </a>{' '}
        - in your inbox. 🎁
      </div>
      <div class='emailSubscriptionForm__label'>
        <input
          class='emailSubscriptionForm__input'
          type='email'
          placeholder='Your email'
        />
        <button class='emailSubscriptionForm__button'>Read More!</button>
      </div>
      <div class='emailSubscriptionForm__smallText'>
        <i>
          Free
          <span class='emailSubscriptionForm__smallText-link'>
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
