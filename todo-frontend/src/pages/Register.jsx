import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import RegisterForm from "../components/forms/register/RegisterForm";
import { useAuth } from "../context/AuthContext";

function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { user } = useAuth();

    // ✅ Use useEffect to redirect if user is logged in
    useEffect(() => {
        if (user) {
            navigate("/dashboard", { replace: true });
        }
    }, [user, navigate]);

    const handleRegister = async ({ firstName, lastName, email, password }) => {
        setError(""); // Clear previous error

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                firstName,
                lastName,
                email,
                password,
            });

            console.log("User registered successfully:", response.data);
            alert("Registration successful!");
            navigate("/login", { replace: true }); // ✅ Redirect to login after registration
        } catch (err) {
            setError(err.response?.data?.error || "Registration failed. Please try again.");
        }
    };

    return (
        <>
            <BackgroundImage>
                <RegisterForm onSubmit={handleRegister} error={error} />
            </BackgroundImage>
        </>
    );
}

export default Register;
