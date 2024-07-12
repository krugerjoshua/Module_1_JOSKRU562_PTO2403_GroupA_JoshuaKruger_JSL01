function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = '';
    // This defines an expression that matches the string starting with pet_
    const name = /^pet_[a-zA-Z0-9]+$/;
    // Validation logic goes here
    // Check if input matches the pattern by using the test method
    if (name.test(input)) {
        result = 'Valid Syntax'
    } else {
        result = 'Invalid Syntax'
    }
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    // Sets the inner text of the HTML element to the value of result
    document.getElementById('result').innerText = result;
}