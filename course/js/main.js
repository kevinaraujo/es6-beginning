"use strict";

/*function teste(valueA, valueB) {
	console.log(arguments[0]);
	console.log(arguments[1]);
}*/

teste(10, 20);

function test(valueA) {
	var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

	return valueA + valueB;
}

console.log(test(4));
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
