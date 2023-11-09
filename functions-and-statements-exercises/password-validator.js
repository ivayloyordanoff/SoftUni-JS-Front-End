function passwordValidator(password) {
    let valid = true;
    const digitRegex = /\d/g;
    const letterDigitRegex = /^[a-zA-Z0-9]+$/;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        valid = false;
    }

    if (!letterDigitRegex.test(password)) {
        console.log('Password must consist only of letters and digits');
        valid = false;
    }

    const digitCount = (password.match(digitRegex) || []).length;
    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
        valid = false;
    }

    if (valid) {
        console.log("Password is valid");
    }
}
