import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
    Menu,
    X,
    LayoutDashboard,
    PlusCircle,
    ListChecks,
    User,
    LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";

const SidebarLayout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { user, logout } = useAuth();

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col transition-all duration-300 ${isOpen ? "w-44" : "w-16"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center p-3">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 rounded-md"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    {isOpen && <span className="ml-3 text-lg font-bold">Taskly</span>}
                </div>

                {/* Sidebar Links */}
                <nav className="flex flex-col gap-2 px-2 flex-grow">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-md transition ${isActive ? "bg-blue-500" : "hover:bg-gray-700"
                            }`
                        }
                    >
                        {isOpen ? <LayoutDashboard size={20} /> : <div className="flex justify-center items-center w-full h-full"><LayoutDashboard size={20} /></div>}
                        {isOpen && <span>Dashboard</span>}
                    </NavLink>

                    <NavLink
                        to="/add-task"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-md transition ${isActive ? "bg-blue-500" : "hover:bg-gray-700"
                            }`
                        }
                    >
                        {isOpen ? <PlusCircle size={20} /> : <div className="flex justify-center items-center w-full h-full"><PlusCircle size={20} /></div>}
                        {isOpen && <span>Add Task</span>}
                    </NavLink>

                    <NavLink
                        to="/tasks"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-md transition ${isActive ? "bg-blue-500" : "hover:bg-gray-700"
                            }`
                        }
                    >
                        {isOpen ? <ListChecks size={20} /> : <div className="flex justify-center items-center w-full h-full"><ListChecks size={20} /></div>}
                        {isOpen && <span>View Tasks</span>}
                    </NavLink>
                </nav>

                {/* Profile & Logout */}
                {user && (
                    <div className="px-2 mb-4">
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-2 rounded-md transition ${isActive ? "bg-blue-500" : "hover:bg-gray-700"
                                }`
                            }
                        >
                            {isOpen ? <User size={20} /> : <div className="flex justify-center items-center w-full h-full"><User size={20} /></div>}
                            {isOpen && <span>Profile</span>}
                        </NavLink>

                        {/* Logout Button (Now properly aligned) */}
                        <button
                            onClick={logout}
                            className="flex items-center gap-3 p-2 rounded-md w-full hover:bg-red-600 transition"
                        >
                            {isOpen ? <LogOut size={20} /> : <div className="flex justify-center items-center w-full h-full"><LogOut size={20} /></div>}
                            {isOpen && <span>Logout</span>}
                        </button>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div
                className={`flex-1 min-h-screen transition-all duration-300 ${isOpen ? "ml-44" : "ml-16"
                    } flex flex-col`}
            >
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default SidebarLayout;
