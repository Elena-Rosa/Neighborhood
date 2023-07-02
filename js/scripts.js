function process(input) {
    let myNum = document.getElementById("userAnswers");
    questionForm.addEventlistener("submit", submitForm);
    let myArray = [];
    for (let i = 0; i <= myNum; i++)
        myArray.push(processNumber(i));
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

    function submitForm() {
        process("number");
        event.preventDefault();
    }

