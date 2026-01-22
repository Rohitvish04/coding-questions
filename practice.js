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
