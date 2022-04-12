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


function stringCompressor(stringToCompress){
    let lengthOfWord = stringToCompress.length;
    let i = 0;
    let resultingString;
    let nextElem = 0;
    let tmpString="placeholder";
    let counter = 1;
    let firstIndex= 0;
    while(i < lengthOfWord){
        
        let currentElem = stringToCompress[i];
        
        if(i == firstIndex){
            tmpString = currentElem;
        }
        if(i < lengthOfWord - 1){
            nextElem = stringToCompress[i+1];
            if(currentElem == nextElem){
                tmpString += nextElem;
                counter += 1;
            }
            else{
                if(counter <= 1){
                    resultingString += tmpString[firstIndex];
                    tmpString ="";
                }
                else{
                    resultingString += counter + tmpString[firstIndex];
                    counter = 1;
                    tmpString="";
                }

            }
        }
        else{
            resultingString += counter + tmpString[firstIndex];
        }
        i++;
    }
    return resultingString;
}
let sampleString = "aaabbbbbccccaacccbbbaaabbbaaa";
let userStringToCompress = prompt("Please enter a string to compress");
let compressedString = stringCompressor(userStringToCompress);
console.log(compressedString);
