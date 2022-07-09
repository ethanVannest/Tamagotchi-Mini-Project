// console.log('this works')
//This is what changes the name class on the html
const turnOnDarkMode =() =>{
    let pColors = document.getElementsByTagName(p);
    pColors.classList.toggle("dark-mode-p")
    let buttonColors = document.button
    buttonColors.classList.toggle("dark-mode-button")
}

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }
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
        this.petHunger = document.getElementById('hunger')
        this.petBoredom = document.getElementById('boredom')
        this.petSleepiness = document.getElementById('sleepiness')
        this.petAge = document.getElementById('age')
        this.hungerCount = 10
        this.boredomCount = 10
        this.sleepinessCount = 10
        this.ageCount = 0
        startGame.addEventListener('click', function () {
            setInterval(() => {
                game.hungerCount -= 1
                game.petHunger.innerText = `Hunger ${game.hungerCount}`
                if (game.hungerCount === 0){
                    alert(`${petName} has passed away...`)
                    location.reload()
                }
        }, 1500);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                game.boredomCount -= 1
                game.petBoredom.innerText = `Boredom ${game.boredomCount}`
                    if(game.boredomCount === 0){
                        alert(`${petName} died of boredom...`)
                        location.reload()
                    }
        }, 1500);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                game.sleepinessCount -= 1
                game.petSleepiness.innerText = `Sleepiness ${game.sleepinessCount}`
                    if(game.sleepinessCount === 0){
                        alert(`${petName} didn\'t get enough sleep...`)
                        location.reload()
                    }
        }, 1500);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                game.ageCount += 1
                game.petAge.innerText = `Age ${game.ageCount}`
                let bulba = document.getElementById('bulbasaur').getAttribute('src')
                let ivysaur = document.createElement('img').setAttribute('src','../Tamagotchi-Mini-Project/imgs/ivysaur.gif') 
                //HOW TO CHANGE THE PICTURE FROM THE WNES GIF TO IVYSAUR GIF
                    if(game.ageCount === 15){
                        alert(`${petName} is Evolving!`);
                        bulba = ivysaur
                        // "/Users/ethanvannest/Desktop/Tamagotchi-Mini-Project/imgs/ivysaur.gif"
                    }
        }, 1500);
        });
    }
}
const game = new Game()
//NEED TO FIX THE ISSUE OF CLASSES NOT BEING ABLE TO BE ACCESSED IN DOT NOTATION
class Tam {
    constructor(){
        this.darkMode = document.getElementById("darkMode")
        this.feedPet = document.getElementById("feed")
        this.petSleep = document.getElementById("sleep")
        this.playWithPet = document.getElementById("play")
        // this.pColors = document.getElementsByTagName('p');
        // this.buttonColors = document.getElementsByTagName('button');
        this.feedPet.addEventListener('click', event => {
            game.hungerCount++
            // console.log("feedPet clicked")
            //access the class of game 
                //use dot notation to access the count of the pets hunger
                //CLICK to change the hungercount to 10 
            // console.log(game.startGame)
        })
        this.playWithPet.addEventListener('click', event =>{
            game.boredomCount++ 
        })
        this.darkMode.addEventListener('click', event =>{
            document.body.style.backgroundImage ='url(/Users/ethanvannest/Desktop/Tamagotchi-Mini-Project/imgs/game_sleeping_background.gif)'
            turnOnDarkMode()
        })
        this.petSleep.addEventListener('click', event => {
            game.sleepinessCount++
            //how to get an img to take the place of the current background for a set amount of time as well as cover the page*
        })
    }
}
const tam = new Tam()
//add ability to name pet * 
//add a hunger, sleepiness, boredom, and age(set time interval to age every 15 seconds) *
    //HOW TO MAKE NAME OF VALUE NOT DISSAPEAR*
//button to feed pet, turn screen to dark mode, play with pet *
//display a character on screen *
//buttons to turn off the lights*, feed the pet*, play with the pet*
//pet should die if hunger,boredom,or sleepiness hits 10 *
//pet morphs at the age of 15
//animate the character across the screen