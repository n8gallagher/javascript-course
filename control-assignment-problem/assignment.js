let randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// while (randomNumber <= 0.7) {
//   randomNumber = Math.random();
// }

// alert(`The secret number was ${randomNumber}`)

const numsArray = [3, 5, 6, 23];

for (let i=numsArray.length - 1; i >= 0; i--) {
  console.log(numsArray[i]);
}

// for (const el in numsArray) {
//   console.log(numsArray[el]);
// }

const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
  alert('big numbers')
} else if (randomNumber <= 0.2 || randomNumber2 <= 0.2) {
  alert('one of the numbers was too small')
}