//holy cow im so toast

//this is my skill set in js after a few months of learning
// I hope this works
// I will try to make this work with the HTML file provided
// I will also try to make it work with the CSS file provided
// I will also try to make it work with the PHP file provided
//hahha theres no phph file im just rrly bad at this


//this will start by waiting for the DOM to be fully loaded
// and then it will add event listeners to the radio buttons and cards
// and will toggle the selected class on the clicked card and radio button
// and will also toggle the selected class on the other cards and radio buttons
// and will also update the hidden input field with the selected card's value
// and will also update the hidden input field with the selected card's value
let tester123 = 'test123';
document.addEventListener('DOMContentLoaded',() => function() {
    //this gets the class from EVERY label
    const allCards = document.querySelectorAll('.card');
    //this gets the class from EVERY input/radio button
    const allRadioButtons = document.querySelectorAll("input[name='bookingCard']");
    //the one will get the submit button
    const submitButton = document.querySelector('submitBookingButton');

    //this var will temporarily hold the selected card
    let currentSelectedId = null;

    //This is a special block of code (a 'function') that we can call whenever
    //we need to update how the cards look based on which radio button is checked.
    const updateCardSelectionUi = () => {
        allCards.forEach(card =>{
            
        })
    }
});
