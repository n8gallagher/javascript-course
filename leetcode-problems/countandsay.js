var wordGenerator = (n) => {
  if(n === 1) {
    return "one"
  } else if (n === 2) {
    return "two"
  } else if (n === 3) {
    return "three"
  } else if (n === 4) {
    return "four"
  } else if (n === 5) {
    return "five"
  } else if (n === 6) {
    return "six"
  } else if (n >= 7) {
    return "many"
  }
}


var countAndSay = function(n) {
  finalString = "";
  string = n.toString();
  for(let i=0; i < string.length; i++) {
    let count = 1;
    if (string[i + 1] && string[i + 1] !== string[i]) {
      finalString += wordGenerator(count) + ` ${string[i]}`
    }
  
  }
  console.log(finalString);
};


countAndSay(3442);
countAndSay(3);
countAndSay(75);