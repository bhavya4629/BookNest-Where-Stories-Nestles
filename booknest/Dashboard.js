import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setName(res.data.name);
      } catch (err) {
        alert("Access denied. Please login.");
        window.location.href = "/login";
      }
    };
    getUserData();
  }, []);

  return (
    <div>
      <h2>Welcome, {name} 📖</h2>
      <p>This is your BookNest dashboard.</p>
    </div>
  );
};

export default Dashboard;
