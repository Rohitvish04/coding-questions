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
