1. Callback in JavaScript: The What, Why and How ?
What are callbacks?

Answer:
Callbacks are functions passed as arguments to other functions and executed after a task is completed, commonly used for asynchronous operations.

1. Example: Timer with setTimeout

function greet(name, callback) {
  setTimeout(() => {
    console.log('Hello, ' + name);
    callback();
  }, 2000);
}

// Callback function
function afterGreeting() {
  console.log('Greeting completed.');
}

// Using the greet function with a callback
greet('Mohi', afterGreeting);

2. Examples:
Fetching Data from an API

function fetchData(url, callback){
    fetch(url)
        .then(res => res.json())
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
}

// Callback funciton
function handleData(err, data) {
    if (err){
        console.error('Error fetching data:', err);
    } else {
        console.log('Data received: ', data);
    }}
    
fetchData('https://randomUrl.com/data', handleData);

3. expample: Array Operations with forEach
const numbers = [1, 2, 3, 4, 5];

function logNumber(number, index) {
  console.log('Index of the number: ' + index + ' number: ' + number);
}

// Using forEach with a callback
numbers.forEach(logNumber);
