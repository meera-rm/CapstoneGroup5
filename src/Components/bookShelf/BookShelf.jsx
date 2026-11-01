import React from 'react';
import { Link } from 'react-router-dom';
import './BookShelf.scss';
import headerText from './readerscornertext.png';
const BookShelf = () => {
  return (
    <div>
      <img
        src={headerText}
        //  className='header'
        style={{
          width: '400px',
          height: '150px',
          textAlign: 'center',
          margin: '0 auto',
        }}
        alt=''
      />
      <div className='bookshelf'>
        <Link to='/books/level'>
          <div className='bookshelfContainer'>
            <div className='bookshelf__title'>Reading Level Book Shelf</div>
            <div className='bookshelfbook bookshelfbook-green'>
              <h2 className='heading2'>Shapes we Eat</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-springer'>
              <h2 className='heading2'>Colored shirts</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-green '>
              <h2 className='heading2'>Want is not Need</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-umber'>
              <h2 className='heading2'>In a Grocery Store</h2>
            </div>
           {/* <div className='bookshelfbook-tilted'>  */}
            <div className='bookshelfbook bookshelfbook-purple'>
              <h2 className='heading2'>Solids are interesting</h2>
            </div>
            {/* </div> */}
            <div className='bookshelfbook bookshelfbook-orange bookshelfbook-mobile'>
              <h2 className='heading2'>Introducing Arkansas</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-blue bookshelfbook-mobile'>
              <h2 className='heading2'>Bear Facts Vol.2</h2>
            </div>
            <div className='bookshelfbook-tilted'>
              <div className='bookshelfbook bookshelfbook-umber'>
                <h2 className='heading2'>Coins</h2>
              </div>
            </div>
            <div className='bookshelfbook-tilted'>
              <div className='bookshelfbook bookshelfbook-springer'>
                <h2 className='heading2'>In a small town</h2>
              </div>
            </div>
          </div>
        </Link>

        <Link to='/books/casual'>
          <div className='bookshelfContainer'>
            <div className='bookshelf__title'>Casual Reading Shelf</div>
            <div className='bookshelfbook bookshelfbook-green'>
              <h2>A Trip to Farm</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-springer'>
              <h2 className='heading2'>Plants</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-green' >
              <h2 className='heading2'>Messy Mike</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-umber bookshelfbook-mobile'>
              <h2>Danny and Bella</h2>
              <h3>Love to play</h3>
            </div>
            <div className='bookshelfbook bookshelfbook-blue'>
              <h2 className='heading2'>Bear Facts Vol.2</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-imperial bookshelfbook-mobile'>
              <h2 className='heading2'>Looking At Reptiles</h2>
            </div>
            <div className='bookshelfbook bookshelfbook-deeppink'>
              <h2 className='heading2'>What kind of animal do you see?</h2>
            </div>
            <div className='bookshelfbook-tilted'>
              <div className='bookshelfbook bookshelfbook-umber'>
                <h2 className='heading2'>Introducing HTML5</h2>
              </div>
            </div>
            <div className='bookshelfbook-tilted'>
              <div className='bookshelfbook bookshelfbook-springer'>
                <h2 className='heading2'>CSS For Dummies</h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookShelf;
