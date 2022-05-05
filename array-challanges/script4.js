// Array Reverse
// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    for(i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
