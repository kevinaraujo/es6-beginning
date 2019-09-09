'use strict';

var list = ['test', 34, { name: 'Guilherme' }];

for (var i in list) {
	//console.log(list[i]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _i = _step.value;

		console.log(_i);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}
/*var bob = {
	_name: 'Bob',
	_friends: [ 'Guilherme', 'Camila', 'Murilo'],
	printFriends: function printFriends(){
		var self = this;
		this._friends.forEach(function(f){
			return console.log(self._name + " knows " + f);
		});
	}
}

bob.printFriends();

var color = () => console.log('red');
color();

var bob = {
	_name: 'Bob',
	_friends: [ 'Guilherme', 'Camila', 'Murilo'],
	printFriends: function printFriends(){
		this._friends.forEach(f => 
			console.log(this._name + " knows " + f));
	}
}

bob.printFriends();*/
"use strict";
/*class Color {
	constructor(codeColor, nameColor){
		this.codeColor = codeColor;
		this.nameColor = nameColor;
	};

	getColor(){
		return { codeColor: this.codeColor, nameColor: this.nameColor };
	};
}

let red = new Color('red', 'RED');
console.log(red.getColor());*/
"use strict";
/*let name = 'Guilherme';
let age = 19;
let text = `
	name: ${name} 
	age: ${age}  
`;

console.log(text);*/
"use strict";
/*function teste(valueA, valueB) {
	console.log(arguments[0]);
	console.log(arguments[1]);
}

teste(10,20);

function test(valueA, valueB = 4){
	return valueA + valueB;
}

console.log(test(4));*/
"use strict";
