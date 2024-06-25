import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const History = () => {
  return (
    <div class="history d-flex flex-column vh-100">
      <div class="bg-white shadow-sm border-bottom">
        <div class="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
          <div class="d-flex align-items-center me-auto">
            <a
              href="my-profile.html"
              class="text-dark bg-white shadow rounded-circle icon">
              <span class="mdi mdi-arrow-left mdi-18px"></span>
            </a>
            <h6 class="mb-0 ms-3 me-auto fw-bold">History</h6>
          </div>
          <div class="d-flex align-items-center gap-2">
            <a href="favorite-doctor.html" class="text-white fs-5">
              <i class="bi bi-pencil"></i>
            </a>
            <a
              class="toggle d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon"
              href="history.html#">
              <i class="bi bi-list"></i>
            </a>
          </div>
        </div>
        <div class="px-3 pb-3">
          <form>
            <div class="input-group rounded-4 py-1 px-3 bg-light shadow">
              <span
                class="input-group-text bg-transparent text-primary border-0 p-0"
                id="search">
                <span class="mdi mdi-magnify mdi-24px"></span>
              </span>
              <input
                type="text"
                class="form-control bg-transparent text-muted border-0 px-3 fs-14"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search"
              />
              <a
                href="history.html#"
                class="input-group-text bg-transparent text-muted border-0 border-start pe-0"
                id="search">
                <span class="mdi mdi-filter-outline mdi-18px"></span>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto body-fix-osahan-footer">
        <div>
          <ul
            class="nav doctor-profile-tabs shadow-sm"
            id="pills-tab"
            role="tablist">
            <li class="nav-item col" role="presentation">
              <button
                class="nav-link w-100 active"
                id="pills-message-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-message"
                type="button"
                role="tab"
                aria-controls="pills-message"
                aria-selected="true">
                Message
              </button>
            </li>
            <li class="nav-item col" role="presentation">
              <button
                class="nav-link w-100"
                id="pills-voice-call-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-voice-call"
                type="button"
                role="tab"
                aria-controls="pills-voice-call"
                aria-selected="false">
                Voice Call
              </button>
            </li>
            <li class="nav-item col" role="presentation">
              <button
                class="nav-link w-100"
                id="pills-video-call-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-video-call"
                type="button"
                role="tab"
                aria-controls="pills-video-call"
                aria-selected="false">
                Video Call
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-message"
              role="tabpanel"
              aria-labelledby="pills-message-tab"
              tabindex="0">
              <h6 class="mb-0 text-black fw-bold p-3">Today</h6>
              <div class="mb-4">
                <a href="history.html#" class="link-dark">
                  <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                    <img
                      src={images["favorite-1.jpg"]}
                      alt=""
                      class="img-fluid rounded-4 message-profile"
                    />
                    <div>
                      <h6 class="mb-1">Dr. Cayden Stack</h6>
                      <p class="text-muted m-0 small">
                        I am cardio patient. I need your help
                      </p>
                    </div>
                  </div>
                </a>
                <a href="history.html#" class="link-dark">
                  <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                    <img
                      src={images["favorite-2.jpg"]}
                      alt=""
                      class="img-fluid rounded-4 message-profile"
                    />
                    <div>
                      <h6 class="mb-1">Dr. Pankaj</h6>
                      <p class="text-muted m-0 small">
                        I am cardio patient. I need your help
                      </p>
                    </div>
                  </div>
                </a>
                <a href="history.html#" class="link-dark">
                  <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                    <img
                      src={images["favorite-3.jpg"]}
                      alt=""
                      class="img-fluid rounded-4 message-profile"
                    />
                    <div>
                      <h6 class="mb-1">Dr. Mohan</h6>
                      <p class="text-muted m-0 small">
                        I am cardio patient. I need your help
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <h6 class="mb-0 text-black fw-bold p-3">Yesterday</h6>
              <div>
                <a href="history.html#" class="link-dark">
                  <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                    <img
                      src={images["favorite-4.jpg"]}
                      alt=""
                      class="img-fluid rounded-4 message-profile"
                    />
                    <div>
                      <h6 class="mb-1">Dr. Riya</h6>
                      <p class="text-muted m-0 small">
                        I am cardio patient. I need your help
                      </p>
                    </div>
                  </div>
                </a>
                <a href="history.html#" class="link-dark">
                  <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                    <img
                      src={images["favorite-5.jpg"]}
                      alt=""
                      class="img-fluid rounded-4 message-profile"
                    />
                    <div>
                      <h6 class="mb-1">Dr. Taylor Samaro</h6>
                      <p class="text-muted m-0 small">
                        I am cardio patient. I need your help
                      </p>
                    </div>
                  </div>
                </a>
                <a href="history.html#" class="link-dark">
                  <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                    <img
                      src={images["favorite-2.jpg"]}
                      alt=""
                      class="img-fluid rounded-4 message-profile"
                    />
                    <div>
                      <h6 class="mb-1">Dr. Cayden Stack</h6>
                      <p class="text-muted m-0 small">
                        I am cardio patient. I need your help
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-voice-call"
              role="tabpanel"
              aria-labelledby="pills-voice-call-tab"
              tabindex="0">
              <div class="mb-4">
                <h6 class="mb-0 text-black fw-bold p-3">Today</h6>
                <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                  <img
                    src={images["available-doctor-1.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h6 class="mb-0 text-black fw-bold p-3">Yesterday</h6>
                <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <img
                    src={images["available-doctor-2.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
                </div>
                <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <img
                    src={images["available-doctor-3.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
                </div>
                <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <img
                    src={images["available-doctor-5.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-video-call"
              role="tabpanel"
              aria-labelledby="pills-video-call-tab"
              tabindex="0">
              <div class="mb-4">
                <h6 class="mb-0 text-black fw-bold p-3">Today</h6>
                <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 mb-1">
                  <img
                    src={images["available-doctor-1.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h6 class="mb-0 text-black fw-bold p-3">Yesterday</h6>
                <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <img
                    src={images["available-doctor-2.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
                </div>
                <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <img
                    src={images["available-doctor-3.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
                </div>
                <div class="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <img
                    src={images["available-doctor-5.jpg"]}
                    alt=""
                    class="img-fluid rounded-4 voice-img"
                  />
                  <div>
                    <h6 class="mb-1">Dr. Cayden Stack</h6>
                    <p class="text-muted mb-1">
                      Voice Call
                      <span class="badge bg-success-subtle text-success fw-normal rounded-pill px-2 ms-2">
                        COMPLETE
                      </span>
                    </p>
                    <p class="text-muted m-0 small">Today, 2:00 - 2:30 PM</p>
                  </div>
                  <div class="ms-auto">
                    <a href="history.html#" class="btn btn-light icon">
                      <span class="mdi mdi-arrow-right mdi-18px text-primary"></span>
                    </a>
                  </div>
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

export default History;
