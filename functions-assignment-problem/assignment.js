const sayHello = (name = "Ned", greeting = 'Hello there') => {
  console.log(greeting + '' + name);
}

const sayHello2 = () => {
  let name = "Jerry";
  console.log("hey " + name);
}

const sayHello3 = () => {
  let name = "Jerry";
  return "hey " + name;
}

const checkInput = (cb, ...args) => {
  for (arg of args) {
    if (arg === '') {
      console.log("found an empty one, boss")
      return null
    }
  }
  cb();
}

// sayHello();
// sayHello2();
// sayHello3();
checkInput(sayHello2, "mom", "Best year ever", '');