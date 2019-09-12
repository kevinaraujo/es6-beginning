'use strict';

var pos = 'hello'.indexOf('ll');

console.log(pos);

var pos = 'hello'.startsWith('hello', 0);
var pos = 'hello'.endsWith('llo', 3);
var inc = 'hello'.includes('eall');

console.log(inc);
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
/*var US = new Intl.DateTimeFormat('en-US');
var BR = new Intl.DateTimeFormat('pt-BR');

console.log(US.format(new Date('2016-01-10')));
console.log(BR.format(new Date('2016-01-10')));
*/
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
/*let color = new Set();
color.add('blue').add('green').add('blue');

if(color.size === 2 && color.has('blue')){
	for(let key of color.values()) {
		console.log(`
			key: ${key}
		`);
	}
}*/
"use strict";
/*var number = 123456.34
var En = new Intl.NumberFormat('en-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);

console.log(En);
console.log(De);*/
"use strict";
/*var USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
var BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'});

console.log(USD.format(1910109291.40));
console.log(BRL.format(1910109291.40));*/
"use strict";
