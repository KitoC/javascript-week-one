



// const dog = {
//   init: function(name){
//     this.name = name;
//   },
//   speak: function(){
//     console.log('Woof my name is ' + this.name);
//   }
// }
// dog.init('Rover');
// dog.speak();



// function Dog(name, location ){
//   this.name = name;
//   this.location = location;
// }
//
// Dog.prototype.speak = function(){
//   console.log(`Woof! my name is ${this.name}`);
//   console.log(`My location is ${this.location}`);
// }
//
//
// Dog.prototype.setLocation = function(){
//   this.location = prompt('location');
// }
//

class Dog {
  constructor(name, location){
    this.name = prompt('name');
    this.location = prompt('location');
  }


  speak() {
    console.log(`Woof! my name is ${this.name}`);
    console.log(`My location is ${this.location}`);
  }
}
