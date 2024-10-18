import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log(email + " and " + password);
      const response = await axios
        .post("https://backend-gamma-blush-12.vercel.app/api/login", {
          email,
          password,
        })
        .then(
          (response) => {
            console.log("Success!");
          },
          (error) => {
            console.log("Failed! " + error);
          }
        );
      // Assuming the response contains a token
      // localStorage.setItem("token", response.accessToken);
      console.log(response);
      history.push("/About");
    } catch (err) {
      setError("Invalid email or password");
      console.log(err);
    }
  };

  return (
    <div className="banner-login">
      <span className="login-area">
        <div className="header-logo">Would You Rather</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password" // Changed to 'password' type for security
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input type="submit" id="submit" value="Login" />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        </form>
      </span>
    </div>
  );
}

export default LoginPage;
