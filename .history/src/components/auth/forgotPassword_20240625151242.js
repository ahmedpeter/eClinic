import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const ForgotPassword = () => {
  return (
    <section>
      <div class="sign-in p-4">
        <div
          class="align-items-start justify-content-between mb-4"
          style={{ textAlign: "center", marginTop: 20 }}>
          <div>
            <img src={images["logo.svg"]} alt="" class="img-fluid logo" />
            <h2 class="my-3 fw-bold">Forget Password</h2>
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
      </div>

      <div class="footer fixed-bottom m-4">
        <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
          <hr class="col" />
          <span>Or Continue With</span>
          <hr class="col" />
        </div>
        <div class="d-flex gap-2">
          <a
            href="sign-in-email.html"
            class="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border">
            <i class="bi bi-google h4 mb-0 me-3"></i>Google
          </a>
          <a
            href="sign-in-email.html"
            class="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border">
            <i class="bi bi-apple h4 mb-0 me-3"></i>Apple
          </a>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-bottom bg-light overflow-hidden"
        tabindex="-1"
        id="offcanvasBottomCountry"
        aria-labelledby="offcanvasBottomCountryLabel"
        style={{ height: "85%" }}>
        <form class="p-3 shadow-sm bg-white">
          <div class="input-group rounded-4 py-1 px-3 border bg-white">
            <span
              class="input-group-text bg-transparent text-muted border-0 p-0"
              id="search">
              <span class="mdi mdi-magnify mdi-24px"></span>
            </span>
            <input
              type="text"
              class="form-control text-muted border-0 px-3"
              placeholder="Search country"
              aria-label="Search"
              aria-describedby="search"
            />
          </div>
        </form>
        <div class="offcanvas-body p-0">
          <div>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/australia.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>Australia</div>
                <p class="text-black fs-14 m-0 ms-auto">+61</p>
              </div>
            </a>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/indonasia.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>Indonesia</div>
                <p class="text-black fs-14 m-0 ms-auto">+62</p>
              </div>
            </a>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/malaysia.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>Malaysia</div>
                <p class="text-black fs-14 m-0 ms-auto">+60</p>
              </div>
            </a>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/usa.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>USA</div>
                <p class="text-black fs-14 m-0 ms-auto">+1</p>
              </div>
            </a>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/south-arabica.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>South Arabica</div>
                <p class="text-black fs-14 m-0 ms-auto">+966</p>
              </div>
            </a>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/australia.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>Australia</div>
                <p class="text-black fs-14 m-0 ms-auto">+61</p>
              </div>
            </a>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/indonasia.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>Indonesia</div>
                <p class="text-black fs-14 m-0 ms-auto">+62</p>
              </div>
            </a>
            <a href="verify.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 border-bottom p-3 border-bottom">
                <img
                  src="img/flags/malaysia.png"
                  alt=""
                  class="img-fluid rounded-circle flag-img"
                />
                <div>Malaysia</div>
                <p class="text-black fs-14 m-0 ms-auto">+60</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
