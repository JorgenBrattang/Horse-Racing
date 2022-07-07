document.addEventListener("DOMContentLoaded", function() {
    // Gets all the button from the tag name button from the DOM
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "brown") {
                changeActive(0);
            }
            else if (this.getAttribute("data-type") === "grey") {
                changeActive(1);
            }
            else if (this.getAttribute("data-type") === "orange") {
                changeActive(2);
            }
            else if (this.getAttribute("data-type") === "white") {
                changeActive(3);
            } else {
                // Gets the pressed buttons data-type
                alert("button doesn't choose a data-type, look that up!")
            }
        })
    }
});

function changeActive(num) {
    
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
 * Changes the buttons innerText to Good Luck! and adds the active class
 */
 function activeButton() {
    targetButton.children[0].innerText = 'Good Luck';
    targetButton.classList.add("active");
}

/**
 * Changes the buttons innerText to Select ME! and removes the active class
 */
function resetButton() {
    targetButton.children[0].innerText = 'Select ME!';
    targetButton.classList.remove("active");
}