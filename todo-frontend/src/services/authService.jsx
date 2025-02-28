import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Update with your backend URL

// ✅ Fetch user data from token
export const getUser = async (token) => {
    try {
        const res = await axios.get(`${API_URL}/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res.data.user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
    }
};

// ✅ Login function (stores token)
export const login = (token) => {
    localStorage.setItem("token", token);
};

// ✅ Logout function (removes token)
export const logout = () => {
    localStorage.removeItem("token");
};
