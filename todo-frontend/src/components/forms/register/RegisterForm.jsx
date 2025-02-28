import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import validateRegister from "./validateRegister"; // Import validation function

const RegisterForm = ({ onSubmit, error }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({}); // Store field-specific errors
    const [showPassword, setShowPassword] = useState(false); // Password visibility state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Clear error for the specific field when user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: undefined, // Remove the error for this field
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateRegister(formData);
        if (!validationErrors) {
            onSubmit(formData);
        } else {
            setErrors(validationErrors); // Store errors in state
        }
    };

    return (
        <div className="h-auto sm:w-2/3 md:w-1/2 lg:w-1/3 bg-gray-950 bg-opacity-90 rounded-lg text-gray-300 flex flex-col p-8 gap-6 items-center justify-center shadow-lg">
            <h2 className="font-bold text-4xl">Register</h2>

            {error && <p className="text-red-400">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full text-black py-2 px-3 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full text-black py-2 px-3 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full text-black py-2 px-3 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>

                {/* Password Input with Eye Icon */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="w-full text-black py-2 px-3 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                    {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-green-500 py-2 px-6 font-bold text-gray-100 text-lg rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Sign Up
                </button>
            </form>

            <div className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-red-400 hover:text-red-500">
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default RegisterForm;
