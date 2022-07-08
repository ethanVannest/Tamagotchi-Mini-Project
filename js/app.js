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
                petHunger.innerText = `Hunger ${hungerCount}`
                if (hungerCount === 0){
                    alert(`${petName} has passed away...`)
                    location.reload()
                }
        }, 1500);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                boredomCount -= 1
                petBoredom.innerText = `Boredom ${boredomCount}`
                    if(boredomCount === 0){
                        alert(`${petName} died of boredom...`)
                        location.reload()
                    }
        }, 1500);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                sleepinessCount -= 1
                petSleepiness.innerText = `Sleepiness ${sleepinessCount}`
                    if(sleepinessCount === 0){
                        alert(`${petName} didn\'t get enough sleep...`)
                        location.reload()
                    }
        }, 1500);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                ageCount += 1
                petAge.innerText = `Age ${ageCount}`
                    if(ageCount === 15){
                        alert(`${petName} is Evolving!`);
                        let bulba = document.getElementById('bulbasaur')
                        bulba = "/Users/ethanvannest/Desktop/Tamagotchi-Mini-Project/imgs/ivysaur.gif"
                }
        }, 150);
        });
    }
}
const game = new Game
//NEED TO FIX THE ISSUE OF CLASSES NOT BEING ABLE TO BE ACCESSED IN DOT NOTATION
// console.log(game.petHunger)
class Tam {
    constructor(){
        let feedPet = document.getElementById("feed")
        let petSleep = document.getElementById("sleep")
        let playWithPet = document.getElementById("play")
        feedPet.addEventListener('click', event => {
            // game.petHunger.innerText = 10
            //access the class of game 
                //use dot notation to access the count of the pets hunger
                //CLICK to change the hungercount to 10 
            // console.log(game.startGame)
        })
        petSleep.addEventListener('click', event => {
            document.body.style.backgroundImage ='url(/Users/ethanvannest/Desktop/Tamagotchi-Mini-Project/imgs/game_sleeping_background.gif)'
            //how to get an img to take the place of the current background for a set amount of time as well as cover the page
        })
    }
}
const tam = new Tam
//add ability to name pet * 
//add a hunger, sleepiness, boredom, and age(set time interval to age every 15 seconds) *
    //HOW TO MAKE NAME OF VALUE NOT DISSAPEAR*
//button to feed pet, turn screen to dark mode, play with pet
//display a character on screen *
//buttons to turn off the lights*, feed the pet, play with the pet 
//pet should die if hunger,boredom,or sleepiness hits 10 *
//pet morphs at the age of 15
//animate the character across the screen