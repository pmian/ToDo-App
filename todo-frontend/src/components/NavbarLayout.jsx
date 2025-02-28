import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Menu, X } from "lucide-react"; // Importing icons for menu toggle
import { useAuth } from "../context/AuthContext"; // Import AuthContext

const NavbarLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth(); // Get user & logout function from AuthContext
    const navigate = useNavigate();

    return (
        <div>
            <nav className="bg-blue-600 bg-opacity-90 px-6 md:px-12 py-4 text-white font-bold sticky top-0 left-0 w-full z-50 shadow-lg flex justify-between items-center">

                {/* Logo/Branding (Redirects to Dashboard if logged in, else Home) */}
                <Link
                    to={user ? "/dashboard" : "/"}
                    className="text-2xl md:text-3xl font-extrabold tracking-wide hover:text-blue-300 transition duration-300"
                >
                    Taskly
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-lg">
                    {user ? (
                        <button
                            onClick={logout}
                            className="hover:text-red-400 transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-yellow-400 transition duration-300">
                                Login
                            </Link>
                            <Link to="/register" className="hover:text-yellow-400 transition duration-300">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-blue-700 text-white flex flex-col items-center gap-4 py-6 shadow-lg md:hidden">
                        {user ? (
                            <button
                                onClick={() => {
                                    logout();
                                    setMenuOpen(false);
                                }}
                                className="hover:text-red-400 transition duration-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/login" className="hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>
                                    Login
                                </Link>
                                <Link to="/register" className="hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </nav>

            <Outlet /> {/* Renders the current page inside this layout */}
            <Footer />
        </div>
    );
};

export default NavbarLayout;
