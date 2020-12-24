const task3Element = document.getElementById('task-3');

let nameVariable1 = 'Jeff';
let nameVariable2 = "Huli";
let nameVariable3 = 'Shadow';

function alert1() { alert("The first alert")};

function alert2() { alert(nameVariable1)};

function stringCombiner(one, two, three) { return one + two + three }

alert1();
alert2();
alert(stringCombiner(nameVariable1, nameVariable2, nameVariable3));

task3Element.addEventListener('click', alert1);