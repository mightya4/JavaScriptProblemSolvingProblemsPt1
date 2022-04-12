function stringReverser(stringToReverse){
    let maxIndex = stringToReverse.length;
    let result;
    while(maxIndex >= 0){
        result += stringToReverse[maxIndex];
        maxIndex--;
    }
    return result;
}
let userStringToReverse = prompt("Please enter a string to reverse: ")
let test = stringReverser(userStringToReverse);
console.log(test);