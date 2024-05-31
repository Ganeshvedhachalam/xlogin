import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [input, setInput] = useState({
    Username: "",
    Password: "",
  });
  console.log({input})
  const [error, setError] = useState("");
  const [welcome, setWelcome] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Validusername = "user";
    const Validpassword = "password";

    if (!input.Username || !input.Password) {
      setError("Username and Password are required");
      return;
    }

    if (input.Username === Validusername && input.Password === Validpassword) {
      setError("");
      console.log("Welcome, user")
      setWelcome("Welcome, user")
    } else {
      setError("Invalid username or password");
      console.error("Invalid username or password")
    }
    console.log({input})
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username
           
          </label> <input
              name="Username"
              value={input.Username}
              onChange={handleChange}
              placeholder="username"
              required
            />
          <br />
          <label>
            Password
          </label>  
          <input
              name="Password"
              type="password"
              value={input.Password}
              onChange={handleChange}
              placeholder="password"
              required
            />
          <br />
          <button type="submit">Submit</button>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {welcome && <div style={{ color: 'green' }}>{welcome}</div>}
      </header>
    </div>
  );
}

export default App;
