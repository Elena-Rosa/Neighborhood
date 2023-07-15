//business logic

function process(myNum) {
    let myArray = [];
    for (let i = 0; i <= myNum; i++) {
        myArray.push(processNumber(i));
    }
    return myArray;
}


function processNumber(num) {
    let numString = num.toString();

    if (numString.includes("3")) {
        return "Won't you be my neighbor?";
    } else if (numString.includes("2")) {
        return "Beep!";
    } else if (numString.includes("1")) {
        return "Boop!";
    } else {
        return numString;
    }
}


//user interface logic

window.addEventListener("load", function () {
    const show = document.getElementById("show")
    show.addEventListener("click", function () {
        submitForm()
    })
    const reset = document.getElementById("resetButton")
    reset.addEventListener("click", function () {
        resetForm()
    })

})


function gatherForm(input) {
    let myNum = Number(document.getElementById(input).value);
    let myArray = process(myNum);
    displayResults(myArray);
}

function displayResults(array) {
    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            document.getElementById("results").innerHTML += array[i];
        } else {
            document.getElementById("results").innerHTML += array[i] + ", ";
        }
    }
}
function submitForm() {
    gatherForm("number");
    event.preventDefault();
}
function resetForm() {
    document.getElementById("number").value = "";
    document.getElementById("results").innerHTML = "";

}