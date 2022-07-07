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
    buttonChange = document.getElementsByClassName('horse-select--btn')[num];
    buttonChange.children[0].innerText = 'Good LUCK!';
    buttonChange.classList.add("active");
}