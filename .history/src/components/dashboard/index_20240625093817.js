import * as React from "react";
import { useState } from "react";

import { importAllImages } from "../util/imageImporter";

const images = importAllImages();

const Dashboard = () => {
  return (
    <section>
      <div className="home d-flex flex-column vh-100">
        <div className="bg-white shadow-sm">
          <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
            <div className="d-flex align-items-center gap-2 me-auto">
              <a href="doctor-profile.html">
                <img
                  src={images["favorite-4.jpg"]}
                  alt=""
                  className="img-fluid rounded-circle icon"
                />
              </a>
              <div className="ps-1">
                <p className="text-orange m-0 small">Welcome</p>
                <p className="fw-bold mb-0 text-primary fw-bold">
                  Hey, Queen Aina!
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a
                href="favorite-doctor.html"
                className="bg-white shadow rounded-circle icon">
                <span className="mdi mdi-cards-heart-outline mdi-18px text-primary"></span>
              </a>
              <a
                href="notification.html"
                className="bg-white shadow rounded-circle icon">
                <span className="mdi mdi-bell-outline mdi-18px text-primary"></span>
              </a>
              <a
                className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center"
                href="home.html#">
                <i className="bi bi-list text-primary fs-5 d-flex"></i>
              </a>
            </div>
          </div>
          <div className="px-3 pb-3">
            <form>
              <div className="input-group rounded-4 shadow py-1 px-3 bg-light">
                <span
                  className="input-group-text bg-transparent text-muted border-0 p-0"
                  id="search">
                  <span className="mdi mdi-magnify mdi-24px text-primary"></span>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent text-muted rounded-0 border-0 px-3"
                  placeholder="Find your suitable doctor!"
                  aria-label="Search"
                  aria-describedby="search"
                />
                <a
                  href="home.html#"
                  className="input-group-text bg-transparent text-muted border-0 border-start pe-0"
                  id="search">
                  <span className="mdi mdi-filter-outline mdi-18px"></span>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
          <div className="mb-0 pt-3">
            <div className="available-doctor ps-2 ms-1">
              <div className="available-doctor-item">
                <div className="bg-primary text-white rounded-4 p-3 doctor-book-back">
                  <h1 className="mb-1 doctor-book-back-title">
                    Book Your Next
                    <span className="h4 text-warning overflow-hidden rounded-4 m-0 bg-white">
                      <b className="bg-light-subtle text-primary px-1 rounded">
                        Appointment
                      </b>
                      <b className="bg-info fw-normal text-white px-1 rounded">
                        Online!
                      </b>
                    </span>
                  </h1>
                  <p className="mb-2 text-white-50 small">
                    Book Now and Get 30% OFF
                  </p>
                  <a
                    href="request-appointment.html"
                    className="btn btn-sm btn-book btn-secondary">
                    BOOK NOW <i className="bi bi-arrow-right"></i>
                  </a>
                  <div className="doctor-book-img">
                    <img
                      src={images["available-doctor-1.png"]}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="available-doctor-item">
                <div className="btn-info text-white rounded-4 p-3 doctor-book-back">
                  <h1 className="mb-1 doctor-book-back-title">
                    <span className="h4 overflow-hidden m-0">
                      <b className="text-primary">Find Your Dental</b>
                    </span>
                    Specialist Doctor
                  </h1>
                  <p className="mb-2 small">
                    Dr. Samaro
                    <span className="bg-white rounded-pill px-1 small text-orange">
                      <i className="mdi mdi-star"></i> 4.9
                    </span>
                  </p>
                  <a
                    href="home.html#"
                    className="btn btn-sm btn-primary btn-book">
                    BOOK NOW <i className="bi bi-arrow-right"></i>
                  </a>
                  <div className="doctor-book-img">
                    <img
                      src="img/home/available-doctor-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="available-doctor-item">
                <div className="btn-secondary text-white rounded-4 p-3 doctor-book-back">
                  <h1 className="mb-1 doctor-book-back-title">
                    Find the Right <br />
                    <span className="h4 text-warning overflow-hidden rounded-4 m-0">
                      <b className="bg-warning text-black px-1 rounded">
                        Doctor for Your
                      </b>
                      <b className="text-black">Needs!</b>
                    </span>
                  </h1>
                  <p className="mb-2 text-white small">
                    Book Now and Get 30% OFF
                  </p>
                  <a href="home.html#" className="btn btn-sm btn-dark btn-book">
                    BOOK NOW <i className="bi bi-arrow-right"></i>
                  </a>
                  <div className="doctor-book-img">
                    <img
                      src="img/home/available-doctor-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 mb-2">
            <div className="row row-cols-4 g-2">
              <div className="col">
                <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                  <a href="search.html" className="link-dark">
                    <img
                      src={images["doctor.png"]}
                      alt=""
                      className="img-fluid px-2"
                    />
                    <p className="text-truncate small pt-2 m-0">Doctor</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                  <a href="request-appointment.html" className="link-dark">
                    <img
                      src={images["schedule.png"]}
                      alt=""
                      className="img-fluid px-2"
                    />
                    <p className="text-truncate small pt-2 m-0">Appointment</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                  <a href="search.html" className="link-dark">
                    <img
                      src={images["prescription.png"]}
                      alt=""
                      className="img-fluid px-2"
                    />
                    <p className="text-truncate small pt-2 m-0">Prescription</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                  <a href="search.html" className="link-dark">
                    <img
                      src={images["medicine.png"]}
                      alt=""
                      className="img-fluid px-2"
                    />
                    <p className="text-truncate small pt-2 m-0">Medicine</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Top Doctor New */}
          <div className="p-3" style={{ marginBottom: 10 }}>
            <h6 className="mb-2 pb-2 fw-bold text-black">Top Doctor</h6>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <div className="position-absolute m-2">
                    <span className="badge text-bg-success rounded-pill float-end">
                      ONLINE
                    </span>
                  </div>
                  <img
                    src={images["top-doctor-1.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Taylor Samaro</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <div className="position-absolute m-2">
                    <span className="badge text-bg-success rounded-pill float-end">
                      ONLINE
                    </span>
                  </div>
                  <img
                    src={images["top-doctor-2.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Leabow</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <img
                    src={images["top-doctor-3.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Morgan</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <div className="position-absolute m-2">
                    <span className="badge text-bg-success rounded-pill float-end">
                      ONLINE
                    </span>
                  </div>
                  <img
                    src={images["top-doctor-1.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Cayden Stack</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Doctor New End */}
          <div className="p-3">
            <h6 className="mb-2 pb-2 fw-bold text-black">Available Doctor</h6>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <div className="position-absolute m-2">
                    <span className="badge text-bg-success rounded-pill float-end">
                      ONLINE
                    </span>
                  </div>
                  <img
                    src={images["available-doctor-1.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Taylor Samaro</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <div className="position-absolute m-2">
                    <span className="badge text-bg-success rounded-pill float-end">
                      ONLINE
                    </span>
                  </div>
                  <img
                    src={images["available-doctor-2.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Leabow</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <img
                    src={images["available-doctor-3.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Morgan</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <div className="position-absolute m-2">
                    <span className="badge text-bg-success rounded-pill float-end">
                      ONLINE
                    </span>
                  </div>
                  <img
                    src={images["available-doctor-4.jpg"]}
                    alt=""
                    className="card-img-top top-doctor-img"
                  />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">Dr. Cayden Stack</h6>
                    <p className="card-text text-muted mb-1">MBBS, BCS</p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1"></span>
                        4.9 (5,380)
                      </div>
                      <div>
                        <span className="mdi mdi-medical-bag text-primary me-1"></span>
                        4+ Years
                      </div>
                    </div>
                    <h6 className="mb-0">
                      $199<span className="text-muted small ms-1">Inc.VAT</span>
                    </h6>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      href="call-doctor.html"
                      className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                      <span className="small">SEE DOCTOR NOW</span>
                      <span className="mdi mdi-video-outline mdi-18px"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nav */}
      <div class="footer mt-auto p-3 fix-osahan-footer">
        <div class="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
          <a href="home.html" class="col footer-bottom-nav active">
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
          <a href="my-profile.html" class="col footer-bottom-nav">
            <span class="mdi mdi-account-outline mdi-24px"></span>
            <span>Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
