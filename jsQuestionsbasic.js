1.Given an array of numbers, return a new array with each number doubled using map.

  nums= [1,2,3,4,5]
const doubled = nums.map(num => num * 2)
console.log(doubled);

2.Given an array of numbers, return only the even numbers using filter.
  nums= [1,2,3,4,5]
const evenNum = nums.filter(num=> num%2==0)
console.log(evenNum)

3.Given an array of objects { name, age }, return an array of names for users who are 18 or older.

  const users = [
  { id: 1, name: "Alice", age: 28, active: true, score: 50 },
  { id: 2, name: "Bob", age: 17, active: false, score: 40 },
  { id: 3, name: "Charlie", age: 32, active: true, score: 70 },
  { id: 4, name: "Diana", age: 24, active: true, score: 30 }
];
 
const adultNames = users
    .filter(user => user.age>=18)
    .map(user=> user.name);
    
console.log(adultNames)
