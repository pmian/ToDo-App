const validateLogin = ({ email, password }) => {
    if (!email.includes("@")) return "Invalid email format.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
};

export default validateLogin;