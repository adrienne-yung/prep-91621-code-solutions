function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var number = addTwoNumbers(2, 2);
console.log('number', number);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

number = convertHoursToMinutes(2);
console.log(number);

function getGreeting(name) {
  return 'Hello World!';
}

var string = getGreeting('Hello World!');
console.log(string);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

number = addAndMultiplyBy5(10, 5);
console.log(number);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

number = multiplyAndDivideBy5(35, 10);
console.log(number);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

number = subtractTwoNumbers(22, 7);
console.log(number);

function getCircleCircumfrence(radius) {
  return Math.PI * (radius + radius);
}

number = getCircleCircumfrence(5);
console.log(number);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

string = getFullName('Juan', 'Ramirez');
console.log(string);

function cube(number) {
  return Math.pow(number, 3);
}

number = cube(5);
console.log(number);
