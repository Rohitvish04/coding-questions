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
