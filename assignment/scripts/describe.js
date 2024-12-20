// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// We make a variable named name and assign it the value to 'Dane'.
// we then check if name is equal to 'mary'.
//Since it is not, we executes the else block.
//The else block logs 'How do you do?,.
//
//
//
// OUTCOME:
//'How do you do?.

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?'
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
/// We create two variables, `secret` and `code`, and assign `code` the value `123`.
// We check if `code` is equal to `123`. Since it is, we set `secret` to `'super'` and double `code` (resulting in `246`).
// We then check if `code` is greater than `250`. Since it is not, `secret` remains `'super'`.
// Finally, we log the value of `secret`, which is `'super'`.
// OUTCOME:
// 'super'

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// We create three variables: `isStudent`, `age`, and `zip`, and initialize them to `true`, `34`, and `554 respectively
//  We check if `isStudent` is `true` and `zip` is greater than `80000`. Since both conditions are false, we move to the next `else if` block.
// The next `else if` block checks if `isStudent` is `false` or `age` is less than `30`. Since `isStudent` is `true`, this condition is false, so we move to the next `else if` block.
//The final else if block checks if isStudent is true.since it is, it logs 'welcome to prime!'
// OUTCOME:
//'Welcome to Prime!'

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// CODE:

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  
}
*/
//FIX- Swapped initial values of colorOne and colorTwo.
//FIX colorTwo should be set up to pupple too as instructions says both color to be set 'purple.
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //
/*let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// CODE:
// 
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/
//FIX -Replace the OR (||) operator with AND (&&) so that it match the description.
/*let temp = 40;
const time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// CODE:
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
//FIX- statement ask age is greater than minAge not min age less than age.
//Swapped logs
/*
if(age >= minAge) {
  console.log('entry');
} else {
  console.log('no entry');