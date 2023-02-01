import React from 'react';
import './PdfBookLinks.scss'

import WilBooksLink from './WilBooksLink';
import LovingToReadLink from './LovingToReadLink';
import GetEpicLink from './GetEpicLink';
// import { ExternalLink } from 'react-external-link';

const pdfBookLinks = () => (
  <div>
 <div class="gradedReadersList">
  <div class="gradedReadersList__title">
     Free Online Graded Reading LeveL Books
  </div>
  <div class="gradedReadersList__container">
     <WilBooksLink/>
     <LovingToReadLink/>
     <GetEpicLink/>
  </div>
</div>

  </div>
);

export default pdfBookLinks;

// https://www.easyteacherworksheets.com/langarts/analogies.html