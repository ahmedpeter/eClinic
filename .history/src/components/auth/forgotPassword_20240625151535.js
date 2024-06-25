import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const ForgotPassword = () => {
  return (
    <div class="sign-in p-4">
      <div
        class="align-items-start justify-content-between mb-4"
        style={{ textAlign: "center", marginTop: 20 }}>
        <div>
          <img src={images["logo.svg"]} alt="" class="img-fluid logo" />
          <h2 class="my-3 fw-bold">Forgot Password</h2>
          <p class="text-muted mb-0">
            We need your registration email account to send you password reset
            code!
          </p>
        </div>
      </div>
      <form style={{ marginTop: 80 }}>
        <div class="mb-2">
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
      </form>
      <div class="footer fixed-bottom m-4">
        <a
          href="reset-password.html"
          class="btn btn-info btn-lg w-100 rounded-4">
          Send
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
