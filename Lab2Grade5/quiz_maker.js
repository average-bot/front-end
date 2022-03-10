function add_option() {
    var options = document.getElementById("options");

    var option = document.createElement("input");
    option.type = "checkbox";
    option.className = "optionBox";

    var input = document.createElement("input");
    input.type = "text";
    input.className = "inputBox";

    options.appendChild(option);
    options.appendChild(input);
    options.appendChild(document.createElement("br"));
}

var types = document.getElementById("types");
types = addEventListener("change", (event) => {
    const options = document.getElementById("options").getElementsByClassName("optionBox");
    switch (event.target.value) { //according to the type of the question do
        case "text": //textbox
            for (i = 0; i < options.length; i++) {
                options[i].type = "hidden";
            }
            break;
        case "radio": //radio
            for (i = 0; i < options.length; i++) {
                options[i].type = "radio";
            }
            break;
        case "checkbox": //checkbox
            for (i = 0; i < options.length; i++) {
                options[i].type = "checkbox";
            }
            break;

        default:
            break;
    }
});

function create_question() {
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
    var rightBox = document.querySelector("#right");

    //add the question
    var stackQuestion = document.createElement("p");
    stackQuestion.innerHTML = stack.question;
    rightBox.appendChild(stackQuestion);






    // add the checkboxes
    for (var i = 0; i < stack.options.length; i++) {
        var option = document.createElement("input"); // type!!
        option.type = "checkbox";
        var label = document.createElement("label");
        label.innerHTML = stack.options[i];
        rightBox.appendChild(option);
        rightBox.appendChild(label);
        rightBox.appendChild(document.createElement("br"));
    }





}
//add_option();

