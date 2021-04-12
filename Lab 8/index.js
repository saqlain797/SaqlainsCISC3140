// Function will be called when ever keyUp event occurs in the input field
function myFunction1(value) {
    if (isNaN(value)) {
        //it's not a number
        document.getElementById("err").innerText = "Enter a number";
        // changing the border of input field to red if the users enters anything other than number
        document.getElementById("input1").style.borderColor = "red";
        // removing the output text to null if the user enters anything other than number
        document.getElementById("output").innerHTML = "";
    } else {
        //removing the error text if there is no error
        document.getElementById("err").innerText = "";
        //changing the input border color to black if there is no error
        document.getElementById("input1").style.borderColor = "black";
        console.log(value.length)
        // checking if the length of the number entered is lessthan 3
        if (value.length < 3) {
            // updating the output to the entered value
            document.getElementById("output").innerHTML = value;
            //checking if the length of the number entered is greater than 3 and lessthan 6
        } else if (value.length >= 3 && value.length < 6) {
            // creating an array to store the substrings of input value. Substring is obtained by using the slice() method and adding "-" after first string. Also, joining the array to a single string at last to update as output
            console.log("called")
            var phone = [value.slice(0, 3), "-", value.slice(3, 6)].join("");
            // updating the output to the masked value
            document.getElementById("output").innerHTML = phone;
        } else {
            // creating an array to store the substrings of input value. Substring is obtained by using the slice() method and adding "-" after first string and third string.
            var phone = [
                value.slice(0, 3),
                "-",
                value.slice(3, 6),
                "-",
                value.slice(6),
            ].join(""); // Joining the array to a single string at last to update as output
            // updating the output to the masked value
            document.getElementById("output").innerHTML = phone;
        }
    }
}
