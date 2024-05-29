const { response } = require("express");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => response.json())
    .then(data => {
        console.log(response);
        alert('Email sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending the email.');
    });
});
