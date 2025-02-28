const validateRegister = ({ firstName, lastName, email, password }) => {
    let errors = {};

    // Regex patterns
    const namePattern = /^[A-Za-z]+([-'\s][A-Za-z]+)*$/; // Allows "Mary-Anne" or "O'Connor"
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email regex
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // Strong password

    // Trim all input values to avoid accidental spaces-only inputs
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    password = password.trim();

    // First Name Validation
    if (!firstName) {
        errors.firstName = "First name is required.";
    } else if (!namePattern.test(firstName)) {
        errors.firstName = "First name can only contain letters, hyphens, or apostrophes.";
    }

    // Last Name Validation
    if (!lastName) {
        errors.lastName = "Last name is required.";
    } else if (!namePattern.test(lastName)) {
        errors.lastName = "Last name can only contain letters, hyphens, or apostrophes.";
    }

    // Email Validation
    if (!email) {
        errors.email = "Email address is required.";
    } else if (!emailPattern.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    // Password Validation
    if (!password) {
        errors.password = "Password is required.";
    } else if (!passwordPattern.test(password)) {
        errors.password =
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    return Object.keys(errors).length ? errors : null;
};

export default validateRegister;
