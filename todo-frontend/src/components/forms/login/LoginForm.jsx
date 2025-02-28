import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import validateLogin from "./validateLogin";

const LoginForm = ({ onSubmit, error }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false); // Password visibility state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateLogin(formData);
        if (!validationError) {
            onSubmit(formData);
        }
    };

    return (
        <>
            <div className="h-auto sm:w-2/3 md:w-1/2 lg:w-1/3 bg-gray-950 bg-opacity-90 rounded-lg text-gray-300 flex flex-col p-8 gap-6 items-center shadow-lg">
                <h2 className="font-bold text-4xl">Login</h2>

                {error && <p className="text-red-400">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full text-black py-2 px-3 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {/* Password Input with Eye Icon */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="w-full text-black py-2 px-3 rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            required
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
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 py-2 px-6 font-bold text-gray-100 text-lg rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-red-400 hover:text-red-500">
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
