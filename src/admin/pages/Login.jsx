import React from "react";
import MasterLayout from "../components/layout/MasterLayout";

const Login = () => {
  return (
    // <MasterLayout>
     <>
     <body class="authentication-page">
  <div class="authentication-bg">
    <img class="auth-bg" src="media/images/auth-bg.jpg" width="1920" height="1080" alt="Authentication BG" />
  </div>
  <div class="authentication-wrapper">
    <div class="authentication-card card">
      <img class="auth-logo-element" src="media/images/inso-owl-logo.svg" alt="Logo" />
      <img class="auth-logo" src="media/images/logo-dark.svg" alt="Logo" /> 
      <div id="login" class="auth-item">
        <div class="columns is-multiline">
          <div class="column is-12 col-form">
            <div class="form-group">
              <label class="form-label">Username*</label>
              <input type="text" class="form-control" autocomplete="off" />
            </div>
          </div>
          <div class="column is-12 col-form">
            <div class="form-group">
              <label class="form-label">Password</label>
              <div class="input-group input-group-merge">
                <input type="password" class="form-control password-field"/>
                <span class="input-group-text" onclick="togglePassword(this)">
                  <svg class="icon icon-tabler-eye-off toggle-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                    <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                    <path d="M3 3l18 18" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-12 col-form">
            <div class="is-flex is-align-items-center is-gap-1 is-justify-content-space-between">
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input id="remember-me" class="form-check-input" name="remember-me" type="checkbox" />
                  <label for="remember-me" class="form-check-label"><span>Remember me</span></label>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12 col-form">
            <a class="btn btn-primary w-100" href="dashboard">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
     </>
    // </MasterLayout>
  );
};

export default Login;
