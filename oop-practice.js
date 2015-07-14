//change to
//animal --- monkey, rhino, pig

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + ' says hi');
}

Animal.prototype.feed = function () {
  console.log('NOM NOM NOM');
}

function Pig(name) {
  Animal.call(this, name)
}

Pig.prototype = new Animal();

Pig.prototype.rollinMud = function () {
  console.log(this.name + ' rolls in the mud');
}

function Rhino(name, horn) {
  this.horn = true
  Animal.call(this, name)
}

Rhino.prototype = new Animal();

Rhino.prototype.removeHorn = function () {
  this.horn = false;
  console.log(':(');
}

function Dog(name, breed) {
  this.breed = breed;
  Animal.call(this, name);
}

Dog.prototype = new Animal();

Dog.prototype.isPurebred = function () {
  if (this.breed === 'mutt') {
    return false;
  }
  else {
    return true;
  }
}

var pig1 = new Pig('Billy');
pig1.rollinMud();
pig1.speak();
pig1.feed();

var rhino1 = new Rhino('Tommy');
rhino1.speak();
rhino1.removeHorn();
rhino1.feed();

var dog1 = new Dog('Chronos', 'mutt');
dog1.speak();
dog1.isPurebred();
dog1.feed();
