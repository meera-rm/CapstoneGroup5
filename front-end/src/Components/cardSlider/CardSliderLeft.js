
import { React, useState } from 'react';
import './CardSliderLeft.scss';


const CardSliderLeft = () => {
  const [active, setActive] = useState('slider1');

  const One = () => {
    return (
      <div class='cardSlider__text'>
         <h1>Instill love of reading early to</h1>
        <h2>improve confidence and builds independence</h2>
      </div>
    );
  };

  const Two = () => {
    return (
      <div className='cardSlider__text'>
  <h1>Instill love of reading early to</h1>
        <h2>help a child to develop imagination</h2>
      </div>
    );
  };
  const Three = () => {
    return (
      <div className='cardSlider__text'>
         <h1>Instill love of reading early to</h1>
        <h2>expand a child's vocabulary</h2>
      </div>
    );
  };

  const Four = () => {
    return (
      <div className='cardSlider__text'>
     <h1>Instill love of reading early to</h1>
        <h2>develop critical thinking</h2>
      </div>
    );
  };

  const Five = () => {
    return (
      <div className='cardSlider__text'>
        <h1>Instill love of reading early to</h1>
        <h2>help to build socio-emotional skills</h2>
      </div>
    );
  };

  return (
    <div className='cardSlider'>
      <div className='cardSlider__content'>
        <h2>Benefits of reading</h2>
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
            <i className='fa-sharp fa-regular fa-circle-small'></i>
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
            <i className='fa-sharp fa-regular fa-circle-small'></i>
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
            <i className='fa-sharp fa-regular fa-circle-small'></i>
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
            <i className='fa-sharp fa-regular fa-circle-small'></i>
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
            <i className='fa-sharp fa-regular fa-circle-small'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSliderLeft;

