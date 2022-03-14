var Qtype = "hidden";
function add_option() {
    if (document.getElementById("types").selectedIndex == 0) return; // if "choose" is selected
    var options = document.getElementById("options");
    if (options.childElementCount >= 3 && Qtype == "hidden") return; // if it is a text box only one possible answer is allowed

    var option = document.createElement("input");
    option.type = Qtype;
    option.className = "optionBox";

    var input = document.createElement("input");
    input.type = "text";
    input.className = "inputBox";

    options.appendChild(option);
    options.appendChild(input);
    options.appendChild(document.createElement("br"));
}

// dropdown select option menu
var types = document.getElementById("types");
types = addEventListener("change", (event) => {
    const options = document.getElementById("options").getElementsByClassName("optionBox");
    switch (event.target.value) { // according to the type of the question do
        case "text": //textbox
            Qtype = "hidden";
            const optionsBox = document.getElementById("options");
            if (optionsBox.childElementCount >= 3) { // incase of more than one text box remove them all and add new empty box
                while (optionsBox.firstChild) {
                    optionsBox.firstChild.remove();
                }
            }
            add_option();
            break;
        case "radio": //radio
            Qtype = "radio";
            break;
        case "checkbox": //checkbox
            Qtype = "checkbox";
            break;
        default:
            break;
    }
    for (i = 0; i < options.length; i++) {
        options[i].type = Qtype;
    }
});

function create_question() {
    if (document.getElementById("question").value == "") return;
    const stack = {
        question: document.getElementById("question").value,
        type: document.getElementById("types").selectedIndex,
        options: []
    };

    const options = document.getElementById("options").getElementsByClassName("inputBox");
    for (var i = 0; i < (options.length); i++) {
        stack.options.push(options[i].value);
    }

    //write on the right side
    var rightBox = document.querySelector("#doQuiz");

    //add the question
    var stackQuestion = document.createElement("p");
    stackQuestion.innerHTML = "Q: " + stack.question;
    rightBox.appendChild(stackQuestion);

    // add the textbox (answer field)
    if (Qtype === "hidden") {
        var option = document.createElement("input");
        option.type = "text";
        rightBox.appendChild(option);
        rightBox.appendChild(document.createElement("br"));
    } else {    // add the checkboxes or radio buttons
        for (var i = 0; i < stack.options.length; i++) {
            var option = document.createElement("input");
            option.type = Qtype;
            var label = document.createElement("label");
            label.innerHTML = stack.options[i];
            rightBox.appendChild(option);
            rightBox.appendChild(label);
            rightBox.appendChild(document.createElement("br"));
        }
    }
    resetForm();
}



function newQuiz() {
    resetForm();
    const options = document.getElementById("doQuiz");
    while (options.firstChild) {
        options.firstChild.remove()
    }
    alert("Quiz sent/reset");
}

// Reset the create quiz question form
function resetForm() {
    Qtype = "hidden";
    document.getElementById("question").value = "";
    document.getElementById("types").selectedIndex = 0;
    const options = document.getElementById("options");
    while (options.firstChild) {
        options.firstChild.remove();
    }
}

