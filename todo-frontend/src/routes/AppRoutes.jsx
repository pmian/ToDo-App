import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import useTitleAnimation from "../hooks/useTitleAnimation";
import { AuthProvider } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import AddTask from "../pages/AddTask";
import ViewTasks from "../pages/ViewTasks";
import { TaskProvider } from "../context/TaskContext";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import NavbarLayout from "../components/NavbarLayout";
import SidebarLayout from "../components/SidebarLayout";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

const AppRoutes = () => {
  useTitleAnimation();
  return (
    <AuthProvider>
      <TaskProvider>
        <Routes>
          <Route element={<NavbarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<SidebarLayout />}>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/add-task" element={<PrivateRoute><AddTask /></PrivateRoute>} />
            <Route path="/tasks" element={<PrivateRoute><ViewTasks /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          </Route>

        </Routes>
      </TaskProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
