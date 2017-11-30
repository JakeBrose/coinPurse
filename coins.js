
// var coins = [
//     { name: 'quarters', value: 0.25 }, 
//     { name: 'dimes', value: 0.10 }, 
//     { name: 'nickels', value: 0.05 },
//     { name: 'pennies', value: 0.01 },
// ]
    // var quarters = parseInt(Math.floor(amount / quarter));
    // console.log('Quarters = ' + quarters);
    // var leftOverQ = parseFloat(amount - (quarter * quarters)).toFixed(2);


    // var dimes = parseInt(leftOverQ / dime);
    // console.log('Dimes = ' + dimes);
    // var leftOverD = parseFloat(leftOverQ - (dime * dimes)).toFixed(2);


    // var nickles = parseInt(leftOverD / nickle);
    // console.log('Nickles = ' + nickles);
    // var leftOverN = parseFloat(leftOverD - (nickle * nickles)).toFixed(2);


    // var pennies = parseInt(leftOverN / penny);
    // console.log('Pennies = ' + pennies);

    ////?

var coins = [
    { name: 'quarters', value: 0.25 },
    { name: 'dimes', value: 0.10 },
    { name: 'nickels', value: 0.05 },
    { name: 'pennies', value: 0.01 },
]

let amount = prompt('How much money do you have?'); 
function coinLoop() {
    for (let i = 0; i < coins.length; i++) {
        let coinValue = coins[i].value;
        let coinName = coins[i].name;

        coinPurse(coinValue, coinName);

    }
}
var leftOver = amount
function coinPurse(coinValue, coinName){
    var coinAmt = parseInt(Math.floor(leftOver / coinValue));
    console.log(coinName, coinAmt);
    leftOver = parseFloat(leftOver - (coinValue * coinAmt)).toFixed(2)
}

coinLoop();
