import { React, useState } from 'react';
import './CardSliderLeft.scss';

const CardSliderRight = () => {
  const [active, setActive] = useState('slider1');

  const One = () => {
    return (
      <div class='cardSlider__text'>
        <h1> A child who reads</h1>
        <h6>Will be an Adult who thinks</h6>
      </div>
    );
  };

  const Two = () => {
    return (
      <div class='cardSlider__text'>
        <h1>Find a Friend</h1>
        <h6>In your Book</h6>
      </div>
    );
  };
  const Three = () => {
    return (
      <div class='cardSlider__text'>
        <h1>Book is a dream</h1>
        <h6>You hold in your hands</h6>
      </div>
    );
  };

  const Four = () => {
    return (
      <div class='cardSlider__text'>
        <h1> Today A Reader </h1>
        <h6>Tomorrow A Leader</h6>
      </div>
    );
  };

  const Five = () => {
    return (
      <div class='cardSlider__text'>
        <h1>Think Before you Speak</h1>
        <h6>Read Before you think</h6>
      </div>
    );
  };

  return (
    <div className='cardSlider'>
      <div className='cardSlider__content'>
      <div className='cardSlider__heading'>Reading Quotes</div>
        <div>
          {active === 'slider1' && <One />}
          {active === 'slider2' && <Two />}
          {active === 'slider3' && <Three />}
          {active === 'slider4' && <Four />}
          {active === 'slider5' && <Five />}
        </div>
        <div className='cardSlider__options'>
          <button
            className={
              active === 'slider1'
                ? 'cardSlider__option cardSlider__option-active'
                : 'cardSlider__option'
            }
            value='slider1'
            onClick={(e) => setActive(e.target.value)}
          >
            <i class='fa-sharp fa-regular fa-circle-small'></i>
          </button>

          <button
            className={
              active === 'slider2'
                ? 'cardSlider__option cardSlider__option-active'
                : 'cardSlider__option'
            }
            value='slider2'
            onClick={(e) => setActive(e.target.value)}
          >
            <i class='fa-sharp fa-regular fa-circle-small'></i>
          </button>

          <button
            className={
              active === 'slider3'
                ? 'cardSlider__option cardSlider__option-active'
                : 'cardSlider__option'
            }
            value='slider3'
            onClick={(e) => setActive(e.target.value)}
          >
            <i class='fa-sharp fa-regular fa-circle-small'></i>
          </button>

          <button
            className={
              active === 'slider4'
                ? 'cardSlider__option cardSlider__option-active'
                : 'cardSlider__option'
            }
            value='slider4'
            onClick={(e) => setActive(e.target.value)}
          >
            {' '}
            <i class='fa-sharp fa-regular fa-circle-small'></i>
          </button>
          <button
            className={
              active === 'slider5'
                ? 'cardSlider__option cardSlider__option-active'
                : 'cardSlider__option'
            }
            value='slider5'
            onClick={(e) => setActive(e.target.value)}
          >
            {' '}
            <i class='fa-sharp fa-regular fa-circle-small'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSliderRight;
