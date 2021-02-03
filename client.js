//console.log('Here are all the available people:', people);

// we need a loop to cycle through the value of githubusername and use a template literal to insert that into a single line of code
// change people array to gitName variable
let gitName = people;

// for (user of gitName) {
//   console.log('this is the user', user.githubUsername);
// }

for (let i = 0; i < gitName.length; i++) {
  console.log('I am in the for loop', gitName[i].githubUsername);
}
