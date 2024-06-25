import { Link } from "react-router-dom";

import { importAllImages } from "../util/imageImporter";
const images = importAllImages();

const MakeAppointment_2 = () => {
  return (
    <div class="request-appointment d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          href="doctor-profile.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 class="mb-0 ms-3 me-auto fw-bold">Appointment</h6>
        <div class="d-flex align-items-center gap-3">
          <a
            class="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
            href="request-appointment.html#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto p-3">
        <div class="rounded-4 px-3 appointment-banner mb-4">
          <div class="d-flex align-items-center gap-3">
            <img
              src={images["appointment-doctor.png"]}
              alt=""
              class="img-fluid appointment-doctor-img"
            />
            <div>
              <h6>Consultation Fee</h6>
              <h1 class="text-primary mb-0 fw-bold">
                $199
                <span class="text-muted fw-normal fs-6">Inc. VAT</span>
              </h1>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <p class="fs-14 fw-bold text-black mb-3">November</p>
          <div class="row align-items-center justify-content-between g-2 custom-check">
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio0"
                id="btnradio1"
                autocomplete="off"
              />
              <label class="btn btn-outline-info text-center" for="btnradio1">
                Mon
                <br />
                <span class="fs-5">10</span>
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio0"
                id="btnradio2"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-info text-center" for="btnradio2">
                Tue
                <br />
                <span class="fs-5">11</span>
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio0"
                id="btnradio3"
                autocomplete="off"
              />
              <label class="btn btn-outline-info text-center" for="btnradio3">
                Wed
                <br />
                <span class="fs-5">12</span>
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio0"
                id="btnradio4"
                autocomplete="off"
              />
              <label class="btn btn-outline-info text-center" for="btnradio4">
                Thu
                <br />
                <span class="fs-5">13</span>
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio0"
                id="btnradio5"
                autocomplete="off"
              />
              <label class="btn btn-outline-info text-center" for="btnradio5">
                Fri
                <br />
                <span class="fs-5">14</span>
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio0"
                id="btnradio6"
                autocomplete="off"
              />
              <label class="btn btn-outline-info text-center" for="btnradio6">
                Sat
                <br />
                <span class="fs-5">15</span>
              </label>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <h5 class="fs-14 fw-bold text-black mb-3">Morning Slots</h5>
          <div class="row align-items-center justify-content-between g-2 custom-check">
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio1"
                id="btnradio7"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio7">
                10:30 AM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio1"
                id="btnradio8"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio8">
                11:00 AM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio1"
                id="btnradio9"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio9">
                11:30 AM
              </label>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <h5 class="fs-14 fw-bold text-black mb-3">Afternoon Slots</h5>
          <div class="row row-cols-3 align-items-center justify-content-between g-2 custom-check">
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio2"
                id="btnradio10"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio10">
                12:30 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio2"
                id="btnradio11"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio11">
                01:00 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio2"
                id="btnradio12"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio12">
                01:30 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio2"
                id="btnradio13"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio13">
                01:45 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio2"
                id="btnradio14"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio14">
                02:00 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio2"
                id="btnradio15"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio15">
                02:30 PM
              </label>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <h5 class="fs-14 fw-bold text-black mb-3">Evening Slots</h5>
          <div class="row row-cols-3 align-items-center justify-content-between g-2 custom-check">
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio3"
                id="btnradio16"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio16">
                05:30 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio3"
                id="btnradio17"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio17">
                5:45 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio3"
                id="btnradio18"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio18">
                06:00 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio3"
                id="btnradio19"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio19">
                06:15 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio3"
                id="btnradio20"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio20">
                07:00 PM
              </label>
            </div>
            <div class="col">
              <input
                type="radio"
                class="btn-check"
                name="btnradio3"
                id="btnradio21"
                autocomplete="off"
              />
              <label class="btn btn-outline-info" for="btnradio21">
                08:30 PM
              </label>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <h5 class="fs-14 fw-bold text-black mb-3">Fee Information</h5>
          <div class="mb-2">
            <div class="bg-white rounded-4 shadow-sm d-flex align-items-center gap-3 p-3">
              <div class="light-bg-primary rounded-4 fee-icon">
                <span class="mdi mdi-phone-outline text-white"></span>
              </div>
              <div>
                <h6 class="mb-1 fs-14">Voice Call</h6>
                <p class="text-muted m-0 small">Can make a voice call</p>
              </div>
              <div class="ms-auto">
                <h4 class="text-primary m-0 fw-bold">$20</h4>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <div class="bg-white rounded-4 shadow-sm d-flex align-items-center gap-3 p-3">
              <div class="light-bg-primary rounded-4 fee-icon">
                <span class="mdi mdi-video text-white"></span>
              </div>
              <div>
                <h6 class="mb-1 fs-14">Video Call</h6>
                <p class="text-muted m-0 small">Can make a video call</p>
              </div>
              <div class="ms-auto">
                <h4 class="text-primary m-0 fw-bold">$30</h4>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <div class="bg-white rounded-4 shadow-sm d-flex align-items-center gap-3 p-3">
              <div class="light-bg-primary rounded-4 fee-icon">
                <span class="mdi mdi-message-processing-outline text-white"></span>
              </div>
              <div>
                <h6 class="mb-1 fs-14">Messaging</h6>
                <p class="text-muted m-0 small">Can make a message</p>
              </div>
              <div class="ms-auto">
                <h4 class="text-primary m-0 fw-bold">$10</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer mt-auto p-3">
        <Link
          to="/patient/1/new_appointment/step3"
          class="btn btn-info btn-lg w-100 rounded-4">
          PROCEED NEXT
        </Link>
      </div>
    </div>
  );
};

export default MakeAppointment_2;
