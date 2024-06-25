import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const Login = () => {
  return (
    <div class="sign-in p-4">
      <div class="align-items-start justify-content-between mb-4">
        <div>
          <img src={images["logo.svg"]} alt="" class="img-fluid logo" />
          <h2 class="my-3 fw-bold">Let's Sign in</h2>
          <p class="text-muted mb-0">Welcome Back, You've been missed!</p>
        </div>
      </div>
      <form style={{ marginTop: 120 }}>
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
              value="talk2ahmedpeter@gmail.com"
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
        <div style={{ marginTop: 80 }}>
          <Link to="/app/dashboard" className="btn btn-info btn-lg w-100 mb-2">
            Login{" "}
          </Link>
          <div class="d-flex justify-content-between mt-2">
            <Link
              to="/auth/reset"
              className="d-flex justify-content-end small text-primary">
              Forget Password?
            </Link>
            <p class="text-muted text-end small">
              Don't have an account?
              <Link to="/auth/register" className="text-primary">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
