import logoImage from '../asset/ScholarSheep.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-4'>
      <div className='bg-teal-500 pt-5 '>
        <div className='max-w-screen-lg px-4 sm:px-6 text-teal-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto'>
          <div className='flex justify-center mt-6 -pl-10'>
            <Link to='/'>
              <img
                src={logoImage}
                alt='logo'
                className=' w-14 h-16'
              />
            </Link>
            <h3 className='font-bold text-xl text-black-600 mt-2'>ScholarSheep</h3>
            
          </div>
          <div className='p-5'>
            <div className='text-sm uppercase text-black-600 font-bold'>
              Resources
            </div>
            <a className='my-3 block' href='/'>
              Home <span className='text-teal-600 text-xs p-1'></span>
            </a>
            <a className='my-3 block' href='/info'>
              How it Works<span className='text-teal-600 text-xs p-1'></span>
            </a>
          </div>
          <div className='p-5'>
            <div className='text-sm uppercase text-black-600 font-bold'>
              Support
            </div>
            <a className='my-3 block' href='/policy'>
              Privacy Policy <span className='text-teal-600 text-xs p-1'></span>
            </a>
            <a className='my-3 block' href='/about'>
              Our Team <span className='text-teal-600 text-xs p-1'></span>
            </a>
          </div>
          <div className='p-5'>
            <div className='text-sm uppercase text-black-600 font-bold'>
              Contact us
            </div>
            <a className='my-3 block' href='/#'>
              XX-XX,Floor 32 , New York ,NY{' '}
              <span className='text-teal-600 text-xs p-1'></span>
            </a>
            <a className='my-3 block' href='/#'>
              contact@scholarsheep.com{' '}
              <span className='text-teal-600 text-xs p-1'></span>
            </a>
          </div>
        </div>
      </div>

      <div className='bg-teal-500 pt-2'>
        <div
          className='flex pb-5 px-3 m-auto pt-5 border-t text-teal-800 text-sm flex-col
      max-w-screen-lg items-center'
        >
          <div className='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'></div>
          <div className='my-5'>
            © Copyright 2020. Scholar Sheep All Rights Reserved.
          </div>
        </div>
      </div>

      {/* <a href="https://componentity.com" target="_blank" class="block">
  <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png" class="w-48 mx-auto my-5"/>
    </a>*/}
    </div>
  );
};
export default Footer;
