// write cool JS here!!

// tilMeld is section ID in which form lays
const formParent = document.getElementById('tilMeld');


const myNameElement = document.getElementById('name');
const myEmailElement = document.getElementById('email');

const myButton = document.getElementById('submitButton');



myButton.addEventListener('click', (event) => {

// form isn't using built-in properties that reloads the page on clicking the button
    event.preventDefault();

// removes whitespace from both sides of a string
    let myTrimmedName = myNameElement.value.trim();



    if (myTrimmedName.length > 2 && validateEmail(myEmailElement.value)) {
        console.log('formen er ydfyldt korrekt');

        formParent.innerHTML = '<h2>tak for tilmeldingen</h2><p</p>';


    } else {

        // name evaluation
        if (myTrimmedName.length > 2) {


        } else {
            console.log('name er IKKE ok');
            //alert('name er IKKE ok');

            // inline styling  
            //myNameElement.style = 'border: 2px solid red;'

            // tilføj class fra CSS
            myNameElement.classList.toggle('errorMarking');

        }


        // email validation
        if (validateEmail(myEmailElement.value)) {

        } else {
            console.log('email er IKKE ok');
            alert('email er IKKE ok');
        }

    }




});








function validateEmail(email) {
    // Definer en simpel regulær udtryk for email-validering
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test om emailen matcher det regulære udtryk
    let isValid = emailRegex.test(email);

    // Returner resultatet af valideringen (true eller false)
    return isValid;
}










function callBack(event) {
    event.preventDefault();
    console.log('clicked fra named function');
}