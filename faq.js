// script.js

document.getElementById('queries').addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    // Get the values from the form fields
    let name = document.getElementById('name').value;
    let option = document.querySelector('input[name="option"]:checked').value;

    // Display the entered details
    alert("This form has been successfully submitted!");
    console.log(
      `You are ${name.value} and you have decided ${option.value} to consultation`
    );
    
});