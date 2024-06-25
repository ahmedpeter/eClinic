import { Link } from "react-router-dom";

const MakeAppointment_3 = () => {
  return (
    <div class="overview d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          href="visit-info.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 class="mb-0 ms-3 me-auto fw-bold">Overview</h6>
        <div class="d-flex align-items-center gap-3">
          <a
            class="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
            href="overview.html#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto p-3">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlName" class="form-label mb-1">
              Patient info:
            </label>
            <div
              class="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName">
              <span
                class="input-group-text bg-transparent rounded-0 border-0"
                id="name">
                <i class="bi bi-person-circle text-muted"></i>
              </span>
              <input
                type="text"
                class="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Type your name"
                aria-label="Type your name"
                aria-describedby="name"
                value="Apsana"
              />
            </div>
          </div>
          <div class="bg-white rounded-4 p-3 mb-3 border">
            <h6 class="pb-1 mb-2 fs-6">Patient details</h6>
            <div class="pb-3">
              <div class="d-flex align-items-center justify-content-between text-muted mb-1">
                <div>Consultation Fee</div>
                <div>$94.29</div>
              </div>
              <div class="d-flex align-items-center justify-content-between text-muted">
                <div>VAT (5%)</div>
                <div>$4.71</div>
              </div>
            </div>
            <h6 class="d-flex align-items-center justify-content-between border-top pt-3 mb-0">
              <div class="fw-normal">Total Payable</div>
              <div class="fw-bold">$99</div>
            </h6>
          </div>
          <a href="overview.html#" class="link-dark">
            <div class="bg-white border rounded-4 d-flex align-items-center justify-content-between p-3 mb-3">
              <p class="m-0">Do you have promo code?</p>
              <i class="bi bi-chevron-right"></i>
            </div>
          </a>
          <div class="bg-white rounded-4 p-3 border">
            <h6 class="pb-1 mb-0 fs-6">How would you like to pay?</h6>
            <p class="text-muted">
              To make a payment, tap your desired payment mathod
            </p>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  VISA
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  PayPal & Mastercard
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="footer mt-auto p-3">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div>
            Total Payable <span class="text-muted">(Include Vat)</span>
          </div>
          <div class="text-primary">$99</div>
        </div>
        <Link to="/" class="btn btn-info btn-lg w-100 rounded-4">
          PROCEED TO PAYMENT
        </Link>
        {/* <a
          href="overview.html#"
          class="btn btn-info btn-lg w-100 rounded-4"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom">
          Pay with VISA
        </a> */}
      </div>
    </div>
  );
};

export default MakeAppointment_3;
