const startGame = document.querySelector('button')
startGame.addEventListener('click', event => {
    petName = prompt('What is your pets name?')
    startGame.petName
    if (petName === '') {
        petName = 'The Best Pet';
    }
    document.getElementById('name').innerText = (petName) 
})
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
        this.bulba = document.getElementById('bulbasaur')
        this.ivysaur = document.getElementById('bulbasaur')
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
        }, 8000);
        });
        startGame.addEventListener('click', function () {
            setInterval(() => {
                game.sleepinessCount -= 1
                game.petSleepiness.innerText = `Sleepiness ${game.sleepinessCount}`
                    if(game.sleepinessCount === 0){
                        alert(`${petName} didn\'t get enough sleep...`)
                        location.reload()
                    }
        }, 3000);
        });
        startGame.addEventListener('click', () => {
            setInterval(() => {
                game.ageCount += 1
                game.petAge.innerText = `Age ${game.ageCount}`
                    if(game.ageCount === 15){
                        alert(`${petName} is Evolving!`);
                        game.bulba = game.ivysaur
                        this.ivysaur.src = "../Tamagotchi-Mini-Project/imgs/ivysaur.gif" 
                    }
        }, 3000);
        });
    }
}
const game = new Game()
console.log(document.body.style.background)
class Tam {
    constructor(){
        this.darkMode = document.getElementById("darkMode")
        this.feedPet = document.getElementById("feed")
        this.petSleep = document.getElementById("sleep")
        this.playWithPet = document.getElementById("play")
        this.toggle = 'dark'
        this.feedPet.addEventListener('click', event => {
            game.hungerCount++
        })
        this.playWithPet.addEventListener('click', event =>{
            game.boredomCount++ 
        })
        //CLICK DARKMODE button
        //If background image is 2102
            //THEN change to game sleeping background
            //ELSE Change to game sleeping background
        //END if else
        this.darkMode.addEventListener('click', event =>{
            document.body.style.backgroundImage === 'url(../Tamagotchi-Mini-Project/imgs/game_sleeping_background.gif)'
            if ( document.body.style.backgroundImage === 'url(../Tamagotchi-Mini-Project/imgs/game_sleeping_background.gif)') {
                
                document.body.style.backgroundImage = 'url(../Tamagotchi-Mini-Project/imgs/2102.gif)'
                
            } else {
                document.body.style.backgroundImage ='url(../Tamagotchi-Mini-Project/imgs/game_sleeping_background.gif)'
            }
            // tam.toggle === 'dark' ? 'light' : 'dark'
            //     if(tam.toggle === 'dark') {
            //         document.body.style.backgroundImage = 'url(../Tamagotchi-Mini-Project/imgs/game_sleeping_background.gif))'
                    
            //     } else {
            //         document.body.style.backgroundImage =  'url(../Tamagotchi-Mini-Project/imgs/2102.gif)'
    // }
        }) 
        this.petSleep.addEventListener('click', event => {
            game.sleepinessCount++
        })
    }
}
const tam = new Tam()