import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Add body class on mount
  useEffect(() => {
    document.body.classList.add("authentication-page");

    // Remove class when component unmounts
    return () => {
      document.body.classList.remove("authentication-page");
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Username and Password are required");
      return;
    }

    try {
      const response = await login(formData);

      // Check if status is 200
      if (response.status === 200) {
        // Optionally, store user info
        localStorage.setItem("token", response.user.user_id); // or your actual token if available
        localStorage.setItem("user", JSON.stringify(response.user));

        // Show SweetAlert success
        Swal.fire({
          icon: "success",
          title: "Login Successfully !!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/dashboard"); // redirect after swal closes
        });
      } else {
        setError(response.message || "Login failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="authentication-wrapper">
      <div className="authentication-bg">
        <img
          className="auth-bg"
          src="media/images/auth-bg.jpg"
          width="1920"
          height="1080"
          alt="Authentication BG"
        />
      </div>

      <div className="authentication-card card">
        <img
          className="auth-logo-element"
          src="media/images/inso-owl-logo.svg"
          alt="Logo"
        />
        <img
          className="auth-logo"
          src="media/images/logo-dark.svg"
          alt="Logo"
        />

        <div id="login" className="auth-item">
          <div className="columns is-multiline">
            {/* Username */}
            <div className="column is-12 col-form">
              <div className="form-group">
                <label className="form-label">Username*</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Password */}
            <div className="column is-12 col-form">
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-group input-group-merge">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control password-field"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <span
                    className="input-group-text"
                    onClick={togglePassword}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>
            </div>

            {/* Remember me */}
            <div className="column is-12 col-form">
              <div className="is-flex is-align-items-center is-gap-1 is-justify-content-space-between">
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input
                      id="remember-me"
                      className="form-check-input"
                      name="remember-me"
                      type="checkbox"
                    />
                    <label htmlFor="remember-me" className="form-check-label">
                      <span>Remember me</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="column is-12 col-form">
                <p style={{ color: "red" }}>{error}</p>
              </div>
            )}

            {/* Login Button */}
            <div className="column is-12 col-form">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
