// In the html file I have created a button under the form and set onclick to run validate function


//getting all the text inputs and the text field with getElementById
//const subject = document.getElementById("subject");
//const message = document.getElementById("message");

function validate() {
    const firstName = document.getElementById("fname").value;
    if (firstName === "") {
        alert("The first name box is empty");
    }
    if (!firstName.match("[a-zA-Z]")) {
        alert("Letters in the first name only");
    }

    const lastName = document.getElementById("lname").value;
    if (lastName === "") {
        alert("The last name box is empty");
    }
    if (!lastName.match("[a-zA-Z]")) {
        alert("Letters in the last name only");
    }

    const phoneNumber = document.getElementById("phone").value;
    if (phoneNumber.match("[a-zA-Z]")) {
        alert("Numbers in the phone number only");
    }

    const emailAddress = document.getElementById("email").value;
    if (emailAddress.match("@") === null || email.match("\.") === null) {
        //if (email.match("@|\.")) {
        alert("Your email needs to contain both a @ and .");
    }
}
