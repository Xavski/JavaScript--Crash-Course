// let celcius = 10;
// let fahrenheit = celcius *1.8 +32;
// console.log(fahrenheit);

// let subscribed = true;
// let loggedIn = true;

// if (subscribed === true) {
//     console.log('show the video')
// }

// else if (loggedIn ===true){
//     console.log('tell the user to upgrade the subscription')
// }
// else {
//     console.log('tell user to log into account')
// }



// let cash = 50;
// let price = 40;
// let difference = cash - price;
// let isStoreOpen = true;
// if (cash >= price && isStoreOpen ===true){
//     console.log('print the receipt')
// }

// if (cash>price){
//     console.log(`you paid extra - here's $${difference} change.`)
// }

// else if (cash === price){
//     console.log('You paid the exact amount, have a nice day!')
// }

// else{
//     console.log(`not enough money - you still owe $${difference*-1}`)
// }


// let hot = false
 
// hot ? console.log('weather is hot outside') : console.log('weather is cold')


// let cash = 50
// let price = 40 
// let isStoreOpen = true

// let str = cash >= price && isStoreOpen ? 'give receipt' : "don't give receipt"


// console.log(str);

// let count = 1;

// while (count <= 100){
//     console.log(count);
//     count += 1
// }

// for (let i = 1; i<=20; i++){
//     if (i%3 === 0 && i%5===0){
//         console.log(`${i} -> Frontend Simplified`)
//     }

//     else if (i%3 === 0){
//         console.log(`${i} -> Frontend`)
//     }

//     else if (i%5=== 0){
//         console.log(`${i} -> Simplified`)
//     }

//     else{
//         console.log(i);
//     }
// }


// const str = "Frontend Simplified"

// for (i=0; i< str.length ;i++){
//     console.log(str[i])
// }


// //function definition
// function welcomePersonToFES(name){
//     console.log(`Welcome to Frontend Simplified, ${name}`)
// }


// //call a function 
// welcomePersonToFES('David');
// welcomePersonToFES('Zen');
// welcomePersonToFES('Mitri');



// function convertCelciusToFarenheit(c){
//     return c*1.8 +32
// }

// console.log(convertCelciusToFarenheit(0))

// let arr = [20,30,40,50,100]


// // [20,30,40]
// let newArr = arr.filter((element) => {
//     return (element < 50)
// })

// //same as
// let newARR = arr.filter(element => element < 50);

// console.log(newArr)




// console.log(arr[0])
// console.log(arr[arr.length -1])


// //add element onto end of array
// arr.push(200);
// console.log(arr);



// let grades= ['A','A+','FAIL']

// let passGrades = grades.filter(element => element !== 'FAIL')

// console.log(passGrades)

// let goodGrades = []

// for (i = 0; i < grades.length; i++){
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i])
//     }
    
// }
//  console.log(goodGrades);


// let arr = [1,4,9,16]

// newArray = arr.map((element) => {
//     console.log(element)
//     return undefined
// })

// console.log(newArray)

// let dollars = [1,5,10,3]

// cents = []

// for(i=0; i<dollars.length; i++){
//     cents.push(dollars[i] *100)
// }

// console.log(cents)


// //long method
// cents = dollars.map((element) =>{
//     return element*100
// })

// // shot method
// cents = dollars.map(element => element*100)

// console.log(cents)

let users = [
    {
    username: 'Xaviour',
    email: 'xaviour@gmail.com',
    subscriptionStatus: 'VIP',
    discordID: 'Xaviour#0001'
    }
]

function register(user){
    users.push(user);
}

register({
    username: "zen",
    email: "zen@gmail.com",
    password:"zen123",
    subscriptionStatus:"VIP",
    discordId: "Zen#0001",
    lessonsCompleted: [0,1]
})

console.log(users)

