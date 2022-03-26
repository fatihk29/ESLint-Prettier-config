// prefer-const, no-const-assign
// bad
var a = 1;
var b = 2;

const z = 1;
z = 2;

// -----------------------------------
// no-var
// bad
var count = 1;
if (true) {
	count += 1;
}

// -----------------------------------
// no-new-object
// bad
const item = new Object();

// -----------------------------------
// object-shorthand
// bad
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// -----------------------------------
// quote-props
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// -----------------------------------
// no-prototype-builtins
// no// bad
console.log(object.hasOwnProperty(key));

// -----------------------------------
// prefer-object-spread
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// -----------------------------------
// no-array-constructor
// bad
const items = new Array();

// -----------------------------------
// bad
inbox.filter((msg) => {
	const { subject, author } = msg;
	if (subject === 'Mockingbird') {
		return author === 'Harper Lee';
	} else {
		return false;
	}
});



// -----------------------------------
// prefer-destructuring
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// -----------------------------------
// quotes
// bad
const name = "Capt. Janeway";


// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------