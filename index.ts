type numberListType = string;
type numberPrimeType = number;

const numberList:numberListType[] = [];
const numberPrime:numberPrimeType[] = [];

const numInput = document.querySelector<HTMLInputElement>("#numInput");
const randomButton = document.querySelector<HTMLButtonElement>("#randomButton");
const primeNumButton = document.querySelector<HTMLBRElement>("#primeNumButton");
const clearButton = document.querySelector<HTMLButtonElement>("#clearButton");
const dangerText = document.querySelector("#dangerText");
const dangerAlert = document.querySelector("#dangerAlert");
const closeButton = document.querySelector<HTMLButtonElement>("#closeButton");

randomButton?.addEventListener("click", () => {
    const newNumber = numInput?.value ?? '';
    numberList.push(newNumber);
});
primeNumButton?.addEventListener("click", () => {
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
});
clearButton?.addEventListener("click", () => {
    numberList.pop();
    numberPrime.splice(0, numberPrime.length);
    console.log(numberList);
    console.log(numberPrime);
    const textAlert = document.createElement("span");
    textAlert.className = "font-medium";
    textAlert.innerText= "Your Data has been deleted !";
    dangerText?.appendChild(textAlert);
    dangerAlert?.classList.remove("hidden");
});

