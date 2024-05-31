import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState({
    Username: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Validusername = "user";
    const Validpassword = "password";

    if (!input.Username || !input.Password) {
      alert("Username and Password are required");
      return;
    }

    if (input.Username === Validusername && input.Password === Validpassword) {
      alert("Welcome, user");
      console.log("Welcome, user")
    } else {
      alert("Invalid username or password");
      console.log("Invalid username or password")
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              name="Username"
              value={input.Username}
              onChange={handleChange}
              placeholder="enter your username"
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              name="Password"
              type="password"
              value={input.Password}
              onChange={handleChange}
              placeholder="enter your password"
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
