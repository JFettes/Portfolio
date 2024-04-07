let array = [];

function update() {
    const outputParagraph = document.getElementById("output");
    outputParagraph.innerHTML = "";
    array.reduce((accumulator, currentValue, index) => {
        outputParagraph.innerHTML += `${index + 1}. ${currentValue}<br>`;
    }, '');
}

function pushToArray() {
    const input = document.getElementById("inputField").value;
    array.push(input);
    update();
}

function popFromArray() {
    array.pop();
    update();
}

function shiftFromArray() {
    array.shift();
    update();
}

function unshiftToArray() {
    const input = document.getElementById("inputField").value;
    array.unshift(input);
    update();
}

function arrMap() {
    const input = document.getElementById("inputField").value;
    array = array.map(item => input + item);
    update();
}