import React,{useState} from 'react';
import './SubscriptionForm.scss';
import logoImage from '../../Components/asset/sheeplogo.png';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);


  const handleEmailChange = (event) => {
    if(!isValidEmail(event.target.value)){
        setError('Invalid email -Please enter a valid email address');
      } else {
        setError(null);
      }
     setEmail(event.target.value);
  }

  const isValidEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return !emailRegex.test(email)
  }


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
          value={email}
          onChange={handleEmailChange}/>
       
        <button className='emailSubscriptionForm__button'>Read More!</button>
      </div>
    
      {error && (
                <div className="emailSubscriptionForm__error">
                    {error}
                </div>
            )}
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
