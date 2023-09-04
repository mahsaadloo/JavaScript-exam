import {numInput, dangerText, dangerAlert} from "./importer.js";
import {numberList, numberPrime} from "./state.js";
import {createAlert, validateField} from "./functions.js"

const validateNewNumber = () => {
    if (!validateField(numInput!.value + ""))
        alert("Please insert 5 digit number");
        //throw Error("Please insert 5 digit number");
        
}

export const randomButtonHandler = () => {

    validateNewNumber();
    
    const newNumber = numInput?.value ?? '';
    numberList.push(newNumber);
};

export const primeNumButtonHandler = () => {
    const numberListToNumber = Number(numberList);
    function showPrimes () {
        for (var counter = 1; counter <= numberListToNumber; counter++) {

            var notPrime = false;
            for (var i = 2; i <= counter; i++) {
                if (counter%i===0 && i!==counter) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                    (numberPrime.push(counter));
            }
        }
    };
    showPrimes();
    console.log(numberPrime);
};

export const clearButtonHandler = () => {
    numberList.pop();
    numberPrime.splice(0, numberPrime.length);
    console.log(numberList);
    console.log(numberPrime);

    const textAlert = createAlert();

    dangerText?.appendChild(textAlert);
    dangerAlert?.classList.remove("hidden");
}