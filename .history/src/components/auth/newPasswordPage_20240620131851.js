import { Link } from "react-router-dom";

const NewPasswordPage = () => {
  const onEnter = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
  };

  return (
    <section>
      <div class="verify p-4">
        <div class="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span class="mdi mdi-account-check-outline display-1 text-primary"></span>
            <h2 class="my-3 fw-bold">Verification Code</h2>
            <p class="text-muted mb-0">Enter The Code We Send You?</p>
          </div>
          <a
            class="toggle text-dark bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center"
            href="verify.html#">
            <i class="bi bi-list fs-5"></i>
          </a>
        </div>
        <div class="d-flex gap-1 mb-2">
          <div class="col">
            <input
              type="text"
              class="form-control form-control-lg text-center py-3"
              value="5"
              maxlength="1"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control form-control-lg text-center py-3"
              value="2"
              maxlength="1"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control form-control-lg text-center py-3"
              value="7"
              maxlength="1"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control form-control-lg text-center py-3"
              value="2"
              maxlength="1"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control form-control-lg text-center py-3"
              value="8"
              maxlength="1"
            />
          </div>
        </div>
        <p class="text-muted text-center mt-4">
          Didn't receive it?
          <a href="verify.html#" class="ml-2 text-primary">
            Resent Code
          </a>
        </p>
      </div>
    </section>
  );
};

export default NewPasswordPage;
