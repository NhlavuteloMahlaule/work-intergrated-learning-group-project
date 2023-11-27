	$(document).ready(function() {
    $('#clientPaymentForm').submit(function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Payment successful! Thank you for your purchase.');
        }
    });
 
    // Validate form inputs
    function validateForm() {
        let isValid = true;
 
        // Validate license type
        let licenseType = $('#licenseType').val();
        if (licenseType === '') {
            isValid = false;
        }
 
      
        
        // Validate name on credit card
        let cardName = $('#cardName').val();
        if (cardName === '') {
            isValid = false;
        }
 
        // Validate credit card type
        let cardType = $('#cardType').val();
        if (cardType === '') {
            isValid = false;
        }
 
        // Validate credit card number
        let cardNumber = $('#cardNumber').val();
        if (cardNumber === '<16') {
            isValid = false;
        }
 
        // Validate expiration date
        let expiryMonth = $('#expiryMonth').val();
        let expiryYear = $('#expiryYear').val();
        if (expiryMonth === '' || expiryYear === '') {
            isValid = false;
        }
 
        // Validate CVC number
        let cvc = $('#cvc').val();
        if (cvc === '') {
            isValid = false;
        }
 
        return isValid;
    }
});