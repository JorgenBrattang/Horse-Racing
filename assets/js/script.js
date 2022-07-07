
// Gets all the button from the tag name button from the DOM
const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "brown") {
            changeActive(0);
            startRace();
        }
        else if (this.getAttribute("data-type") === "grey") {
            changeActive(1);
            startRace();
        }
        else if (this.getAttribute("data-type") === "orange") {
            changeActive(2);
            startRace();
        }
        else if (this.getAttribute("data-type") === "white") {
            changeActive(3);
            startRace();
        } else {
            alert("button doesn't choose a data-type, look that up!")
        }
    })
}

/**
 * Changes the active class on the selected button and resets the rest.
 */
function changeActive(num) {
    
    if(num === 0) {
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        targetButton.style.cssText = 'background: #683b11;'
        activeButton();
        resetActive(num);
    } 
    else if (num === 1){
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        targetButton.style.cssText = 'background: #a48a7b;'
        activeButton();
        resetActive(num);
    }
    else if (num === 2){
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        targetButton.style.cssText = 'background: #d46c2f;'
        activeButton();
        resetActive(num);
    }
    else {
        targetButton = document.getElementsByClassName('horse-select--btn')[num];
        targetButton.style.cssText = 'background: #ededed; color: #4a4a4a;'
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