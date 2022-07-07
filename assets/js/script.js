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
        buttonChange = document.getElementsByClassName('horse-select--btn')[num];
        buttonChange.children[0].innerText = 'Good Luck';
        buttonChange.classList.add("active");
        resetActive(num);
    } 
    else if (num === 1){
        buttonChange = document.getElementsByClassName('horse-select--btn')[num];
        buttonChange.children[0].innerText = 'Good Luck';
        buttonChange.classList.add("active");
        resetActive(num);
    }
    else if (num === 2){
        buttonChange = document.getElementsByClassName('horse-select--btn')[num];
        buttonChange.children[0].innerText = 'Good Luck';
        buttonChange.classList.add("active");
        resetActive(num);
    }
    else {
        buttonChange = document.getElementsByClassName('horse-select--btn')[num];
        buttonChange.children[0].innerText = 'Good Luck';
        buttonChange.classList.add("active");
        resetActive(num);
    }

}

/*
Want to make an if that checks if the number is not the same as changeActive function to 
reset all the other onces.

if num is 0 then reset 1,2,3

if num is 1 then reset 0,2,3

if num is 2 then reset 0,1,3

if num is 3 then reset 0,1,2

*/

function resetActive(num) {
    if(num === 0) {
        numbers = [1,2,3];
        for (number of numbers) {
            buttonChange = document.getElementsByClassName('horse-select--btn')[number];
            buttonChange.children[0].innerText = 'Select ME!';
            buttonChange.classList.remove("active");
        }
    } 
    else if (num === 1){
        numbers = [0,2,3];
        for (number of numbers) {
            buttonChange = document.getElementsByClassName('horse-select--btn')[number];
            buttonChange.children[0].innerText = 'Select ME!';
            buttonChange.classList.remove("active");
        }
    }
    else if (num === 2){
        numbers = [0,1,3];
        for (number of numbers) {
            buttonChange = document.getElementsByClassName('horse-select--btn')[number];
            buttonChange.children[0].innerText = 'Select ME!';
            buttonChange.classList.remove("active");
        }
    }
    else {
        numbers = [0,1,2];
        for (number of numbers) {
            buttonChange = document.getElementsByClassName('horse-select--btn')[number];
            buttonChange.children[0].innerText = 'Select ME!';
            buttonChange.classList.remove("active");
        }
    }
}