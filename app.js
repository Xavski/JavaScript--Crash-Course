// //First way of accessing an element 

// console.log(document.querySelector('#title'))

// //Second way of accessing an element

// console.log(document.getElementById('title'))


// // //Change HTML
// document.querySelector('.title').innerHTML += 'Frontend Simplified'

// // //Change CSS
// // document.querySelector(".title").style.color = 'red'
// document.querySelector(".title").style.fontSize = '28px'



//On click change color of title
function changeTitleToRed(){
    document.querySelector(".title").style.color = 'red'
}


function toggleDarkMode(){
    document.querySelector('body').classList.toggle('dark-theme')
}