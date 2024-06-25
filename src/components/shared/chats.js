import { Link } from "react-router-dom";
import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const Chats = () => {
  return (
    <div class="chat d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          href="message.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <div class="d-flex align-items-center gap-2 ms-3 me-auto">
          <a href="doctor-profile.html">
            <img
              src={images["favorite-4.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon"
            />
          </a>
          <div>
            <p class="mb-0 fw-bold">Dr. Osahan</p>
            <p class="text-orange m-0 small">Online</p>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <a
            href="call-doctor.html"
            class="bg-white shadow rounded-circle icon">
            <span class="mdi mdi-phone-outline mdi-18px"></span>
          </a>
          <a
            href="call-doctor.html"
            class="bg-white shadow rounded-circle icon">
            <span class="mdi mdi-video-outline mdi-18px"></span>
          </a>
          <a
            class="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
            href="chat.html#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto p-3">
        <p class="text-center">Yesterday</p>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <img
              src={images["profile-2.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
            <div class="bg-white chat-rounded-left p-3 shadow-sm">
              <div class="m-0">Good afternoon, Doctor.</div>
            </div>
          </div>
          <p class="text-muted mb-0 ps-5 small ms-3">05:55PM</p>
        </div>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <div class="d-flex align-items-center gap-3 text-white w-100 text-right">
              <span class="bg-info ms-auto chat-rounded-right p-3 shadow-sm">
                Good afternoon, Mr. Bose. How are you?
              </span>
            </div>
            <img
              src={images["favorite-4.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
          </div>
          <p class="text-muted m-0 pe-5 small me-3 text-end">05:57PM</p>
        </div>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <img
              src={images["profile-2.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
            <div class="bg-white chat-rounded-left p-3 shadow-sm">
              <div class="m-0">
                I’m doing good, doctor, but my daughter isn’t doing well.
                Everywhere, people are getting affected with COVID and I am
                really worried about her.
              </div>
            </div>
          </div>
          <p class="text-muted mb-0 ps-5 small ms-3">05:55PM</p>
        </div>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <div class="d-flex align-items-center gap-3 text-white w-100 text-right">
              <span class="bg-info ms-auto chat-rounded-right p-3 shadow-sm">
                Please have a seat and tell me what happened.
              </span>
            </div>
            <img
              src={images["favorite-4.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
          </div>
          <p class="text-muted m-0 pe-5 small me-3 text-end">05:57PM</p>
        </div>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <img
              src={images["profile-2.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
            <div class="bg-white chat-rounded-left p-3 shadow-sm">
              <div class="m-0">
                Last week, my daughter came back from Pune as her college was
                closed on account of COVID. From the second day, she has had
                high fever and has been coughing badly. I think that she has
                contracted the virus on her way home.
              </div>
            </div>
          </div>
          <p class="text-muted mb-0 ps-5 small ms-3">05:55PM</p>
        </div>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <div class="d-flex align-items-center gap-3 text-white w-100 text-right">
              <span class="bg-info ms-auto chat-rounded-right p-3 shadow-sm">
                Okay, I understand your concern. Having a fever and cough
                doesn’t necessarily mean that someone has contracted the virus.
                These are symptoms of common cold too. The change in the
                temperature of the atmosphere could have triggered these
                symptoms. Still, to put your worries to rest, I am prescribing
                some medicines and an RT PCR test. Do the test by tomorrow, and
                if the test results are positive, make sure she is isolated. On
                the other hand, if the result is negative, just give her the
                medicine and ask her to drink a lot of water. Also, bring her in
                so I could examine her.
              </span>
            </div>
            <img
              src={images["favorite-4.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
          </div>
          <p class="text-muted m-0 pe-5 small me-3 text-end">05:57PM</p>
        </div>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <img
              src={images["profile-2.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
            <div class="bg-white chat-rounded-left p-3 shadow-sm">
              <div class="m-0">
                Okay, doctor. I will bring her in the evening. Thank you.
              </div>
            </div>
          </div>
          <p class="text-muted mb-0 ps-5 small ms-3">05:55PM</p>
        </div>
        <div class="mb-3">
          <div class="d-flex align-items-end gap-2 mb-1">
            <div class="d-flex align-items-center gap-3 text-white w-100 text-right">
              <span class="bg-info ms-auto chat-rounded-right p-3 shadow-sm">
                You are welcome.
              </span>
            </div>
            <img
              src={images["favorite-4.jpg"]}
              alt=""
              class="img-fluid rounded-circle icon-lg"
            />
          </div>
          <p class="text-muted m-0 pe-5 small me-3 text-end">05:57PM</p>
        </div>
        <div class="d-flex align-items-center gap-3">
          <img
            src={images["profile-2.jpg"]}
            alt=""
            class="img-fluid rounded-circle icon-lg"
          />
          <p class="text-muted m-0">Mahbuba is typing...</p>
        </div>
      </div>

      <div class="footer bg-white mt-auto shadow border-top">
        <div class="input-group pe-3">
          <input
            type="text"
            class="form-control p-3 border-0"
            placeholder="Type a message"
          />
          <span
            class="input-group-text bg-transparent border-0 p-0"
            id="basic-addon2">
            <a
              class="lighter-bg-primary-opacity rounded-circle icon text-dark"
              href="chat.html#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom">
              <i class="bi bi-paperclip"></i>
            </a>
          </span>
          <span
            class="input-group-text bg-transparent mx-1 border-0 p-0"
            id="basic-addon2">
            <a
              class="lighter-bg-primary-opacity rounded-circle icon text-dark"
              href="chat.html#">
              <i class="bi bi-mic-fill"></i>
            </a>
          </span>
          <span
            class="input-group-text bg-transparent border-0 p-0"
            id="basic-addon2">
            <a
              class="bg-primary rounded-circle icon text-white"
              href="chat.html#">
              <i class="bi bi-send"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
