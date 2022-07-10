
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
            sequenceReset();
        }
        else {
            alert("button doesn't choose a data-type, look that up!")
        }
    })
}

function randomWinner(num) {
    let horseRandom = [
        num = Math.floor(Math.random() * 50) + 50,
        Math.floor(Math.random() * 50) + 50,
        Math.floor(Math.random() * 50) + 50,
        Math.floor(Math.random() * 50) + 50
    ];

    let max = Math.max(
        horseRandom[0],
        horseRandom[1],
        horseRandom[2],
        horseRandom[3]);

    if (num === max) {
        alert('Your horse won with ' + num + ".");
    } else {
        alert('You lost, the winner was ' + max + ". And you had " + num);
    }
}

/**
 * Starts the sequence to start all the functions when pressing on
 * a horse select button.
 */
function sequenceStart(num) {
    randomWinner(num);
    if (i === 1) {
        changeActiveButton(num);
        startRace(i,num);
        i = 0;
    } else {
        alert("i = " + i + " and num = " + num);
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
 * Starts the race
 */
 function startRace(i,num) {
    if (i == 1) {
        if (num === 0) {
            let horse = document.getElementById("brown-horse");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                horse.style.width = width + "%";
            }
            }
        }
        else if (num === 1) {
            let horse = document.getElementById("grey-horse");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                horse.style.width = width + "%";
            }
            }
        }
        else if (num === 2) {
            let horse = document.getElementById("orange-horse");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                horse.style.width = width + "%";
            }
            }
        }
        else if (num === 3) {
            let horse = document.getElementById("white-horse");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                horse.style.width = width + "%";
            }
            }
        }
        } else {
            alert("i = " + i + " and num = " + num);
        }
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