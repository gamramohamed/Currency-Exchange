let enterInp = document.getElementById("enterInp");
let slctFrom = document.getElementById("from-currency");
let slctTo = document.getElementById("to-currency");
let convertInp = document.getElementById("to-amount");
let convertButton = document.getElementById("convert-button");

let exchangeRates = {
  USD: { EUR: 0.93, DZD: 134.87 },
  EUR: { USD: 1.08, DZD: 145.47 },
  DZD: { USD: 0.0074, EUR: 0.0069 },
};
let convert= ()=> {
  let amount = enterInp.value;
  let from = slctFrom.value;
  let to = slctTo.value;
  if (from === to) {
    convertInp.value = amount;
    return;
  }
  let rate = exchangeRates[from][to];
  let convertedAmount = amount * rate;
  convertInp.value = convertedAmount.toFixed(2);
}
convertButton.addEventListener("click", convert);
