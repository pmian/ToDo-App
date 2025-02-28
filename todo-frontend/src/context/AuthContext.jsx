import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");
  const navigate = useNavigate();

  // On mount, if there's a token, fetch the user details
  useEffect(() => {
    if (token && !user) {
      axios
        .get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user)); // Save user data
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          logout();
        });
    }
  }, [token]);

  // ✅ Login function (saves user data)
  const login = (data) => {
    setToken(data.token);
    localStorage.setItem("authToken", data.token);
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user)); // Save user in storage
    navigate("/dashboard", { replace: true });
  };

  // ✅ Logout function (clears storage)
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
