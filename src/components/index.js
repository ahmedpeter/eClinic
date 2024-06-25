import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import NewPasswordPage from "./auth/newPasswordPage";
import ResetPassword from "./auth/passwordReset";
import SignUp from "./auth/signup";
import Sidebar from "./builder/Sidebar";
import WelcomeScreen from "./auth/welcome";
import Dashboard from "./dashboard";

function Application() {
  return (
    <Router>
      <React.Fragment>
        <div>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<SignUp />} />
            <Route path="/auth/reset" element={<ResetPassword />} />
            <Route
              path="/auth/app/Set-new-password"
              element={<NewPasswordPage />}
            />
          </Routes>
          <div className="flex-container">
            {/* <Routes>
              <Route
                path="/app"
                element={
                  <div className="sidenav">
                    <Sidebar />
                  </div>
                }
              /> */}

            {/* <Route path="/app"> */}
            <div className="main__content">
              <Routes>
                <Route path="/app/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
          {/* </Routes> */}
        </div>
      </React.Fragment>
    </Router>
  );
}

export default Application;
