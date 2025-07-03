import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", user);
      alert("Registered! Now Login.");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" /><br />
      <input name="email" onChange={handleChange} placeholder="Email" /><br />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
