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
      <div className='shelf'>
        <Link to='/books/level'>
          <div class='bookshelf '>
            <div className='bookshelf__title'>Reading Level Book Shelf</div>
            <div class='book book-green'>
              <h2 className='heading2'>Shapes we Eat</h2>
            </div>
            <div class='book book-springer'>
              <h2 className='heading2'>Colored shirts</h2>
            </div>
            <div class='book book-green book-mobile'>
              <h2 className='heading2'>Want is not Need</h2>
            </div>
            <div class='book book-umber'>
              <h2 className='heading2'>In a Grocery Store</h2>
            </div>
            <div class='book book-blue book-mobile'>
              <h2 className='heading2'>Bear Facts Vol.2</h2>
            </div>
            <div class='book-tilted'>
              <div class='book book-umber'>
                <h2 className='heading2'>Coins</h2>
              </div>
            </div>
            <div class='book-tilted'>
              <div class='book book-springer'>
                <h2 className='heading2'>In a small town</h2>
              </div>
            </div>
           
          </div>
        </Link>

        <Link to='/books/casual'>
          <div class='bookshelf '>
            <div className='bookshelf__title'>Casual Reading Shelf</div>
            <div class='book book-green'>
              <h2>A Trip to Farm</h2>
            </div>
            <div class='book book-springer'>
              <h2 className='heading2'>Plants</h2>
            </div>
            <div class='book book-green book-mobile'>
              <h2 className='heading2'>Messy Mike</h2>
            </div>
            <div class='book book-umber book-mobile'>
              <h2>Danny and Bella</h2>
              <h3>Love to play</h3>
            </div>
            <div class='book book-blue'>
              <h2 className='heading2'>Bear Facts Vol.2</h2>
            </div>
            <div class='book-tilted'>
              <div class='book book-umber'>
                <h2 className='heading2'>Introducing HTML5</h2>
              </div>
            </div>
            <div class='book-tilted'>
              <div class='book book-springer'>
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
