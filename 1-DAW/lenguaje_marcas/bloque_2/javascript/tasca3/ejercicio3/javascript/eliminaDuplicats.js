let numbersArray = [2,25,-7,89,25,2];
let currentNumber = numbersArray[0];
let newNumbersArray = [currentNumber];
alert(`Array Inicial: [${numbersArray}]`);

for (let i = 0; i < numbersArray.length; i++) {
    
    if(!newNumbersArray.includes(numbersArray[i])){

        newNumbersArray.push(numbersArray[i]);
    }
}

alert(`Array Sense Duplicats: [${newNumbersArray}]`);





