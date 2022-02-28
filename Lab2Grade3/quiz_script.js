const { json } = require('stream/consumers');

function validate() {
    /*
    //name
    const name = document.getElementById("name").value;
    if (name === "") {
        alert("The name box is empty");
    }
    if (!name.match("[a-zA-Z]")) {
        alert("Letters in the name only");
    }
*/
    /*
        //email
        const emailAddress = document.getElementById("email").value;
        if (emailAddress === "") {
            alert("The email box is empty");
        }
        else if (emailAddress.match(" +") !== null) {
            alert("No spaces allowed in email address.");
        }
        else if (emailAddress.match("@") === null || email.match("\.") === null) {
            alert("Your email needs to contain both a @ and .");
        }
    */
    /*
        
        //gender (radio buttons)
        let radios = document.getElementsByClassName("radio");
        if (!(radios[0].checked || radios[1].checked)) {
            //if (radios.some(radio => radio.checked) === true) {
            alert("Please select one gender.");
        }
        
        //birth year
        const birthYear = document.getElementById("year").value;
        if (birthYear.match("[a-zA-Z]")) {
            alert("Numbers in the birth year only.");
        }
        else if (birthYear.length !== 4) {
            alert("Birthyear can consist of 4 digits.");
        }
    
        
        //programming language experience (checkboxes)
        let checkboxes = document.querySelectorAll('input[name="language"]:checked');
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        if (values.length === 0) {
            alert("Please check at least one of the checkboxes.")
        }
    */
    getScore();

}

function getScore() {
    var myData = JSON.parse(data);
    alert(myData[0].name);
    /*
    const fs = require('fs').default;

    fs.readFile('answers.json', utf8, (err, jsonString) => {
        if (err) {
            alert(err);
            //console.log("File read failed:", err);
            return;
        }
        alert(jsonString);
        //console.log('File data:', jsonString);
    });
    */


}
//class/ object for new questions