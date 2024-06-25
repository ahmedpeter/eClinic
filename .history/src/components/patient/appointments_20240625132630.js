import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const Appointments = () => {
  return (
    <div class="my-appointment d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm border-bottom osahan-header">
        <a
          href="my-profile.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 class="mb-0 ms-3 me-auto fw-bold">My Appointment</h6>
        <div class="d-flex align-items-center gap-3">
          <a
            class="toggle d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon"
            href="my-appointment.html#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto body-fix-osahan-footer">
        <ul
          class="nav doctor-profile-tabs mb-2 shadow-sm"
          id="pills-tab"
          role="tablist">
          <li class="nav-item col" role="presentation">
            <button
              class="nav-link w-100 active"
              id="pills-upcoming-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-upcoming"
              type="button"
              role="tab"
              aria-controls="pills-upcoming"
              aria-selected="true">
              Upcoming
            </button>
          </li>
          <li class="nav-item col" role="presentation">
            <button
              class="nav-link w-100"
              id="pills-past-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-past"
              type="button"
              role="tab"
              aria-controls="pills-past"
              aria-selected="false">
              Past
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-upcoming"
            role="tabpanel"
            aria-labelledby="pills-upcoming-tab"
            tabindex="0">
            <a href="my-appointment-upcoming.html" class="link-dark">
              <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                <img
                  src={images["available-doctor-1.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 voice-img"
                />
                <div>
                  <h6 class="mb-1">Dr. Mahububa Islam</h6>
                  <p class="text-muted mb-2">Gynecology</p>
                  <p class="text-muted m-0">
                    <span class="mdi mdi-calendar-month text-primary me-1"></span>
                    20 Nov 2023
                  </p>
                </div>
                <div class="ms-auto">
                  <div class="d-flex justify-content-end">
                    <div class="bg-info-subtle rounded-circle icon mb-3">
                      <span class="mdi mdi-phone-outline mdi-18px text-info"></span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                    RUNNING
                  </span>
                </div>
              </div>
            </a>
            <a href="my-appointment-upcoming.html" class="link-dark">
              <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                <img
                  src={images["available-doctor-2.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 voice-img"
                />
                <div>
                  <h6 class="mb-1">Dr. Morgan</h6>
                  <p class="text-muted mb-2">Dentist</p>
                  <p class="text-muted m-0">
                    <span class="mdi mdi-calendar-month text-primary me-1"></span>
                    18 Nov 2023
                  </p>
                </div>
                <div class="ms-auto">
                  <div class="d-flex justify-content-end">
                    <div class="bg-info-subtle rounded-circle icon mb-3">
                      <span class="mdi mdi-phone-outline mdi-18px text-info"></span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                    RUNNING
                  </span>
                </div>
              </div>
            </a>
            <a href="my-appointment-upcoming.html" class="link-dark">
              <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                <img
                  src={images["available-doctor-3.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 voice-img"
                />
                <div>
                  <h6 class="mb-1">Dr. Leabow</h6>
                  <p class="text-muted mb-2">Gynecology</p>
                  <p class="text-muted m-0">
                    <span class="mdi mdi-calendar-month text-primary me-1"></span>
                    15 Nov 2023
                  </p>
                </div>
                <div class="ms-auto">
                  <div class="d-flex justify-content-end">
                    <div class="bg-info-subtle rounded-circle icon mb-3">
                      <span class="mdi mdi-phone-outline mdi-18px text-info"></span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                    RUNNING
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div
            class="tab-pane fade"
            id="pills-past"
            role="tabpanel"
            aria-labelledby="pills-past-tab"
            tabindex="0">
            <a href="my-appointment.html#" class="link-dark">
              <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                <img
                  src={images["available-doctor-4.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 voice-img"
                />
                <div>
                  <h6 class="mb-1">Dr. Mahububa Islam</h6>
                  <p class="text-muted mb-2">Gynecology</p>
                  <p class="text-muted m-0">
                    <span class="mdi mdi-calendar-month text-primary me-1"></span>
                    20 Nov 2023
                  </p>
                </div>
                <div class="ms-auto">
                  <div class="d-flex justify-content-end">
                    <div class="bg-info-subtle rounded-circle icon mb-3">
                      <span class="mdi mdi-phone-outline mdi-18px text-info"></span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                    COMPLETE
                  </span>
                </div>
              </div>
            </a>
            <a href="my-appointment.html#" class="link-dark">
              <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                <img
                  src={images["available-doctor-5.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 voice-img"
                />
                <div>
                  <h6 class="mb-1">Dr. Morgan</h6>
                  <p class="text-muted mb-2">Dentist</p>
                  <p class="text-muted m-0">
                    <span class="mdi mdi-calendar-month text-primary me-1"></span>
                    18 Nov 2023
                  </p>
                </div>
                <div class="ms-auto">
                  <div class="d-flex justify-content-end">
                    <div class="bg-info-subtle rounded-circle icon mb-3">
                      <span class="mdi mdi-phone-outline mdi-18px text-info"></span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                    COMPLETE
                  </span>
                </div>
              </div>
            </a>
            <a href="my-appointment.html#" class="link-dark">
              <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                <img
                  src={images["top-doctor-2.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 voice-img"
                />
                <div>
                  <h6 class="mb-1">Dr. Leabow</h6>
                  <p class="text-muted mb-2">Gynecology</p>
                  <p class="text-muted m-0">
                    <span class="mdi mdi-calendar-month text-primary me-1"></span>
                    15 Nov 2023
                  </p>
                </div>
                <div class="ms-auto">
                  <div class="d-flex justify-content-end">
                    <div class="bg-info-subtle rounded-circle icon mb-3">
                      <span class="mdi mdi-phone-outline mdi-18px text-info"></span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                    COMPLETE
                  </span>
                </div>
              </div>
            </a>
            <a href="my-appointment.html#" class="link-dark">
              <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                <img
                  src={images["top-doctor-1.jpg"]}
                  alt=""
                  class="img-fluid rounded-4 voice-img"
                />
                <div>
                  <h6 class="mb-1">Dr. Leabow</h6>
                  <p class="text-muted mb-2">Gynecology</p>
                  <p class="text-muted m-0">
                    <span class="mdi mdi-calendar-month text-primary me-1"></span>
                    10 Nov 2023
                  </p>
                </div>
                <div class="ms-auto">
                  <div class="d-flex justify-content-end">
                    <div class="bg-info-subtle rounded-circle icon mb-3">
                      <span class="mdi mdi-phone-outline mdi-18px text-info"></span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                    COMPLETE
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="footer mt-auto p-3 fix-osahan-footer">
        <div class="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
          <a href="home.html" class="col footer-bottom-nav">
            <span class="mdi mdi-home-variant-outline mdi-24px"></span>
            <span>Home</span>
          </a>
          <a href="search.html" class="col footer-bottom-nav">
            <span class="mdi mdi-magnify mdi-24px"></span>
            <span>Search</span>
          </a>
          <a href="video.html" class="col footer-bottom-nav">
            <span class="mdi mdi-video-outline mdi-24px"></span>
            <span>Video</span>
          </a>
          <a href="message.html" class="col footer-bottom-nav">
            <span class="mdi mdi-message-processing-outline mdi-24px"></span>
            <span>Chat</span>
          </a>
          <a href="my-profile.html" class="col footer-bottom-nav active">
            <span class="mdi mdi-account-outline mdi-24px"></span>
            <span>Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
