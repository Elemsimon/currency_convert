// Instructions:

// 1. Add the functionality to exchange one currency to another
//(you can use a technology of your choice) 🤖
// 2. Style the app 🎨

const $$ = (ele) => document.querySelector(ele);

const rates = { //lookup table
  GBPGBP: 1.0,
  EUROEURO: 1.0,
  NZDNZD: 1.0,
  GBPEURO: 1.1215,
  GBPUSD: 1.3644,
  GBPNZD: 1.8988,
  NZDGBP: 0.53,
  NZDUSD: 0.72,
  NZDEURO: 0.59,
  EUROGBP: 0.89,
  EURONZD: 1.68,
  EUROUSD: 1.21, 
};

let exchangeRate = 0;
let returnRate = ""

const convertor = () => {
returnRate = $$("#original-currency-unit").value.concat($$("#new-currency-unit").value);
  exchangeRate=rates[returnRate]
  $$(".exchangeRateText").innerHTML = ` Exchange Rate: 1 ${
    $$("#original-currency-unit").value
  } =  ${exchangeRate|| ""} ${$$("#new-currency-unit").value}`;

};

const calculateAmount = () => {  
convertor()
  $$("#exchange-rate").value=exchangeRate
 $$("#original-currency-amount").value === ""
    ? $$("#original-currency-amount").value =""
    : $$("#exchange-rate").value =Number($$("#original-currency-amount").value * exchangeRate.toFixed(2))//else if amount is not null, output message not displayed and currency amount is converted into new currency
}

calculateAmount()
//call function to display Exchangre rate banner text
$$("#original-currency-unit").addEventListener("change", convertor);
$$("#new-currency-unit").addEventListener("change", convertor);
$$("#original-currency-amount").addEventListener("input", calculateAmount);
$$("#original-currency-unit").addEventListener("change", calculateAmount);
$$("#new-currency-unit").addEventListener("change", calculateAmount);