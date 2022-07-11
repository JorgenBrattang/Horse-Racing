
// Gets all the button from the tag name button from the DOM
let buttons = document.getElementsByTagName("button");
let i = 1;
for (button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "brown") { 
            sequenceStart(0);
        }
        else if (this.getAttribute("data-type") === "grey") {
            sequenceStart(1);
        }
        else if (this.getAttribute("data-type") === "orange") {
            sequenceStart(2);
        }
        else if (this.getAttribute("data-type") === "white") {
            sequenceStart(3);
        }
        else if (this.getAttribute("data-type") === "reset") {
            sequenceReset()
        }
        else {
            alert("button doesn't choose a data-type, look that up!")
        }
    })
}

/**
 * Starts the sequence to start all the functions when pressing on
 * a horse select button.
 */
function sequenceStart(num) {
    if (i === 1) {
        changeActiveButton(num);
        startRace(i,num);
        i = 0;
    } else {
        alert("You need to reset the horses to start a new race!");
    }
}

/**
 * Changes the active class on the selected button and resets the rest.
 */
 function changeActiveButton(num) {
    
    if(num === 0) {
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        activeButton();
        resetActive(num);
    } 
    else if (num === 1){
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        activeButton();
        resetActive(num);
    }
    else if (num === 2){
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        activeButton();
        resetActive(num);
    }
    else {
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        activeButton();
        resetActive(num);
    }
}

/**
 * Changes the buttons innerText to Good Luck!
 */
 function activeButton() {
    targetButton.children[0].innerText = 'Good Luck!';
}

/**
 * Starts the race, takes in "i" to check if you started a race before or not. "num" to check which
 * horse you choose: example Grey Horse = 1
 */
 function startRace(i,num) {
    /* Gets the score from the HTML */
    let score = parseInt(document.getElementById("scoreCounter").innerHTML);
    /* If your score is less or equal to 4, you don't have enough to start playing (need 5 minimum) */
    if (score <= 4) {
        alert("You don't have enough money, restart the page to try again!");
    } else {
        /* Gets if you have an ongoing race or not. */
        if (i == 1) {
            /* Gets the horses from the HTML */
            let brownHorse = document.getElementById("brown-horse");
            let greyHorse = document.getElementById("grey-horse");
            let orangeHorse = document.getElementById("orange-horse");
            let whiteHorse = document.getElementById("white-horse");
            
            /* Lets the horseWidth to be 1% of 100%, so you can see where your horse starts */
            let brownHorseWidth = 1;
            let greyHorseWidth = 1;
            let orangeHorseWidth = 1;
            let whiteHorseWidth = 1;

            /* Creates a random number for each horse, 1st is Brown, 2nd is Grey and so on... */
            let horseRandom = [
                Math.floor(Math.random() * 10) + 25,
                Math.floor(Math.random() * 10) + 25,
                Math.floor(Math.random() * 10) + 25,
                Math.floor(Math.random() * 10) + 25,];

            /* Gets the horse random generated numbers and puts it in an array */
            let winner = [
                horseRandom[0],
                horseRandom[1],
                horseRandom[2],
                horseRandom[3],
            ]

            /* Gets the winner and sorts it's greatest number to the lowest */
            winner.sort(function(b, a){return b-a});

            /* Creates a delay on the score, so you can't see in advance which horse won */
            setTimeout(function(){
                /* If the horse is 0 = Brown (Do this code) */
                if (horseRandom[0] === winner[0]) {
                    document.getElementById("winner").innerHTML = 'Brown horse'; 
                    if (num === 0) {
                        plusScore(score);
                    } else {
                        minusScore(score);
                    }
                }
                /* If the horse is 1 = Grey (Do this code) */
                else if (horseRandom[1] === winner[0]) {
                    document.getElementById("winner").innerHTML = 'Grey horse'; 
                    if (num === 1) {
                        plusScore(score);
                    } else {
                        minusScore(score);
                    }
                }
                /* If the horse is 2 = Orange (Do this code) */
                else if (horseRandom[2] === winner[0]) {
                    document.getElementById("winner").innerHTML = 'Orange horse'; 
                    if (num === 2) {
                        plusScore(score);
                    } else {
                        minusScore(score);
                    }
                }
                /* If the horse is 3 = White (Do this code) */
                else if (horseRandom[3] === winner[0]) {
                    document.getElementById("winner").innerHTML = 'White horse'; 
                    if (num === 3) {
                        plusScore(score);
                    } else {
                        minusScore(score);
                    }
                }
                /* Gets all the numbers from the race */
                document.getElementById("horse-random").innerHTML = horseRandom; 
                /* Gets the last horse and delays it so you can't see the winner
                until the race is finished */
            },winner[3]*100);
                

            /* Sets the interval of the time from the random number for each horse */
            let brownID = setInterval(brownFrame, horseRandom[0]);
            let greyID = setInterval(greyFrame, horseRandom[1]);
            let orangeID = setInterval(orangeFrame, horseRandom[2]);
            let whiteID = setInterval(whiteFrame, horseRandom[3]);

            /**
             * Gets the interval speed for Brown horse and if its not 100% keep going.
             */
            function brownFrame() {
                /* Checks if the length of the race is finished (100%) */
                if (brownHorseWidth >= 100) {
                    clearInterval(brownID);
                } else {
                    /* if it isn't finished, keep on going. */
                    brownHorseWidth++;
                    brownHorse.style.width = brownHorseWidth + "%";
                }
            }

            /**
             * Gets the interval speed for Grey horse and if its not 100% keep going.
             */
            function greyFrame() {
                /* Checks if the length of the race is finished (100%) */
                if (greyHorseWidth >= 100) {
                    clearInterval(greyID);
                } else {
                    /* if it isn't finished, keep on going. */
                    greyHorseWidth++;
                    greyHorse.style.width = greyHorseWidth + "%";
                }
            }

            /**
             * Gets the interval speed for Orange horse and if its not 100% keep going.
             */
            function orangeFrame() {
                /* Checks if the length of the race is finished (100%) */
                if (orangeHorseWidth >= 100) {
                    clearInterval(orangeID);
                } else {
                    /* if it isn't finished, keep on going. */
                    orangeHorseWidth++;
                    orangeHorse.style.width = orangeHorseWidth + "%";
                }
            }

            /**
             * Gets the interval speed for Grey horse and if its not 100% keep going.
             */
            function whiteFrame() {
                /* Checks if the length of the race is finished (100%) */
                if (whiteHorseWidth >= 100) {
                    clearInterval(whiteID);
                } else {
                    /* if it isn't finished, keep on going. */
                    whiteHorseWidth++;
                    whiteHorse.style.width = whiteHorseWidth + "%";
                }
            }
        } else {
                alert("i = " + i + " and num = " + num);
        }
    }
}

