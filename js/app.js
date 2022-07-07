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
        let petHunger = document.getElementById('hunger')
        let petBoredom = document.getElementById('boredom')
        let petSleepiness = document.getElementById('sleepiness')
        let petAge = document.getElementById('age')
        let hungerCount = 10
        let boredomCount = 10
        let sleepinessCount = 10
        let ageCount = 0
        startGame.addEventListener('click', function () {
            setInterval(() => {
                hungerCount -= 1
                petHunger.innerText = hungerCount
        }, 10000);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                boredomCount -= 1
                petBoredom.innerText = boredomCount
        }, 5000);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                sleepinessCount -= 1
                petSleepiness.innerText = sleepinessCount
        }, 7000);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                ageCount += 1
                petAge.innerText = ageCount
        }, 3000);
        });
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
