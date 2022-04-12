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


function capitalizeLetter(stringToCapitalize){
    let arrayOfString = stringToCapitalize.split(" ");
    let lengthOfArray = arrayOfString.length;
    let resultingArray = [];
    let firstElem = 0;
    for(let i = 0; i < lengthOfArray; i++){
        let tempVar = arrayOfString[i];
        let firstLetter = tempVar[firstElem].toUpperCase();
        let restOfWord = tempVar.slice(firstElem + 1);
        tempVar =  firstLetter + restOfWord;
        resultingArray.push(tempVar);
    }
    let capitalizedWord = resultingArray.join(" ");
    return capitalizedWord;
}
let wordToCapitalize = prompt("Please enter words to which you would like to capitalize the first letter: ")
console.log(capitalizeLetter(wordToCapitalize));