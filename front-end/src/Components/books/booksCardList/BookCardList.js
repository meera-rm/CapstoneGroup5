import axios from 'axios';
import React, { useState, useEffect } from 'react';

import EmptyView from '../../emptyView/EmptyView';
import DigitalBookLinks from '../../digitalBookLinks/DigitalBookLinks';
import DisplayTools from '../../tools/SelectTools/DisplayTools';
import Slider from '../../slider/Slider';
import Explore from '../../exploreTopics/explore/Explore';
import BookLoader from '../../loader/BookLoader';
import BookShelf from '../../bookShelf/BookShelf';
import CardSlider from '../../cardSlider/CardSlider';

import './BookCardList.scss';
import homebackground from './homebackground.png';
// const API = process.env.REACT_APP_API_URL;

const BookCardList = () => {
  // const [bookData, setBookData] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
 

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`${API}/api/books`)
  //     .then((response) => {
  //       setBookData(response.data.payload);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(false);
  //     });
  // }, []);

  return (
    <div>
      {/* {error && <>{error.message}</>}
      {loading &&  <div><BookLoader/></div>} 
      {!loading && bookData.length===0 &&<EmptyView styleKey='bold' message='Page Not Found' />} */}

      <img src={homebackground}  alt=''/> 
     
      <CardSlider />
      <BookShelf />
      <Explore />
      <DisplayTools />
      <DigitalBookLinks />
      <Slider />
    </div>
  );
};

export default BookCardList;

