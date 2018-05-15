
class Walk{
  constructor(to, distance, from){
    this.distance = distance
    this.to = to
    this.from = from
    this.timestamp = new Date()
  }
}

class Dog{
  constructor(name, location){
    this.name = name
    this.location = location
    this.walks_log = []
    this.overall_walks = 0
  }

  speak(){
    console.log(`Woof! My name is ${this.name}`);
  }

  walk(destination, distance){
    let timestamp = new Date();
    console.log(`${this.name} took ${distance} step towards ${destination} on ${timestamp}`);

    this.walks_log.push(new Walk(distance, destination, this.location))
    this.location = destination
  }


  display_walks(){
    for(const walk of this.walks_log){
      console.log(walk)
      return(`${this.name} walked ${walk.distance} steps from ${walk.from} to ${walk.to}`)
    }
  }

}

// x = new Dog('Larry', 'Brisbane')
// x.walk('Sunnycoast', 20)
// x.walk('Byron Bay', 40)

document.getElementById("new_dog").onclick = function(){
  x = new Dog(prompt('Enter a name'), prompt('Enter a location'))

  let dog_name = document.createElement('h4');
  dog_name.textContent = ` Dog's name: ${x.name}`;
  dog_name.setAttribute('class', 'dog_name');
  document.body.appendChild(dog_name);

  let dog_location = document.createElement('h4');
  dog_location.textContent = ` Dog's name: ${x.location}`;
  dog_location.setAttribute('class', 'dog_location');
  document.body.appendChild(dog_location);
}

document.getElementById("dog_walk").onclick = function(){
  x.walk(prompt('Enter a destination'), prompt('Enter a distance'));

  let dog_walk = document.createElement('li');
  dog_walk.textContent = x.display_walks();
  dog_walk.setAttribute('class', 'display_walks');
  document.body.appendChild(dog_walk);

}
