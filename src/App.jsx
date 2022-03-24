import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	var z = 1;
	console.log();

	const a = 2
	a = 3;
	

	let t = 4;

	// eslint-disable-next-line no-plusplus
	t = ++t;

	const lukeSkywalker = 'Luke Skywalker';
/* eslint no-undef: off */
/* eslint-env browser */
	// bad
	const obj = {
  	lukeSkywalker: lukeSkywalker,
	};

	const ob2 = { ...obj };

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
