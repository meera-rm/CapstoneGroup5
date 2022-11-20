import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/ScholarSheep.png';

import './NavBar.css';
const NavBar = () => {
	return (
		<nav className='nav'>
			<div>
				<img
					style={{ width: '50px', height: '50px', background: 'transparent' }}
					src={logo}
					alt='sheep reading a book'
				/>
			</div>
			<button>
				<Link
					style={{
						textDecoration: 'none',
						color: 'white',
						fontSize: '1rem',
						padding: '0 1rem',
					}}
					to='/'
				>
					Home
				</Link>
			</button>
			<button>
				<Link
					style={{
						textDecoration: 'none',
						color: 'white',
						fontSize: '1rem',
						padding: '0 1rem',
					}}
					to='/books'
				>
					Books
				</Link>
			</button>
			<button>
				<Link
					style={{
						textDecoration: 'none',
						color: 'white',
						fontSize: '1rem',
						padding: '0 1rem',
					}}
					to='/about'
				>
					About
				</Link>
			</button>
			<button>
				<Link
					style={{
						textDecoration: 'none',
						color: 'white',
						fontSize: '1rem',
						padding: '0 1rem',
					}}
					to='/contact'
				>
					Contact
				</Link>
			</button>
		</nav>
	);
};
export default NavBar;
