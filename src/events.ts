import {randomNumType} from "./type";
import {numInput} from "./importer.js";
import {randomNum, finalResult, finalShowPrime} from "./state.js";

export const randomButtonHandler = () => {
    //console.log(Math.floor(Math.random()*100000+1));
    const newRandomNum: randomNumType = {
        id: crypto.randomUUID(),
        randomNumber: Math.floor(Math.random()*100000+1)
    }
    randomNum.push(newRandomNum);
    const finalRandom = numInput!.value = newRandomNum.randomNumber.toString();
    finalResult.push(finalRandom);
    
    //console.log(finalRandom);
    //console.log(finalResult);
};
export const primeNumButtonHandler = () => {
    const finalToNum = Number(finalResult);
    function showPrimes () {
        for (var counter = 1; counter <= finalToNum; counter++) {

            var notPrime = false;
            for (var i = 2; i <= counter; i++) {
                if (counter%i===0 && i!==counter) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                    (finalShowPrime.push(counter));
            }
        }
    };
    showPrimes();
    console.log(finalShowPrime);
};
export const clearButtonHandler = () => {
    randomNum.pop();
    finalShowPrime.splice(0, finalShowPrime.length);
    console.log(randomNum);
    console.log(finalShowPrime);
};