
let person = {
  first_name: 'Mukul',
  last_name: 'Latiyan',

  getFunction: function () {
    return (`The name of the person is ${person.first_name} ${person.last_name}`)
  },

  phone_number: {
    mobile: '12345',
    landline: '6789'
  }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);


//----------------------------------------------

// Using a constructor
function personFun(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
let person1 = new personFun('Mukul', 'Latiyan');
let person2 = new personFun('Rahul', 'Avasthi');

console.log("person1 :=> ", person1);
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);


//---------------------------------------------------

// Object.create() example a
// simple object with some properties
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`)
  }
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();


//-------------------------------------------------------------

// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return (`The name of the bike is ${this.name}.`)
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log("bike1:=>", bike1); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());


//----------------------------------------------------------------

// Defining class in a Traditional Way.
function VehicleFun(name, maker, engine) {
  this.name = name,
    this.maker = maker,
    this.engine = engine
};

VehicleFun.prototype.getDetails = function () {
  return 'The name of the bike is ' + this.name
}

let bike3 = new VehicleFun('Hayabusa', 'Suzuki', '1340cc');
let bike4 = new VehicleFun('Ninja', 'Kawasaki', '998cc');

console.log(bike3);
console.log(bike4.maker);
console.log(bike3.getDetails());

//------------------------------------------------------------------------------------------------

// Encapsulation example
class persons {
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}
	add_Address(add) {
		this.add = add;
	}
	getDetails() {
		console.log(`Name is ${this.name},
		Address is: ${this.add}`);
	}
}

let person3 = new persons('Mukul', 21);
person3.add_Address('Delhi');
person3.getDetails();
