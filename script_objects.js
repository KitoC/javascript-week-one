// Challenge
// Assign a new empty object to a variable called me
const me = {
  age: 28,
  location: "Brisbane",
  name: "Kito"
}

// On the next line, add one key 'age' and set its value to your age

// On the next line, add one key 'current location' and set its value to your current location

// Use console.log to display the age and current location on screen
console.log(me)


// Use code to add an array of hobbies to your me object
me['hobbies'] = [
  'surfing',
  'rock climbing',
  'scuba diving',
  'drawing'
]
console.log(me)


// Use code to delete your age key
delete me.age
console.log(me)


// Iterate through me.hobbies and log each hobby to the screen
for (let i = 0; i < me['hobbies'].length; i++){
  alert(me.hobbies[i]);
  console.log(me.hobbies[i]);
}

// Beast Mode
// Using code:


// Add another item to the end of the hobbies array
me.hobbies.push('Toboggoning');
console.log(me.hobbies);

// Delete the first item in the hobbies array
me.hobbies.shift();
console.log(me.hobbies);

// Add a mother key, set its value to an empty object
me['mother'] = {};
console.log(me);


// Add name, age and location keys to the mother object
me['mother'] = {
  name: "Ayla",
  age: 54,
  location: 'New Zealand'
}
console.log(me);


// Add a print_details function to the me object.
me.print_details = function(){
  let hobbies_list = ''

  for(const hobby of me.hobbies){
    hobbies_list += `${hobby}, `;

  }

  alert(`Hi, My name is ${me.name}. I live in ${me.location}. I am ${me.age} years old. My mother is ${me.mother.name} and she is currently in ${me.mother.location}. She is ${me.mother.age} years old. In really enjoy ${hobbies_list}`);

}
me.print_details();
// Call the function to log some details about yourself. I.e. me.print_details() should work

// Note the difference between calling me.print_details and me.print_details()

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

console.log(`${brisbane_campus.street}, ${brisbane_campus.state}`)

delete brisbane_campus.state

console.log(`${brisbane_campus.street}, ${brisbane_campus.state}`)
