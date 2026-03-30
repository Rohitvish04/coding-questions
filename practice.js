1. Write a function that takes a string and returns the reversed string.

  function reversed(str){
    let arr= str.split('')
left =0
right = arr.length -1
while (left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--;
}
return arr.join('')
}
console.log(reversed("hello"))

2.Check if a given string is a palindrome

function isPalindrome(str){
    let cleaned = str.replace(/[^a-z0-9]/gi,'').toLowerCase()
    let left=0
    let right= cleaned.length -1
    while (left < right ){
        if( cleaned[left] !== cleaned[right]){
            return false;
        }
        return true;
    }
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("world")); // false


3.Count Character Occurrences

Problem:
Count how many times a specific character appears in a string.

Example:
Input: "banana", "a" → Output: 3


function countChar(str, char){
    let count=0
    for(let i=0; i<str.length; i++){
        if(str[i]=== char){
            count++
        }
    }
    return count
}

console.log(countChar("hello", "l")); // 2
console.log(countChar("banana", "a")); // 3 
console.log(countChar("mississippi", "s")); // 4


4.Remove all spaces from a string.

function removeSpaces(str){
    let result = ""
    for(let i of str){
        if(i!==" "){
            result+=i
        }
    }
    return result
}

console.log(removeSpaces("loop method works")); // "loopmethodworks"

5. Find the first character in a string that does not repeat.
function firstNonRepeatingChar(str){
    let freq = {}
    
    for(let char of str){
        freq[char] = (freq[char] || 0) +1
    }
    
    for(let char of str){
        if(freq[char] === 1){
            return char
        }
    };
    return null;
}

console.log(firstNonRepeatingChar("swiss")); // "w" 
console.log(firstNonRepeatingChar("racecar")); // "e" 
console.log(firstNonRepeatingChar("aabbcc")); // null

// Array Questions here //

6.Sum of array
arr = [1,2,3,4,5]
sum=0
for(let i of arr){
     sum+=i
}
console.log(sum)

3. // Reverse an array
arr = [1,2,3,4,5]
reversed= []
for(let i=arr.length-1 ; i >=0;i--){
     reversed.push(arr[i])
}
console.log(reversed)

// 2 . opitions
arr = [1,2,3,4,5]

left=0
right = arr.length -1
while (left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
}
console.log(arr)

4. // Linear Search 
// Return index of target
// Return -1 if not found
 arr = [1,2,3,4,5]
 target = 7
 function linearSearch(arr, target){
 for(let i=0;i<arr.length -1 ; i++){
      for(let j=1; j <arr.length -1;j++){
          if(arr[i] + arr[j] == target){
              return [i,j]
          }
      }
       
 }
     return -1
 }
 console.log(linearSearch(arr, target))

5.// Linear Search for Counting Occurrences
 arr = [1,2,3,4,2,2,5]
 target = 2
 function countOccurrences(arr, target){
     let count=0
 for(let i=0;i<arr.length -1 ; i++){
      if(arr[i] == target){
          count++
      }
        
 }
    return count
 }
 console.log(countOccurrences(arr, target))
6. // 6. Binary Search

// Return index of target
 function binarySearch(sortedArr, target){
     let left=0
     let right =sortedArr.length -1
     while (  left <= right){
         let mid = Math.floor((left+right) / 2)
         if(sortedArr[mid] === target){
             return mid;
         }else if(sortedArr[mid] < target){
             left = mid +1
         }else{
             right = mid -1
         }
           
     }
     return -1;
 }
const sortedArr = [1, 3, 5, 7, 9, 11]; 
console.log(binarySearch(sortedArr, 7)); // Output: 3 
console.log(binarySearch(sortedArr, 4)); // Output: -1

7. Binary Search that finds the first occurrence of a target in a sorted array
Even after finding element, search left side
 
 function firstOccurrence(sortedArr, target){
     let left=0
     let right =sortedArr.length -1
     let result= -1
     while (  left <= right){
         let mid = Math.floor((left+right) / 2)
         if(sortedArr[mid] === target){
             result = mid
             right = mid -1 
         }else if(sortedArr[mid] < target){
             left = mid +1
         }else{
             right = mid -1
         }
           
     }
     return result; 
 }
const sortedArr = [1, 3, 5,3, 7,3, 9, 11]; 
console.log(firstOccurrence(sortedArr, 3)); // Output: 1
console.log(firstOccurrence(sortedArr, 4)); // Output: -1

8.Last Occurrence of Element
After finding element, search right side

 function lastOccurrence(sortedArr, target){
     let left=0
     let right =sortedArr.length -1
     let result= -1
     while (  left <= right){
         let mid = Math.floor((left+right) / 2)
         if(sortedArr[mid] === target){
             result = mid
             left = mid +1
         }else if(sortedArr[mid] < target){
             left = mid +1
         }else{
             right = mid -1
         }
           
     }
     return result; 
 }
const sortedArr = [1, 3, 5,3, 7,3, 9, 11]; 
console.log(lastOccurrence(sortedArr, 3)); // Output: 5
console.log(lastOccurrence(sortedArr, 4)); // Output: -1

9.Count Occurrences of a Number in a Sorted Array

function firstOccurrence(arr, target){
    let left =0
    let right =arr.length -1
    let result =-1
    
    while ( left <= right){
        let mid = Math.floor((left+ right)/2)
        if(arr[mid] === target){
            result = mid
            right = mid -1 
        }else if(arr[mid] < target){
            left = mid +1
        }else {
            right = mid -1
        }
    }
    return result
}

function lastOccurrence(arr,target){
      let left =0
    let right =arr.length -1
    let result =-1
    
    while ( left <= right){
        let mid = Math.floor((left+ right)/2)
        if(arr[mid] === target){
            result = mid
            left = mid +1
        }else if(arr[mid] < target){
            left = mid +1
        }else {
            right = mid -1
        }
    }
    return result
}

