function add_option() {
    var options = document.getElementById("options");

    var input = document.createElement("input");
    input.type = "text";

    var br = document.createElement("br");
    options.appendChild(input);
    options.appendChild(br);
}

function create_question() {
    const stack = {
        question: document.getElementById("question").value,
        type: document.getElementById("types").selectedIndex,
        options: []
    };

    const options = document.getElementById("options");
    for (var i = 0; i < (options.children.length); i++) {
        if (i % 2 == 0) {
            stack.options.push(options.children[i].value);

        }
    }



    //write on the right side FIX FIX FIX
    var rightBox = document.getElementById("right");
    var display = document.createElement("div");
    rightBox.appendChild(display);

    var stackQuestion = document.createElement("input");
    stackQuestion.type = "text";
    question.appendChild(stackQuestion);

    for (var opt of stack.options) {
        var option = document.createElement("checkbox"); // type!!
        option.value = opt;
        question.appendChild(option);
    }





}
//add_option();

