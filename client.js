console.log('Here are all the available people:', people);

//start jQuery
$(document).ready(onReady);

function onReady() {
  console.log('jQuery Jonah Jameson');
  /**
   * we need a loop to cycle through the value of githubusername and use a template literal to insert that into a single line of code
   * 1. create a variable name for the array
   * 2. create a loop that goes through the array of people
   * 3. grab the github Username from the array
   * 4. match the value for
   */

  // using a for of loop to go through the list of objects
  // then grab the name {gitUser.name} and their githubUsername {gitUser.githubUsername}
  // append the values to the dom using Jquery .append() method
  for (gitUser of people) {
    // using the $(this) method to append to the body
    // using the link from the README.md I will append the correct values into the link to print out the full list on employees
    $('body').append(`
    <div>
      <img src="https://github.com/${gitUser.githubUsername}.png?size=250" alt="Profile image of ${gitUser.name}">
    </div>
  `);
  }

  // for (let i = 0; i < gitName.length; i++) {
  //   console.log('I am in the for loop', gitName[i].githubUsername);
  // }
}
