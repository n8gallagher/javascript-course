let arr = [22, 6, 12, 15, 3, 1, 17]

let filteredArr = arr.filter(num => num > 5);

let obj = {};

let mappedArr = arr.map(num => ({'val': num}));

let reducedArr = arr.reduce((acc, el) => acc * el );

// console.log(filteredArr);
// console.log(mappedArr);
// console.log(reducedArr);

const findMinMax = (arr) => {
  let result = [];
  let max = arr[0];
  let min = arr[0];
  for(let i=1; i < arr.length; i++) {
    let el = arr[i];
    if (el >= max) {
      max = el;
    }
    if (el <= min){
      min = el;
    }
  }
  result.push(max);
  result.push(min);
  return result;
}

let minMax = findMinMax(arr);
const max = minMax[0];
const min = minMax[1];
console.log(`Min is ${min} and Max is ${max}`)

const list = new Set([22, 6, 12, 15, 3, 3, 1, 17])
console.log(list);