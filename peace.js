//holy cow im so toast

//this is my skill set in js after a few months of learning
// I hope this works
// I will try to make this work with the HTML file provided
// I will also try to make it work with the CSS file provided
// I will also try to make it work with the PHP file provided
// hahha theres no php file im just rrly bad at this


let tester123 = 'yes,test123';
// This is a comment to just add a useless variable to the file


document.addEventListener('DOMContentLoaded',() => {

    console.log('Document is ready!');


    const allProductCards = document.querySelectorAll('productCard');
    console.log("Found these product cards:", allProductCards);

    const allRadioInputs = document.querySelectorAll('input[name = "bookingCard"]');
    console.log("Found these radio inputs:", allRadioInputs);

    const checkoutButton = document.querySelector('submitBookingButton');
    console.log("Found the checkout button:", checkoutButton);

    const productForm = document.getElementById('productSelectionForm');
    console.log("Found the product selection form:", productForm);

    let curentlySelectedProduct = null;
    console.log("found the selected product",curentlySelectedProduct);
});
