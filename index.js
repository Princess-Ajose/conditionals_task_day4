`use strict`

// Exercise: Levels;

// 1.

let now = new Date;
let year = now.getFullYear();
let ageOfUser = prompt('Enter your age');

let remainder = 18 - +ageOfUser;

if (ageOfUser < 18) {
  console.log(`'oops', you have to wait for ${remainder} before you can Drive`);

} else {
  console.log('You are old enough to Drive');

};


// 2. comparing two ages

const myAge = prompt('Enter your Age here');
const olderAge = prompt('Enter an older Age');

let remainder2 = olderAge - myAge;

if (myAge < olderAge) {
  console.log(`You are ${remainder2} years older than me`);
} else {
  console.log(`You are have been living on earth for ${myAge} years`);
};

// 3. 

let aa = prompt('Enter first figure');
let bb = prompt('Enter second figure');

bb < aa

  ?
  console.log('first figure is greater than second figure') :
  console.log('first figure is less than the second figure');


// 4.

const anyNumber = prompt('Enter any number to check if is even or odd');

if (anyNumber % 2) {
  console.log(`${anyNumber} is an odd Number`);
} else {
  console.log(`${anyNumber} is a even number`);
};

// 5.   80-100, A || 70-89, B || 60-69, C || 50-59, D || 0-49, F.

// const grade = prompt('Enter your score to see your grade');
// const grade2 = Number(grade)


//   switch (grade2) {
//     case grade2 === 80 <= 100:
//       console.log("Congratulations, Excellent mark 'A' ");
//       break;
//     case grade2 === 70 <= 89:
//       console.log("Wow, Very Good mark 'B' ");
//       break;
//     case grade2 === 60 <= 69:
//       console.log("Nice, Good mark 'C' ");
//       break;
//     case grade2 === 50 <= 59:
//       console.log("Not bad, Pass mark 'D' ");
//       break;
//     default:
//       console.log("Poor, Fail 'F' ");
// };


// switch (grade2) {
//   case grade2 === 80 || grade2 >= 100:
//     console.log("Congratulations, Excellent mark 'A' ");
//     break;
//   case grade2 === 70 || grade2 >= 89:
//     console.log("Wow, Very Good mark 'B' ");
//     break;
//   case grade2 === 60 || grade2 >= 69:
//     console.log("Nice, Good mark 'C' ");
//     break;
//   case grade2 === 50 || grade2 >= 59:
//     console.log("Not bad, Pass mark 'D' ");
//     break;
//   default:
//     console.log("Poor, Fail 'F' ");
// };


// if (grade === (80 >= 100)) {
//   console.log("Congratulations, Excellent mark 'A' ");
// } else if (grade === (70 >= 89)) {
//   console.log("Wow, Very Good mark 'B' ");
// } else if (grade === (60 >= 69)) {
//   console.log("Nice, Good mark 'C' ");
// } else if (grade === (50 >= 59)) {
//   console.log("Not bad, Pass mark 'D' ");
// } else {
//   console.log("Poor, Fail 'F' ");
// };


// 6.  September, October or November, the season is Autumn. || December, January or February, the season is Winter. || March, April or May, the season is Spring. || June, July or August, the season is Summer


const month = prompt('Enter any month of your choice');
const months = month.toLowerCase();


// if(months === 'January' || 'December' || 'February' ){
//   console.log('The season is Winter');
// }else if(months === 'March' || 'April' || 'May'){
//   console.log('The season is Spring');
// }else if (months === 'June' || 'July' || 'August'){
//   console.log('Ths season is Summer');
// }else if(months === 'September' || 'October' || 'November'){
//   console.log('The season is Autumn');
// }else{
//   console.log('Enter a month and Try Again.');
// };


switch (months) {
  case 'january':
  case 'december':
  case 'february':
    console.log(` ${months} season is Winter`);
    break;
  case 'march':
  case 'april':
  case 'may':
    console.log(` ${months} season is Spring`);
    break;
  case 'june':
  case 'july':
  case 'august':
    console.log(`${months} season is Summer`);
    break;
  case 'september':
  case 'october':
  case 'november':
    console.log(` ${months} season is Autumn`);
    break;

  default:
    console.log('Enter a month and Try Again.');

};


// 7.


let dayInput = prompt('What day is today?')
let day = dayInput.toLowerCase()



// if (day === 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday'){
//   console.log(`${day} is a Working Day`);
// }else if(day === 'saturday' || 'sunday'){
//   console.log(`${day} is a Weekend`);
// }else{
//   console.log('It is not a week day');
// };

switch (day) {
  case 'monday':
    console.log('Monday is a Working Day')
    break
  case 'tuesday':
    console.log('Tuesday is a Working Day')
    break
  case 'wednesday':
    console.log('Wednesday is a Working Day')
    break
  case 'thursday':
    console.log('Thursday is a Working Day')
    break
  case 'friday':
    console.log('Friday is a Working Day')
    break
  case 'saturday':
    console.log('Saturday is a Weekend')
    break
  case 'sunday':
    console.log('Sunday is a Weekend')
    break
  default:
    console.log('It is not a week day.')
};

// 8.

switch (months) {
  case 'january':
  case 'march':
  case 'may':
  case 'december':
  case 'october':
  case 'july':
  case 'august':
    console.log(` ${months} has 31 Days`);
    break;
  case 'september':
  case 'april':
  case 'june':
  case 'november':
    console.log(` ${months} has 30 Days`);
    break;
  case 'february':
    console.log(`${months} has 28 Days`);
    break;
  default:
    console.log('Enter a month and Try Again.');

};

let leapYear = now.getUTCMonth(months) + 1

switch (months) {
  // case 'january':
  // case 'march':
  // case 'may':
  // case 'december':
  // case 'october':
  // case 'july':
  // case 'august':
  //   console.log(` ${months} has 31 Days`);
  //   break;
  // case 'september':
  // case 'april':
  // case 'june':
  // case 'november':
  //   console.log(` ${months} has 30 Days`);
    // break;
  case 'february':
    console.log(`${months} has ${leapYear}Days / 28 Days / 29 Days`);
    break;
  default:
    console.log('Enter a month and Try Again.');

};