import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import BackgroundImage from "../components/BackgroundImage";
import LoginForm from "../components/forms/login/LoginForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [error, setError] = useState("");
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    // ✅ Use useEffect to redirect if user is logged in
    useEffect(() => {
        if (user) {
            navigate("/dashboard", { replace: true });
        }
    }, [user, navigate]);

    const handleLogin = async ({ email, password }) => {
        setError("");
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/login`, {
                email,
                password,
            });
            console.log("Login successful:", response.data);
            // Call AuthContext's login method
            login(response.data);
        } catch (err) {
            console.error("Login error:", err.response?.data?.message || "Something went wrong");
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <>
            <BackgroundImage>
                <LoginForm onSubmit={handleLogin} error={error} />
            </BackgroundImage>
        </>
    );
}

export default Login;
