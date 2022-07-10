
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
            let horseBrown = document.getElementById("brown-horse");
            horseBrown.style.width = '1%';

            let horseGrey = document.getElementById("grey-horse");
            horseGrey.style.width = '1%';

            let horseOrange = document.getElementById("orange-horse");
            horseOrange.style.width = '1%';

            let horseWhite = document.getElementById("white-horse");
            horseWhite.style.width = '1%';

            i = 1;
            
            let horses = [1,2,3,4];
            for (horse in horses) {
                resetActive(horse);
            }

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
        alert("i = " + i + " and num = " + num);
    }
}

/**
 * Starts the race
 */
function startRace(i,num) {
    if (i == 1) {
        if (num === 0) {
            let horse = document.getElementById("brown-horse");
            horse.style.background = '#683b11';
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
            horse.style.background = '#a48a7b';
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
            horse.style.background = '#d46c2f';
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
            horse.style.background = '#ededed';
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
 * Checks the horse number selected and resets the button to its original value
 */
function resetActive(num) {
    if(num === 0) {
        numbers = [1,2,3];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            targetButton.style.cssText = 'background: #3f5db1;'
            resetButton();
        }
    } 
    else if (num === 1){
        numbers = [0,2,3];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            targetButton.style.cssText = 'background: #3f5db1;'
            resetButton();
        }
    }
    else if (num === 2){
        numbers = [0,1,3];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            targetButton.style.cssText = 'background: #3f5db1;'
            resetButton();
        }
    }
    else {
        numbers = [0,1,2];
        for (number of numbers) {
            targetButton = document.getElementsByClassName('horse-select--btn')[number];
            targetButton.style.cssText = 'background: #3f5db1;'
            resetButton();
        }
    }
}

/**
 * Changes the buttons innerText to Good Luck! and adds the active class
 */
 function activeButton() {
    targetButton.children[0].innerText = 'Good Luck!';
}

/**
 * Changes the buttons innerText to Select ME! and removes the active class
 */
function resetButton() {
    targetButton.children[0].innerText = 'Select ME!';
}