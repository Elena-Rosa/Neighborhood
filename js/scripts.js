//business logic

function process(myNum) {
    let myArray = [];
    for (let i = 0; i <= myNum; i++) {
        myArray.push(processNumber(i));
    }
    return myArray;
}


function processNumber(num) {
    let numString = num.toString()

    if (numString.includes("3")) {
        return "Won't you be my neighbor?";
    }
    else if (numString.includes("2")) {
        return "Beep!";
    }
    else if (numString.include("1")) {
        return "Boop!";
    }
    else {
        return numString;
    }


    //user interface logic

    function gatherForm(input) {
        let myNum = Number(document.getElementNById(input).value);
        let myArray = process(myNum);
        displayResults(myArray);
    }

    function displayResults(array) {
        for (let i = 0; <array.length; i++) {
        }
    }
    function submitForm() {
        gatherForm("number");
        event.preventDefault();
    }

    function submitForm() {
        gatherForm("number");
        event.preventDefault();
    }

    function reset() {
        document, ent.getElementById("results").innerHTML = "";
    }