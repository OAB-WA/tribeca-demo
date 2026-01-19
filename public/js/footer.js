$(document).ready(function () {
    // footer

    document.getElementById('subscribeForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('email').value;
        var thanksMessage = document.getElementById('thanksMessage');

        if (emailInput == 'false') {
            thanksMessage.style.display = 'none';
        }
        else {
            thanksMessage.style.display = 'block';
            document.getElementById('email').value = '';
        }
    });
    
    // accordion

    document.getElementById('subscribeFormAccordion').addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('email-accordion').value;
        var thanksMessage = document.getElementById('thanksMessage-accordion');

        if (emailInput == 'false') {
            thanksMessage.style.display = 'none';
        } else {
            thanksMessage.style.display = 'block';
            document.getElementById('email-accordion').value = '';
        }
    });

});