function countOccurrences(arr,target){
    let first = firstOccurrence(arr, target)
    if (first === -1) return 0; // not found
    let last = lastOccurrence(arr, target)
    return last - first  +1
}
// Example usage 
let arr = [1, 2, 2, 2, 3, 4, 5]; 
let target = 2;
console.log(countOccurrences(arr, target)); // Output: 3

10. //  Check if Array is Rotated
arr = [1,2,3,4,5,6]
 
function isRotated(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return true; // rotation detected
        }
    }
    return false; // no rotation found
}

// Examples:
console.log(isRotated([3,4,5,1,2])); // true
console.log(isRotated([1,2,3,4,5])); // false

11.// Move and Shift zero
function moveZeroes(arr) {
    let pos = 0
    for(let i=0;i<arr.length;i++){
         if(arr[i] !== 0){
             arr[pos] = arr[i]
             pos++
         }
    }
    while (pos < arr.length){
        arr[pos] = 0
        pos++
    }
    return arr
}

let arr = [0, 1, 0, 3, 12]; 
console.log(moveZeroes(arr));

12. Remove Duplicates from Sorted Array
// two pointer method
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // slow-runner (last unique element index)

    for (let j = 1; j < nums.length; j++) { // fast-runner
        if (nums[j] !== nums[i]) {
            i++; // move the slow pointer
            nums[i] = nums[j]; // overwrite with the next unique element
        }
    }

    return i + 1; // length is last index + 1
}

// Example usage:
let nums = [1, 1, 2, 2, 3];
let newLength = removeDuplicates(nums);
console.log(newLength); // 3
console.log(nums.slice(0, newLength)); // [1, 2, 3]

// 2 ... method for loop
let nums = [1,2,3,4,4,2]

let output = []

for(let i=0;i < nums.length;i++){
    if(!output.includes(nums[i])){
        output.push(nums[i])
    }
}

console.log(output) // [1,2,3,4 ]

13.  Majority Element

function majorityElement(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }
    if (count > Math.floor(n / 2)) {
      return nums[i];
    }
  }
  return -1;
}

console.log(majorityElement([2, 2, 1, 2, 3, 2, 2]
));

14. Rotate array

nums = [1,2,3,4,5]
k = 7
 
function rotate(nums,k){
    const n = nums.length;
    k = k%n
    for(let i=0; i< k;i++){
        const previous = nums[n -1]
        
        for(let j=n-1; j>0;j--){
             nums[j] = nums[j -1]
        }
        nums[0] = previous
    }
    return nums
}
console.log(rotate(nums,k))

14. Product of Array Except Self
function productExceptSelf(nums) {
    const n = nums.length
    const output = new Array(n);
    
    for(let i=0; i < n; i++){
        output[i] =1;
        for(let j=0; j < n; j++){
            if (i !== j){
                output[i] *= nums[j];
            }
        }
    }
    return output;
}

nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))

2. Prefix and Suffix Products
function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n);
    const prefix = new Array(n);
    const suffix = new Array(n);
    
    prefix[0] = 1;
    for(let i=1; i < n; i++){
        prefix[i] = prefix[i -1] * nums[i -1];
    }
    suffix[n-1] =1;
    for(let i=n-2; i >=0; i--){
        suffix[i] = suffix[i+1] * nums[i+1];
    }
    
    for(let i=0; i < n; i++) {
        output[i] = prefix[i] * suffix[i];
    }
    
      return output;
}

nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))

15. Is Subsequence

function isSubsequence(s,t ){
     let i=0, j=0;
     while (i < s.length && j < t.length ) {
         if (s[i] === t[j]){
             i++;
         }
         j++
     }
     return i === s.length ;
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("", "hello"));     // true

16. Check if a number is a palindrome

function isPalindromeNumber(x) {
  if (x < 0) return false; // negative numbers are not palindromes

  let original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

isPalindromeNumber(121);   // true
isPalindromeNumber(-121);  // false
isPalindromeNumber(10);    // false

17. Maximum Subarray
function maxSubArray(nums) {
  let currentSum = nums[0]; // Start with the first element
  let maxSum = nums[0];     // Initialize maxSum with the first element

  // Traverse the array from the second element
  for (let i = 1; i < nums.length; i++) {
    // If currentSum is negative, reset to current element
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update maxSum if currentSum is greater
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

18. Alternates in an Array
function alternateElement(arr) {
  let result =[]
  for(let i=0; i< arr.length; i+=2){
    result.push(arr[i])
  }
  return result;
}

let arr= [1,2,3,4,5]
let output = alternateelement(arr)
console.log(output)  // 1,3,5

19. MinMax in aaray

function findMinMax(arr)
  let min = arr[0]
let max = arr[0]

for(let i=0; i < arr.length-1; i++){
  if( arr[i] < min) return min =arr[i]
  if(arr[i] > max ) return max = arr[i]
}
return [min,max]
}

20.  Largest number in the array

let arr= [1,2,3,45,5]
function largestNumber(arr){
    if(arr.length === 0) return -1;
    let largest = -Infinity
    
    for(let num of arr){
        if(num > largest){
            largest = num
        }
    }
    return largest
}
console.log(largestNumber(arr))

21. second Largest

function secondLargest(arr){
  if (arr.length === 0) return -1;
  let largest = -Infinity
  let second = - Infinity

  for(let num of arr){
    if (num > largest) {
      second = largest
      second = num
    }else if(num > second && num < largest){
      second = num
}
return second
  }

let arr = [12,35,1,10,34,1]
console.log(secondLargest(arr))
