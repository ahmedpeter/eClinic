import { Link } from "react-router-dom";

import { importAllImages } from "../util/imageImporter";
const images = importAllImages();

const ConsultantProfile = () => {
  return (
    <div class="doctor-profile d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          href="home.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 class="mb-0 ms-3 me-auto fw-bold">Doctor Profile</h6>
        <div class="d-flex align-items-center gap-2">
          <a
            href="favorite-doctor.html"
            class="text-dark bg-white shadow rounded-circle icon">
            <span class="mdi mdi-cards-heart-outline mdi-18px text-primary"></span>
          </a>
          <a
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasshare"
            aria-controls="offcanvasshare"
            href="doctor-profile.html#"
            class="text-dark bg-white shadow rounded-circle icon">
            <span class="mdi mdi-share-variant-outline mdi-18px"></span>
          </a>
          <a
            class="toggle d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon"
            href="doctor-profile.html#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto">
        <div class="px-4 bg-primary">
          <div class="d-flex align-items-center gap-4">
            <img
              src={images["appointment-doctor.png"]}
              alt=""
              class="img-fluid appointment-doctor-img"
            />
            <div>
              <h6 class="text-white">Consultation Fee</h6>
              <h1 class="text-warning mb-0 fw-bold">
                $199
                <span class="text-white-50 fw-normal fs-6">Inc. VAT</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="p-3 bg-white">
          <div class="mb-3">
            <h6 class="mb-1">Dr. Cayden Stack</h6>
            <p class="small">
              MBBS - <span class="text-muted">Gynecology</span>
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-3 col">
              <span class="mdi mdi-account-supervisor-outline mdi-24px text-info"></span>
              <div>
                <p class="mb-0 small text-muted">Patient</p>
                <p class="text-primary m-0 fw-bold">2.05K</p>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3 col">
              <span class="mdi mdi-star-outline mdi-24px text-info"></span>
              <div>
                <p class="mb-0 small text-muted">Review</p>
                <p class="text-primary m-0 fw-bold">5.3K</p>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3 col">
              <span class="mdi mdi-medal-outline mdi-24px text-info"></span>
              <div>
                <p class="mb-0 small text-muted">Experience</p>
                <p class="text-primary m-0 fw-bold">7 Years</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white shadow-sm border-top">
          <ul
            class="nav doctor-profile-tabs gap-1 p-0"
            id="pills-tab"
            role="tablist">
            <li class="nav-item col" role="presentation">
              <button
                class="nav-link w-100"
                id="pills-info-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-info"
                type="button"
                role="tab"
                aria-controls="pills-info"
                aria-selected="true">
                Info
              </button>
            </li>
            <li class="nav-item col" role="presentation">
              <button
                class="nav-link w-100"
                id="pills-experience-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-experience"
                type="button"
                role="tab"
                aria-controls="pills-experience"
                aria-selected="false">
                Experience
              </button>
            </li>
            <li class="nav-item col" role="presentation">
              <button
                class="nav-link w-100 active"
                id="pills-review-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-review"
                type="button"
                role="tab"
                aria-controls="pills-review"
                aria-selected="false">
                Review
              </button>
            </li>
          </ul>
        </div>
        <div class="mb-3">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade p-3"
              id="pills-info"
              role="tabpanel"
              aria-labelledby="pills-info-tab"
              tabindex="0">
              <h6 class="pb-2 mb-0">About Doctor</h6>
              <p class="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae possimus, nulla voluptatum commodi unde assumenda
                deleniti ullam ex minus corporis error, delectus ea facere illo
                neque saepe velit non? Aliquid.
              </p>
            </div>

            <div
              class="tab-pane fade p-3"
              id="pills-experience"
              role="tabpanel"
              aria-labelledby="pills-experience-tab"
              tabindex="0">
              <div class="bg-white rounded-4 p-3 mb-3 shadow-sm">
                <h6 class="mb-3">Amercan Medical College & Hospital</h6>
                <p class="text-muted mb-2">
                  Designation
                  <br />
                  <span class="text-dark">Residential medical officer</span>
                </p>
                <p class="text-muted mb-2">
                  Department
                  <br />
                  <span class="text-dark">Gynae and abs</span>
                </p>
                <p class="text-muted mb-0">
                  Employment Period
                  <br />
                  <span class="text-dark">Jan 1 ,2017 - Jun 15, 2021</span>
                </p>
              </div>
              <div class="bg-white rounded-4 p-3 mb-3 shadow-sm">
                <h6 class="mb-3">Chouddagram Govt Hospital</h6>
                <p class="text-muted mb-2">
                  Designation
                  <br />
                  <span class="text-dark">Medical officer</span>
                </p>
                <p class="text-muted mb-2">
                  Department
                  <br />
                  <span class="text-dark">Gynae and abs</span>
                </p>
                <p class="text-muted mb-0">
                  Employment Period
                  <br />
                  <span class="text-dark">Jan 1 ,2016 - Jun 15, 2023</span>
                </p>
              </div>
              <div class="bg-white rounded-4 p-3 mb-3 shadow-sm">
                <h6 class="mb-3">BSMMU</h6>
                <p class="text-muted mb-2">
                  Designation
                  <br />
                  <span class="text-dark">Medical officer</span>
                </p>
                <p class="text-muted mb-2">
                  Department
                  <br />
                  <span class="text-dark">Gynae</span>
                </p>
                <p class="text-muted mb-0">
                  Employment Period
                  <br />
                  <span class="text-dark">May 1 ,2019 - Jun 15, 2023</span>
                </p>
              </div>
              <div class="bg-white rounded-4 p-3 mb-3 shadow-sm">
                <h6 class="mb-3">Lab Aid Hospital</h6>
                <p class="text-muted mb-2">
                  Designation
                  <br />
                  <span class="text-dark">Residential medical officer</span>
                </p>
                <p class="text-muted mb-2">
                  Department
                  <br />
                  <span class="text-dark">Gynae and obs</span>
                </p>
                <p class="text-muted mb-0">
                  Employment Period
                  <br />
                  <span class="text-dark">jan 1 ,2018 - Jun 15, 2023</span>
                </p>
              </div>
            </div>

            <div
              class="tab-pane fade show active"
              id="pills-review"
              role="tabpanel"
              aria-labelledby="pills-review-tab"
              tabindex="0">
              <h6 class="pb-3 px-3 pt-3 mb-0">Review (2350)</h6>
              <div class="bg-white shadow-sm d-flex align-items-center gap-2 py-2 px-3 border-bottom">
                <img
                  src={images["profile-1.jpg"]}
                  alt=""
                  class="img-fluid rounded-pill review-profile"
                />
                <div>
                  <p class="mb-0 fw-bold">Sadia</p>
                  <p class="text-muted small m-0">Oct 31, 2023</p>
                </div>
                <div class="ms-auto text-center">
                  <div class="d-flex align-items-center gap-1 small text-warning">
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="badge rounded-pill text-bg-warning ms-1">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow-sm d-flex align-items-center gap-2 py-2 px-3 border-bottom">
                <img
                  src={images["profile-2.jpg"]}
                  alt=""
                  class="img-fluid rounded-pill review-profile"
                />
                <div>
                  <p class="mb-0 fw-bold">Mahabuba</p>
                  <p class="text-muted small m-0">Oct 31, 2023</p>
                </div>
                <div class="ms-auto text-center">
                  <div class="d-flex align-items-center gap-1 small text-warning">
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="badge rounded-pill text-bg-warning ms-1">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow-sm d-flex align-items-center gap-2 py-2 px-3 border-bottom">
                <img
                  src={images["profile-3.jpg"]}
                  alt=""
                  class="img-fluid rounded-pill review-profile"
                />
                <div>
                  <p class="mb-0 fw-bold">Faiza</p>
                  <p class="text-muted small m-0">Oct 31, 2023</p>
                </div>
                <div class="ms-auto text-center">
                  <div class="d-flex align-items-center gap-1 small text-warning">
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="badge rounded-pill text-bg-warning ms-1">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow-sm d-flex align-items-center gap-2 py-2 px-3 border-bottom">
                <img
                  src={images["profile-4.jpg"]}
                  alt=""
                  class="img-fluid rounded-pill review-profile"
                />
                <div>
                  <p class="mb-0 fw-bold">Nipa</p>
                  <p class="text-muted small m-0">Oct 31, 2023</p>
                </div>
                <div class="ms-auto text-center">
                  <div class="d-flex align-items-center gap-1 small text-warning">
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="badge rounded-pill text-bg-warning ms-1">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow-sm d-flex align-items-center gap-2 py-2 px-3 border-bottom">
                <img
                  src={images["profile-5.jpg"]}
                  alt=""
                  class="img-fluid rounded-pill review-profile"
                />
                <div>
                  <p class="mb-0 fw-bold">Rumpa</p>
                  <p class="text-muted small m-0">Oct 31, 2023</p>
                </div>
                <div class="ms-auto text-center">
                  <div class="d-flex align-items-center gap-1 small text-warning">
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="badge rounded-pill text-bg-warning ms-1">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <a
                  href="doctor-profile.html#"
                  class="text-decoration-underline text-primary fw-bold">
                  Tab here to see all reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer d-grid mt-auto p-3">
        <div class="d-flex gap-2">
          <a
            href="call-doctor.html"
            class="btn btn-outline-info bg-light btn-lg col">
            <i class="bi bi-camera-video-fill me-2"></i> Call
          </a>
          <a href="request-appointment.html" class="btn btn-info btn-lg col">
            Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;
