// console.log('this works')
//This is what changes the name class on the html
const startGame = document.querySelector('button')
startGame.addEventListener('click', event => {
    petName = prompt('What is your pets name?')
    startGame.petName
    if (petName === '') {
        petName = 'The Best Pet';
    }
    document.getElementById('name').innerText = (petName) 
})
// let petName = prompt('What is your pets name?')
// petName =document.getElementById('name')

class Game {
    constructor(){

        
    }
}
const game = new Game
class Tam {
    constructor(){

    }
}
const tam = new Tam
//add ability to name pet
//add a hunger, sleepiness, boredom, and age(set time interval to age every 15 seconds)
//button to feed pet, turn screen to dark mode, play with pet
//display a character on screen
