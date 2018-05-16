

class Walk{
  constructor(location, distance){
    this.location = location;
    this.distance = distance;
    this.timestamp = new Date();
  }

  toString(){
    return `Doggy walked ${this.distance} steps to ${this.location} on ${this.timestamp.toLocaleDateString()}.`
  }
}

class Dog{
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.walks = [];
  }

  speak(){
    console.log(`Woof! My name is ${this.name}.`);
  }

  walk(location, distance){
    this.walks.push(new Walk(location, distance));
  }

  display_walks(){
 /*
 // ES6
    // this.walks.forEach(walk =>
    // console.log(`Doggy walked ${walk.distance} steps to ${walk.location}.`))
 */


 /*
 // ES5
    this.walks.forEach(function(walk) {
    console.log(`Doggy walked ${walk.distance} steps to ${walk.location}.`)
    })
 */

    // ES6
    for (const walk of this.walks) {
      console.log('' + walk);}
    }

    total_distance(){
      let total = 0
      for (const walk of this.walks) {
        total += walk.distance
      }
      console.log(`${this.name} walked a total of ${total} km.`)
    }


  }




x =  new Dog("spot", "Australia");
x.speak();
x.walk("Brisbane", 10);
x.walk("Byron Bay", 20);
x.walk("Sunshine Coast", 40);

j = "{"name":"spot","location":"Australia","walks":[{"location":"Brisbane","distance":10,"timestamp":"2018-05-16T02:33:09.415Z"},{"location":"Byron Bay","distance":20,"timestamp":"2018-05-16T02:33:09.415Z"},{"location":"Sunshine Coast","distance":40,"timestamp":"2018-05-16T02:33:09.415Z"}]}"
