import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const UserProfile = () => {
  return (
    <div class="my-profile d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          href="home.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <div class="d-flex align-items-center gap-2 ms-3 me-auto">
          <a href="doctor-profile.html">
            <img
              src={images["profile-2.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon"
            />
          </a>
          <div>
            <p class="mb-0 fw-bold">Mr Ahmed Hassan</p>
            <p class="text-orange m-0 small">@ahmedhassan</p>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <a
            class="toggle d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon hc-nav-trigger hc-nav-1"
            href="my-profile.html#"
            role="button"
            aria-controls="hc-nav-1">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto body-fix-osahan-footer">
        <div class="p-3">
          <div class="bg-white rounded-4 px-3 pt-3 overflow-hidden edit-profile-back shadow mb-3">
            <h6 class="pb-2">Personal Info</h6>
            <div class="d-flex">
              <div class="col">
                <p>
                  <span class="text-muted small">Name</span>
                  <br />
                  Mr Ahmed Hassan
                </p>
              </div>
              <div class="col">
                <p>
                  <span class="text-muted small">Date of Birth</span>
                  <br />
                  11 Jan 2000
                </p>
              </div>
            </div>
            <div class="d-flex">
              <div class="col">
                <p>
                  <span class="text-muted small">Gender</span>
                  <br />
                  Male
                </p>
              </div>
              <div class="col">
                <p>
                  <span class="text-muted small">Phone</span>
                  <br />
                  0806 547 5245
                </p>
              </div>
            </div>
            <div class="d-flex">
              <div class="col">
                <p>
                  <span class="text-muted small">Email</span>
                  <br />
                  <a href="../../cdn-cgi/l/email-protection.html">
                    talk2ahmedpeter@gmail.com
                  </a>
                </p>
              </div>
              <div class="col">
                <p>
                  <span class="text-muted small">Loaction</span>
                  <br />
                  Abuja - Nigeria
                </p>
              </div>
            </div>
            <a href="change-profile.html" class="link-dark">
              <div class="edit-profile-icon bg-primary text-white">
                <span class="mdi mdi-square-edit-outline h2 m-0 pt-3 pe-2"></span>
              </div>
            </a>
          </div>
          <div class="rounded-4 shadow overflow-hidden">
            <Link to="/appointment/con/8/pat/4/12" class="link-dark">
              <div class="bg-white d-flex align-items-center justify-content-between p-3 border-bottom">
                <h6 class="m-0">My Appointment</h6>
                <span class="mdi mdi-chevron-right mdi-24px icon shadow rounded-pill"></span>
              </div>
            </Link>
            <Link to="/patient/6/history" class="link-dark">
              <div class="bg-white d-flex align-items-center justify-content-between p-3 border-bottom">
                <h6 class="m-0">History</h6>
                <span class="mdi mdi-chevron-right mdi-24px icon shadow rounded-pill"></span>
              </div>
            </Link>
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

export default UserProfile;
