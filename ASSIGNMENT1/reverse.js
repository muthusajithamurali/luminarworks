// program to reverse a string
var str="hello "

function reverseString(str) {

    // return a new array of strings
    let arrayStrings = str.split("");
   
    // reverse the new created array elements
    let reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    let joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 let result = reverseString(str);
console.log(result);