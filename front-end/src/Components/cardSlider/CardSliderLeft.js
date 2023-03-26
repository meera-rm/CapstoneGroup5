
import { React, useState } from 'react';
import './CardSliderLeft.scss';


const CardSliderLeft = () => {
  const [active, setActive] = useState('slider1');

  const One = () => {
    return (
      <div class='cardSlider__text'>
         <h1 class='cardSlider__header'>Instill love of reading early to</h1>
         <h6>improve confidence and builds independence</h6>
      </div>
    );
  };

  const Two = () => {
    return (
      <div className='cardSlider__text'>
        <h1 class='cardSlider__header'>Instill love of reading early to</h1>
        <h6>help a child to develop imagination</h6>
      </div>
    );
  };
  const Three = () => {
    return (
      <div className='cardSlider__text'>
         <h1 class='cardSlider__header'>Instill love of reading early to</h1>
         <h6>expand a child's vocabulary</h6>
      </div>
    );
  };

  const Four = () => {
    return (
      <div className='cardSlider__text'>
        <h1 class='cardSlider__header'>Instill love of reading early to</h1>
        <h6>develop critical thinking</h6>
      </div>
    );
  };

  const Five = () => {
    return (
      <div className='cardSlider__text'>
        <h1 class='cardSlider__header'>Instill love of reading early to</h1>
        <h6>help to build socio-emotional skills</h6>
      </div>
    );
  };

  return (
    <div className='cardSlider'>
      <div className='cardSlider__content'>
        <div className='cardSlider__heading'>Benefits of reading</div>
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

