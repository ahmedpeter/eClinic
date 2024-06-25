import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import NewPasswordPage from "./auth/newPasswordPage";
import ResetPassword from "./auth/passwordReset";
import SignUp from "./auth/signup";
import Sidebar from "./builder/Sidebar";
import WelcomeScreen from "./auth/welcome";
import Dashboard from "./dashboard";
import ConsultantProfile from "./consultant/consultantProfile";
import Chats from "./shared/chats";
import MessageInbox from "./shared/inbox";
import UserProfile from "./patient/profile";
import History from "./patient/history";
import Appointments from "./patient/appointments";
import UpdateUserProfile from "./shared/updateProfile";
// import MakeAppointment from "./patient/newAppointment";
import MakeAppointment_1 from "./appointment/newAppointment_1";
import MakeAppointment_2 from "./appointment/newAppointment_2";
import MakeAppointment_3 from "./appointment/newAppointment_3";
import SplashScreen from "./splash";
import ForgotPassword from "./auth/forgotPassword";
import Consultants from "./consultant/consultants";

function Application() {
  return (
    <Router>
      <React.Fragment>
        <div>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/auth" element={<WelcomeScreen />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<SignUp />} />
            <Route path="/auth/forgot" element={<ForgotPassword />} />
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
                <Route
                  path="/consultant/profile"
                  element={<ConsultantProfile />}
                />
                <Route path="/messages/chat" element={<Chats />} />
                <Route path="/messages" element={<MessageInbox />} />
                <Route path="/consultants" element={<Consultants />} />
                <Route path="/profile/:id" element={<UserProfile />} />
                <Route path="/patient/:id/history" element={<History />} />
                <Route
                  path="/patient/:id/new_appointment/step1"
                  element={<MakeAppointment_1 />}
                />
                <Route
                  path="/patient/:id/new_appointment/step2"
                  element={<MakeAppointment_2 />}
                />
                <Route
                  path="/patient/:id/new_appointment/step3"
                  element={<MakeAppointment_3 />}
                />
                <Route
                  path="/user/:id/update_profile"
                  element={<UpdateUserProfile />}
                />
                <Route
                  path="/appointment/con/:id/pat/:id/:id"
                  element={<Appointments />}
                />
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
