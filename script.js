let displayOutput = document.getElementById("inputField");

function addNumber(num) {
    displayOutput.value += num;
}

function Calculate() {
    try {
        displayOutput.value = eval(displayOutput.value);
    } catch (error) {
        displayOutput.value = "Error"; // Handle invalid expressions
    }
}

function clearInput() {
    displayOutput.value = "";
}

function deleteLastCharacter() {
    displayOutput.value = displayOutput.value.slice(0, -1);
}

