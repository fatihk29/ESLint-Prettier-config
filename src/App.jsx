import React from 'react';
import logo from './logo.svg';
import './App.css';
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

function App() {
	var z = 1;

	const item = new Object()

	const obj = {
		lukeSkywalker: lukeSkywalker,
	};

	const bad = {
		'foo': 3,
		'bar': 4,
		'data-blah': 5,
	};

	const original = { a: 1, b: 2 };
	const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

	// no-array-constructor
	const items = new Array();

	// 5.2 prefer-destructuring
	const arr = [1, 2, 3, 4];

	// bad
	const first = arr[0];
	const second = arr[1];

	console.log(first, second);

	const name = "Capt. Janeway";

	// bad
	function sayHi(name) {
  	return 'How are you, ' + name + '?';
	}

	// bad
	if (currentUser) {
  	function test() {
    	console.log('Nope.');
  	}
	};

	// bad
	const add = new Function('a', 'b', 'return a + b');

	console.log(add(2, 3));

	const subtract = Function('a', 'b', 'return a - b');

	console.log(subtract(2, 3));

	[1, 2, 3].map(function (x) {
		const y = x + 1;
		return x * y;
	});

	// bad
	class Foo {
		bar() { return 1; }
		bar() { return 2; }
	};

	superPower = new SuperPower();

	const array = [1, 2, 3];
	let num = 1;
	num++;
	--num;

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
