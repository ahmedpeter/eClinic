import { Link } from "react-router-dom";
import { importAllImages } from "./util/imageImporter";

const images = importAllImages();

const SplashScreen = () => {
  return (
    <div
      class="index d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#014cc4" }}>
      <div class="text-center p-3">
        <div class="mb-5 pb-5">
          <a href="landing.html" class="gap-2 text-white text-center">
            <div class="rounded-pill bg-white p-3 d-inline-block mb-4">
              <img src={images["logo.svg"]} alt="" class="img-fluid logo" />
            </div>
            <h1 class="mb-0">Quick Clinic</h1>
          </a>
        </div>
        <div class="footer fixed-bottom p-3">
          <Link to="/auth" class="btn btn-secondary btn-lg w-100">
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
