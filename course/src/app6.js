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