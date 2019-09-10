'use strict';

var color = new Set();
color.add('blue').add('green').add('blue');

if (color.size === 2 && color.has('blue')) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = color.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			console.log('\n\t\t\tkey: ' + key + '\n\t\t');
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
/*var list = ['test', 34, {name: 'Guilherme'}];

for (var i in liast){
	//console.log(list[i]);
}

for(let i of list){
	console.log(i);
}*/
"use strict";
/*class People{
	constructor(name,email,phone){
		this.name = name;
		this.email = email;
		this.phone = phone;
	}

	toString(){
		return ` 
			Name: ${this.name}
			Email: ${this.email}
			Phone: ${this.phone}
		`;
	}
}


class Client extends People {
	constructor(id, name,email,phone){
		super(name,email,phone);
		this.id = id;
	}

	toString(){
		return `
			id: ${this.id}
			${super.toString()}
		`;
	}
}

let test = new Client(1, 'Kevin Araújo', 'kfa_34@hotmail.com', '1111-1111');
console.log(test.toString());*/
"use strict";
