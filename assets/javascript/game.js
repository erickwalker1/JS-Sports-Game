// let buttons exist ~ COMPLETE

// Figure out how to determine a random choice in Javascript (math.random) ~ COMPLETE

// Number of Shots Taken (#teamone-numshots) (#teamtwo-numshots)  INCREASE( + 1 ) for every click on the shoot button ~ COMPLETE

// Number of Goals should ONLY INCREASE IF shot is successful ( use IF and ELSE function, in conjuction with math.random) ~ COMPLETE

// Clicking RESET BUTTON should reset Shot and Goal counters and ADD 1 ( + 1) for every reset (Sounds like reassign, how would I do that??) ~ COMPLETE

// JS for Team 1

let count = 0

const teamOneShootButton = document.querySelector ('#teamone-shoot-button');

const teamOneNumGoals = document.querySelector('#teamone-numgoals')

const teamOneNumShots = document.querySelector('#teamone-numshots')

teamOneShootButton.addEventListener ("click", function () {

        let randomNumber = (Math.floor(Math.random()*10))
       if ( randomNumber >= 5) {
        // let newCount = Number(count) + 1;
        let newTeamOneNumShots = Number(teamOneNumShots.innerHTML) + 1;
        teamOneNumShots.innerHTML = newTeamOneNumShots;
        let newTeamOneNumGoals = Number(teamOneNumGoals.innerHTML) + 1;
        teamOneNumGoals.innerHTML = newTeamOneNumGoals
        console.log('+ GOAL!')
        } else {
        // let newCount = Number(count) + 1;
            let newTeamOneNumShots = Number(teamOneNumShots.innerHTML) + 1;
            teamOneNumShots.innerHTML = newTeamOneNumShots;
            let newTeamOneNumGoals = Number(teamOneNumGoals.innerHTML) + 0;
            teamOneNumGoals.innerHTML = newTeamOneNumGoals
            console.log(' + 0 MISS!')
  }
})
//JS for Team 2

const teamTwoShootButton = document.querySelector('#teamtwo-shoot-button');

const teamTwoNumGoals = document.querySelector('#teamtwo-numgoals')

const teamTwoNumShots = document.querySelector('#teamtwo-numshots');

teamTwoShootButton.addEventListener ("click", function (){

// let newCount = Number(count) + 1;
        let randomNumber = (Math.floor(Math.random()*10))
        if ( randomNumber >= 5) {
        let newTeamTwoNumShots = Number (teamTwoNumShots.innerHTML) + 1;
        teamTwoNumShots.innerHTML = newTeamTwoNumShots;
        let newTeamTwoNumGoals = Number(teamTwoNumGoals.innerHTML) + 1;
        teamTwoNumGoals.innerHTML = newTeamTwoNumGoals
        console.log('+ GOAL!')
        } else {
            let newTeamTwoNumShots = Number (teamTwoNumShots.innerHTML) + 1;
            teamTwoNumShots.innerHTML = newTeamTwoNumShots;
            let newTeamTwoNumGoals = Number(teamTwoNumGoals.innerHTML) + 0;
            teamTwoNumGoals.innerHTML = newTeamTwoNumGoals
            console.log(' + 0 MISS!')
}
})

//JS for Reset Button ~ Figure out how to reset team 1 and 2 count
const resetButton = document.querySelector('#reset-button');
let numReset = document.querySelector ('#num-resets');

resetButton.addEventListener ('click', function (){

    document.querySelector ('#teamone-numgoals').textContent = '0'
    document.querySelector ('#teamone-numshots'). textContent ='0'
    document.querySelector ('#teamtwo-numgoals').textContent = '0'
    document.querySelector ('#teamtwo-numshots').textContent = '0'

    let newReset = Number (numReset.innerHTML) + 1;
    numReset.innerHTML = newReset;
    console.log(' + 1 reset score!')
})