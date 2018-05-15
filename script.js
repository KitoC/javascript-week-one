// function fullState(abbreviation){
//   let abbr = abbreviation.toUpperCase();
//   // return `Runnning full state ${abbreviation}`;
//   if (abbr === 'NSW'){
//     return 'New South Wales';
//   }
//   else if (abbr === 'QLD'){
//     return 'Queensland';
//   }
//   else if (abbr === 'VIC'){
//     return 'Vitoria';
//   }
//   else if
//   (abbr === 'WA'){
//     return 'Western Australia';
//   }
//   else if
//   (abbr === 'NT'){
//     return 'Norther Territory';
//   }
//   else if
//   (abbr === 'ACT'){
//     return 'Australian Capital Territory';
//   }
//   else if
//   (abbr === 'TAS'){
//     return 'Tasmania'
//   }
//   else if
//   (abbr === 'SA'){
//     return 'Southern Australia';
//   }
//   else{
//     return 'That isnt a state you idiot!';
//   }
// }


const states = {
  NSW: 'New South Whales',
  QLD: 'Queensland',
  SA: 'Southern AUstralia',
  WA: 'Western Australia',
  NT: 'Northern Territory',
  TAS: 'Tasmania',
  VIC: 'Victoria'
}

assign_state = prompt("Please enter a state").toUpperCase();
const state = states[assign_state];
alert(state);
console.log(state)
