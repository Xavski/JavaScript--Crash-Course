let celcius = 10;
let fahrenheit = celcius *1.8 +32;
console.log(fahrenheit);

let subscribed = true;
let loggedIn = true;

if (subscribed === true) {
    console.log('show the video')
}

else if (loggedIn ===true){
    console.log('tell the user to upgrade the subscription')
}
else {
    console.log('tell user to log into account')
}



let cash = 50;
let price = 40;
let difference = cash - price;
let isStoreOpen = false;
if (cash >= price && isStoreOpen ===true){
    console.log('print the receipt')
}

// if (cash>price){
//     console.log(`you paid extra - here's $${difference} change.`)
// }

// else if (cash === price){
//     console.log('You paid the exact amount, have a nice day!')
// }

// else{
//     console.log(`not enough money - you still owe $${difference*-1}`)
// }


