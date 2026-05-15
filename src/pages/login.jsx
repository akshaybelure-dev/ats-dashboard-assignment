import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
} from "lucide-react";

import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleLogin(e) {

    e.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please fill all fields");
    }

  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">

          <div className="logo-circle">
            ATS
          </div>

          <h1>Welcome Back</h1>

          <p>
            Sign in to continue managing
            candidates and jobs.
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <Mail size={18} />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <div className="input-group">

            <Lock size={18} />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>

          <button type="submit">
            Sign In
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;