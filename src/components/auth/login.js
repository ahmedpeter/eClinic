import react from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onEnter = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      // loginHandler();
      console.log("enter pressed");
    }
  };
  return (
    <section>
      <div class="sign-in p-4">
        <div class="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span class="mdi mdi-account-circle-outline display-1 text-primary"></span>
            <h2 class="my-3 fw-bold">Let's Sign in</h2>
            <p class="text-muted mb-0">
              Welcome Back, You've
              <br />
              been missed!
            </p>
          </div>
          <a
            class="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
            href="sign-in.html#">
            <i class="bi bi-list fs-3 d-flex"></i>
          </a>
        </div>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlEmail" class="form-label mb-1">
              Email
            </label>
            <div
              class="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlEmail">
              <span
                class="input-group-text bg-transparent rounded-0 border-0"
                id="mail">
                <span class="mdi mdi-email-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="email"
                class="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Type your email or phone"
                aria-label="Type your email or phone"
                aria-describedby="mail"
                value="singh@email.com"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlPassword" class="form-label mb-1">
              Password
            </label>
            <div
              class="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlPassword">
              <span
                class="input-group-text bg-transparent rounded-0 border-0"
                id="password">
                <span class="mdi mdi-lock-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="password"
                class="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Type your password"
                aria-label="Type your password"
                aria-describedby="password"
                value="123456789"
              />
            </div>
          </div>
          <div class="form-check form-switch mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Remember Me
            </label>
          </div>
          <div>
            <a
              href="home.html"
              class="btn btn-info btn-lg w-100 rounded-4 mb-2">
              Login
            </a>
            <div class="d-flex justify-content-between mt-2">
              <a
                href="forget-password.html"
                class="d-flex justify-content-end small text-primary">
                Forget Password?
              </a>
              <Link to="/auth/app/Reset-password" className="forgotten">
                <p class="text-muted text-end small">forgotten?</p>
              </Link>
              Don't have an account?
              <Link to="/auth/app/Signup" className="forgotten">
                <p class="text-muted text-end small">Sign up </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