/**
 * Gets the score from the HTML and increments it by 5.
 */
function plusScore(score) {
    score += 5;
    document.getElementById("scoreCounter").innerHTML = score;
    return score;
}

/**
 * Gets the score from the HTML and decrease it by 3.
 */
function minusScore(score) {
    score -= 3;
    document.getElementById("scoreCounter").innerHTML = score;
    return score;
}




/**
 * Starts the sequence to reset all the functions when pressing on
 * Reset button.
 */
function sequenceReset() {
    let horseBrown = document.getElementById("brown-horse");
    horseBrown.style.width = '1%';

    let horseGrey = document.getElementById("grey-horse");
    horseGrey.style.width = '1%';

    let horseOrange = document.getElementById("orange-horse");
    horseOrange.style.width = '1%';

    let horseWhite = document.getElementById("white-horse");
    horseWhite.style.width = '1%';

    i = 1;
    
    let horsesNumber = [1,2,3,4];
    for (horse in horsesNumber) {
        resetActive(horse);
    }
}

/**
 * Checks the horse number selected and resets the button to its original value
 */
function resetActive(num) {
    if(num === 0) {
        numbers = [1,2,3];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            resetButton();
        }
    } 
    else if (num === 1){
        numbers = [0,2,3];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            resetButton();
        }
    }
    else if (num === 2){
        numbers = [0,1,3];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            resetButton();
        }
    }
    else {
        numbers = [0,1,2];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            resetButton();
        }
    }
}

/**
 * Changes the buttons innerText to Select ME!
 */
function resetButton() {
    targetButton.children[0].innerText = 'Select ME!';
}