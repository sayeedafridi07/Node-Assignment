Q1
function largestInteger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

Q2
function signOfProduct(a, b, c) {
  var product = a * b * c;
  if (product > 0) {
    return "positive";
  } else if (product < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

Q3
function largestOfFive(a, b, c, d, e) {
  var largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  if (d > largest) {
    largest = d;
  }
  if (e > largest) {
    largest = e;
  }
 alert(“largest”);
}

Q4
function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

Q5
function isHappyNumber(n) {
  var seen = {};
  while (n !== 1 && n !== 0 && n !== seen[n]) {
    seen[n] = n;
    n = sumOfSquares(n);
  }
  return n === 1;
}

function sumOfSquares(n) {
  var sum = 0;
  while (n) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
}

var happyNumbers = [];
for (var i = 1; i <= 100; i++) {
  if (isHappyNumber(i)) {
    happyNumbers.push(i);
  }
}

console.log("The first 5 happy numbers are: " + happyNumbers.slice(0, 5));

Q6
function isArmstrongNumber(n) {
  var digits = n.toString().split("");
  var sum = 0;
  for (var i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], 3);
  }
  return n === sum;
}

var armstrongNumbers = [];
for (var i = 100; i < 1000; i++) {
  if (isArmstrongNumber(i)) {
    armstrongNumbers.push(i);
  }
}

console.log("The Armstrong numbers of 3 digits are: " + armstrongNumbers);

Q7
var sum = 0;
for (var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log("The sum of 3 and 5 multiples under 1000 is: " + sum);

Q8
const fs = require("fs");

const newFile = fs.createWriteStream("new_file.txt");
newFile.write("first line of text.");
newFile.end();

const existingFile = fs.open("existing_file.txt", "a");
existingFile.write("second line of text.");
existingFile.end();

const appendFile = fs.open("append_file.txt", "a");
appendFile.write("third line of text.");
appendFile.end();

const htmlFile = fs.readFileSync("index.html");
const htmlContent = htmlFile.toString();
console.log(htmlContent);

Q9
const url = require("url");

const myURL = "https://www.google.com/search?q=hello+world";

const parsedURL = url.parse(myURL);

console.log("Protocol: " + parsedURL.protocol);
console.log("Host: " + parsedURL.hostname);
console.log("Port: " + parsedURL.port);
console.log("Path: " + parsedURL.pathname);
console.log("Query string: " + parsedURL.query);

Q10
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The first promise is fulfilled");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The second promise is fulfilled");
  }, 2000);
});

promise1
  .then(value => {
    console.log(value);
  })
  .then(value => {
    console.log(value);
  });





