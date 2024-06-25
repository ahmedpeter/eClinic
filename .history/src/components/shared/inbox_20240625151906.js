import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";
const images = importAllImages();

const MessageInbox = () => {
  return (
    <div class="message d-flex flex-column vh-100">
      <div class="bg-white shadow-sm mb-2">
        <div class="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
          <div class="d-flex align-items-center me-auto">
            <a
              href="home.html"
              class="text-dark bg-white shadow rounded-circle icon">
              <span class="mdi mdi-arrow-left mdi-18px"></span>
            </a>
            <h6 class="mb-0 ms-3 me-auto fw-bold">Message</h6>
          </div>
        </div>
        <div class="px-3 pb-3">
          <form>
            <div class="input-group rounded-4 py-1 px-3 bg-light shadow">
              <span
                class="input-group-text bg-transparent text-muted border-0 p-0"
                id="search">
                <span class="mdi mdi-magnify mdi-24px text-primary"></span>
              </span>
              <input
                type="text"
                class="form-control bg-transparent text-muted border-0 px-3 fs-14"
                placeholder="Search Chat"
                aria-label="Search"
                aria-describedby="search"
              />
              <a
                href="message.html#"
                class="input-group-text bg-transparent text-muted border-0 border-start pe-0"
                id="search">
                <span class="mdi mdi-filter-outline mdi-18px"></span>
              </a>
            </div>
          </form>
        </div>
        <div class="chat-scroll px-3 pb-3">
          <div class="d-flex align-items-center justify-content-between">
            <a href="chat.html" class="link-dark text-center">
              <div class="light-bg-primary rounded-circle plus-icon">
                <i class="bi bi-plus text-white"></i>
              </div>
              <p class="pt-1 text-dark m-0">You</p>
            </a>
            <a href="chat.html" class="link-dark text-center">
              <img
                src={images["profile-1.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <p class="pt-1 m-0 small text-dark-50">Rumpa</p>
            </a>
            <a href="chat.html" class="link-dark text-center">
              <img
                src={images["profile-2.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <p class="pt-1 m-0 small text-dark-50">Nipa</p>
            </a>
            <a href="chat.html" class="link-dark text-center">
              <img
                src={images["profile-3.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <p class="pt-1 m-0 small text-dark-50">Riya</p>
            </a>
            <a href="chat.html" class="link-dark text-center">
              <img
                src={images["profile-4.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <p class="pt-1 m-0 small text-dark-50">John</p>
            </a>
            <a href="chat.html" class="link-dark text-center">
              <img
                src={images["profile-5.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <p class="pt-1 m-0 small text-dark-50">Sully</p>
            </a>
          </div>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto body-fix-osahan-footer">
        <div class="rounded-4 shadow overflow-hidden bg-white m-3">
          <a href="chat.html" class="link-dark">
            <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 border-bottom">
              <img
                src={images["favorite-1.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <div>
                <h6 class="mb-1 fs-14">Dr. Cayden Stack</h6>
                <p class="text-muted m-0 small">
                  I am cardio patient. I need your help
                </p>
              </div>
            </div>
          </a>
          <a href="chat.html" class="link-dark">
            <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 border-bottom">
              <img
                src={images["favorite-2.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <div>
                <h6 class="mb-1 fs-14">Dr. Pankaj</h6>
                <p class="text-muted m-0 small">
                  I am cardio patient. I need your help
                </p>
              </div>
            </div>
          </a>
          <a href="chat.html" class="link-dark">
            <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 border-bottom">
              <img
                src={images["favorite-3.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <div>
                <h6 class="mb-1 fs-14">Dr. Mohan</h6>
                <p class="text-muted m-0 small">
                  I am cardio patient. I need your help
                </p>
              </div>
            </div>
          </a>
          <a href="chat.html" class="link-dark">
            <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 border-bottom">
              <img
                src={images["favorite-4.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <div>
                <h6 class="mb-1 fs-14">Dr. Riya</h6>
                <p class="text-muted m-0 small">
                  I am cardio patient. I need your help
                </p>
              </div>
            </div>
          </a>
          <a href="chat.html" class="link-dark">
            <div class="bg-white shadow-sm d-flex align-items-center gap-3 p-3 border-bottom">
              <img
                src={images["favorite-5.jpg"]}
                alt=""
                class="img-fluid rounded-pill message-profile"
              />
              <div>
                <h6 class="mb-1 fs-14">Dr. Taylor Samaro</h6>
                <p class="text-muted m-0 small">
                  I am cardio patient. I need your help
                </p>
              </div>
            </div>
          </a>
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
          <a href="message.html" class="col footer-bottom-nav active">
            <span class="mdi mdi-message-processing-outline mdi-24px"></span>
            <span>Chat</span>
          </a>
          <a href="my-profile.html" class="col footer-bottom-nav">
            <span class="mdi mdi-account-outline mdi-24px"></span>
            <span>Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MessageInbox;
