import { React, useState } from 'react';
import './CardSlider.scss';

import CardSliderLeft from './CardSliderLeft';
import CardSliderRight from './CardSliderRight';

const CardSlider = () => {


  return (
    <div class='cardSliderComponent'>
      <CardSliderLeft/>
      <CardSliderRight />
    </div>
  );
};

export default CardSlider;
