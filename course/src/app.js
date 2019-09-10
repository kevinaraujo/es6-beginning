let color = new Set();
color.add('blue').add('green').add('blue');

if(color.size === 2 && color.has('blue')){
	for(let key of color.values()) {
		console.log(`
			key: ${key}
		`);
	}
}