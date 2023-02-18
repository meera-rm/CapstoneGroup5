import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import EmptyView from '../../emptyView/EmptyView';
import DigitalBookLinks from '../../digitalBookLinks/DigitalBookLinks';
import DisplayTools from '../../tools/SelectTools/DisplayTools';
import Slider from '../../slider/Slider';
import Explore from '../../exploreTopics/explore/Explore';
import BookCard from '../bookCard/BookCard';
// import './BookCardList.scss';
import { FaListOl } from 'react-icons/fa';
import BookLoader from '../../loader/BookLoader';
import BookShelf from '../../bookShelf/BookShelf';
import CardSlider from '../../cardSlider/CardSlider';
import banner from './bookbanner.png';
import homebackground from './homebackground.png';
const API = process.env.REACT_APP_API_URL;

const BookCardList = () => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/api/books`)
      .then((response) => {
        setBookData(response.data.payload);
        setLoading(false);
      })
      .catch((error) => {
        setError(false);
      });
  }, []);

  return (
    <div>
      {error && <>{error.message}</>}
      {/* {loading &&  <div><BookLoader/></div>} */}
      {/* {!loading && <EmptyView styleKey='bold' message='Page Not Found' />} */}

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

