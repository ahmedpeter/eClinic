import { Link } from "react-router-dom";

const MakeAppointment_1 = () => {
  return (
    <div class="visit-info d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          href="book-appointment.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 class="mb-0 ms-3 me-auto fw-bold">Visit Info</h6>
        <div class="d-flex align-items-center gap-3">
          <a
            class="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
            href="visit-info.html#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>
      <div class="vh-100 my-auto overflow-auto p-3">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlName" class="form-label mb-1">
              Patient Name
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
                placeholder="Patient name"
                aria-label="Patient name"
                aria-describedby="name"
                value="Osahan Singh"
              />
            </div>
          </div>
          <div class="row g-2 mb-3">
            <div class="col">
              <div>
                <label for="exampleFormControlAge" class="form-label mb-1">
                  Age
                </label>
                <div
                  class="input-group border bg-white rounded-3 py-1"
                  id="exampleFormControlAge">
                  <span class="input-group-text bg-transparent rounded-0 border-0">
                    <i class="bi bi-calendar-date text-muted"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control bg-transparent rounded-0 border-0 px-0"
                    placeholder="22"
                    value="22"
                    maxlength="2"
                  />
                </div>
              </div>
            </div>
            <div class="col">
              <div>
                <label for="exampleFormControlAgeMonth" class="form-label mb-1">
                  Age (Month)
                </label>
                <div
                  class="input-group border bg-white rounded-3 py-1"
                  id="exampleFormControlAgeMonth">
                  <span class="input-group-text bg-transparent rounded-0 border-0">
                    <i class="bi bi-calendar-month text-muted"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control bg-transparent rounded-0 border-0 px-0"
                    placeholder="9"
                    value="9"
                    maxlength="2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlWight" class="form-label mb-1">
              Weight (KG)
            </label>
            <div
              class="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlWight">
              <span class="input-group-text bg-transparent rounded-0 border-0">
                <i class="bi bi-speedometer2 text-muted"></i>
              </span>
              <input
                type="text"
                class="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="62"
                value="62"
                maxlength="2"
              />
            </div>
          </div>
          <div class="mb-5">
            <label for="floatingTextarea" class="mb-1">
              Brifly describe the problem
            </label>
            <textarea
              class="form-control text-muted"
              style={{ height: 100 }}
              placeholder="Leave a comment here"
              id="floatingTextarea">
              hello, My name..
            </textarea>
          </div>
        </form>
      </div>

      <div class="footer mt-auto p-3">
        <div class="bg-white rounded-4 border-primary-dotted py-3 ps-3 pe-5 upload-file mb-3">
          <p class="fw-bold mb-1 text-primary fs-14">
            Attach reports &<br />
            previous Pescriptions
          </p>
          <small class="text-muted">
            JPG, PNG, PDF (Max No. of attachments: 10)
          </small>
          <div class="upload-file-icon bg-primary">
            <i class="bi bi-file-earmark-arrow-up text-white fs-3 pt-4 pe-3"></i>
          </div>
        </div>
        <Link
          to="/patient/1/new_appointment/step2"
          class="btn btn-info btn-lg w-100 rounded-4">
          PROCEED NEXT
        </Link>
      </div>
    </div>
  );
};

export default MakeAppointment_1;
