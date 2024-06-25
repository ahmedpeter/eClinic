import { Link } from "react-router-dom";

import { importAllImages } from "../util/imageImporter";
const images = importAllImages();

const Consultants = () => {
  return (
    <div class="select-area d-flex flex-column vh-100">
      <div class="bg-white shadow-sm">
        <div class="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
          <div class="d-flex align-items-center gap-2 me-auto">
            <a
              href="home.html"
              class="text-dark bg-white shadow rounded-circle icon">
              <span class="mdi mdi-arrow-left mdi-18px"></span>
            </a>
          </div>
          <div class="d-flex align-items-center gap-3">
            <a
              class="toggle text-muted d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon"
              href="search.html#">
              <i class="bi bi-list"></i>
            </a>
          </div>
        </div>
        <div class="px-3 pb-3">
          <form>
            <div class="input-group rounded-4 shadow overflow-hidden border-0 py-1 ps-3 bg-light">
              <span
                class="input-group-text bg-transparent text-muted border-0 p-0"
                id="search">
                <span class="mdi mdi-magnify mdi-24px text-primary"></span>
              </span>
              <input
                type="text"
                class="form-control bg-transparent text-muted border-0 px-3 fs-14"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto body-fix-osahan-footer">
        <div class="py-3">
          <div>
            <h6 class="mb-2 pb-1 px-3 fw-bold text-black">Specialist</h6>

            <a href="doctor-profile.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 bg-white border-bottom shadow-sm p-3">
                <img
                  src={images["favorite-1.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 favorite-img"
                />
                <div class="small">
                  <h6 class="mb-1 fs-14">Dr. Taylor Samaro</h6>
                  <div class="d-flex align-items-center gap-1 small">
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="text-warning">4.9</span>
                    <span>(5,380)</span>
                  </div>
                  <small class="text-muted">
                    Dentist- Cumilla Medical Collage
                  </small>
                </div>
              </div>
            </a>

            <a href="doctor-profile.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 bg-white border-bottom shadow-sm p-3">
                <img
                  src={images["favorite-2.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 favorite-img"
                />
                <div class="small">
                  <h6 class="mb-1 fs-14">Dr. Cayden Stack</h6>
                  <div class="d-flex align-items-center gap-1 small">
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="text-warning">4.9</span>
                    <span>(5,380)</span>
                  </div>
                  <small class="text-muted">
                    Dentist- Cumilla Medical Collage
                  </small>
                </div>
              </div>
            </a>

            <a href="doctor-profile.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 bg-white border-bottom shadow-sm p-3">
                <img
                  src={images["favorite-3.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 favorite-img"
                />
                <div class="small">
                  <h6 class="mb-1 fs-14">Dr. Morgan</h6>
                  <div class="d-flex align-items-center gap-1 small">
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="text-warning">4.9</span>
                    <span>(5,380)</span>
                  </div>
                  <small class="text-muted">
                    Dentist- Cumilla Medical Collage
                  </small>
                </div>
              </div>
            </a>

            <a href="doctor-profile.html" class="link-dark">
              <div class="d-flex align-items-center gap-3 bg-white border-bottom shadow-sm p-3">
                <img
                  src={images["favorite-4.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 favorite-img"
                />
                <div class="small">
                  <h6 class="mb-1 fs-14">Dr. Leabow</h6>
                  <div class="d-flex align-items-center gap-1 small">
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="mdi mdi-star text-warning"></span>
                    <span class="text-warning">4.9</span>
                    <span>(5,380)</span>
                  </div>
                  <small class="text-muted">
                    Dentist- Cumilla Medical Collage
                  </small>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="mb-3">
          <h6 class="mb-2 pb-1 fw-bold px-3 text-black">Available Doctor</h6>
          <div class="available-doctor ps-2 ms-1">
            <div class="available-doctor-item">
              <div class="bg-primary text-white rounded-4 p-3 doctor-book-back">
                <h1 class="mb-1 doctor-book-back-title">
                  Book Your Next
                  <span class="h4 text-warning overflow-hidden rounded-4 m-0 bg-white">
                    <b class="bg-light-subtle text-primary px-1 rounded">
                      Appointment
                    </b>
                    <b class="bg-info fw-normal text-white px-1 rounded">
                      Online!
                    </b>
                  </span>
                </h1>
                <p class="mb-2 text-white-50 small">Book Now and Get 30% OFF</p>
                <a
                  href="request-appointment.html"
                  class="btn btn-sm btn-book btn-secondary">
                  BOOK NOW <i class="bi bi-arrow-right"></i>
                </a>
                <div class="doctor-book-img">
                  <img
                    src={images["available-doctor-1.png"]}
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="available-doctor-item">
              <div class="btn-info text-white rounded-4 p-3 doctor-book-back">
                <h1 class="mb-1 doctor-book-back-title">
                  <span class="h4 overflow-hidden m-0">
                    <b class="text-primary">Find Your Dental</b>
                  </span>
                  Specialist Doctor
                </h1>
                <p class="mb-2 small">
                  Dr. Samaro
                  <span class="bg-white rounded-pill px-1 small text-orange">
                    <i class="mdi mdi-star"></i> 4.9
                  </span>
                </p>
                <a href="search.html#" class="btn btn-sm btn-primary btn-book">
                  BOOK NOW <i class="bi bi-arrow-right"></i>
                </a>
                <div class="doctor-book-img">
                  <img
                    src={images["available-doctor-3.png"]}
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="available-doctor-item">
              <div class="btn-secondary text-white rounded-4 p-3 doctor-book-back">
                <h1 class="mb-1 doctor-book-back-title">
                  Find the Right <br />
                  <span class="h4 text-warning overflow-hidden rounded-4 m-0">
                    <b class="bg-warning text-black px-1 rounded">
                      Doctor for Your
                    </b>
                    <b class="text-black">Needs!</b>
                  </span>
                </h1>
                <p class="mb-2 text-white small">Book Now and Get 30% OFF</p>
                <a href="search.html#" class="btn btn-sm btn-dark btn-book">
                  BOOK NOW <i class="bi bi-arrow-right"></i>
                </a>
                <div class="doctor-book-img">
                  <img
                    src={images["available-doctor-2.png"]}
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer mt-auto fix-osahan-footer">
        <div class="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
          <Link to="/app/dashboard" class="col footer-bottom-nav active">
            <span class="mdi mdi-home-variant-outline mdi-24px"></span>
            <span>Home</span>
          </Link>
          <Link to="" class="col footer-bottom-nav">
            <span class="mdi mdi-magnify mdi-24px"></span>
            <span>Search</span>
          </Link>
          <Link to="/messages" class="col footer-bottom-nav">
            <span class="mdi mdi-video-outline mdi-24px"></span>
            <span>Video</span>
          </Link>
          <Link to="/messages" class="col footer-bottom-nav">
            <span class="mdi mdi-message-processing-outline mdi-24px"></span>
            <span>Chat</span>
          </Link>
          <Link to="/profile/12" class="col footer-bottom-nav">
            <span class="mdi mdi-account-outline mdi-24px"></span>
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Consultants;
