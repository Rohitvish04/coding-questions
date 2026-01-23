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
    let left=0
    let right= str.length -1
    while (left < right ){
        if( str[left] !== str[right]){
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
