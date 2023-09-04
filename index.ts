type randomNumType = {
    id: string,
    randomNumber: number
};
type finalResultType = string;
type finalShowPrimeType = number;

const randomNum: Array<randomNumType> = [];
const finalResult: finalResultType[] = [];
const finalShowPrime: finalShowPrimeType[] = [];

const numInput = document.querySelector<HTMLInputElement>("#numInput");
const randomButton = document.querySelector<HTMLButtonElement>("#randomButton");
const primeNumButton = document.querySelector<HTMLButtonElement>("#primeNumButton");
const clearButton = document.querySelector<HTMLButtonElement>("#clearButton");

randomButton?.addEventListener("click", () => {
    //console.log(Math.floor(Math.random()*100000+1));
    const newRandomNum = {
        id: crypto.randomUUID(),
        randomNumber: Math.floor(Math.random()*100000+1)
    }
    randomNum.push(newRandomNum);
    const finalRandom = numInput!.value = newRandomNum.randomNumber.toString();
    finalResult.push(finalRandom);
    
    //console.log(finalRandom);
    //console.log(finalResult);
});

primeNumButton?.addEventListener("click", () => {
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
                    console.log(finalShowPrime.push(counter));
            }
        }
    };
    showPrimes();
    console.log(finalShowPrime);
});

clearButton?.addEventListener("click", () => {
    randomNum.pop();
    finalShowPrime.splice(0, finalShowPrime.length);
    console.log(randomNum);
    console.log(finalShowPrime);
})