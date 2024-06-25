import { Link } from "react-router-dom";

const UpdateUserProfile = () => {
  return (
    <div class="change-profile d-flex flex-column vh-100">
      <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          href="my-profile.html"
          class="text-dark bg-white shadow rounded-circle icon">
          <span class="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 class="mb-0 ms-3 me-auto fw-bold">My Profile</h6>
        <div class="d-flex align-items-center gap-3">
          <a
            class="toggle d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon"
            href="change-profile.html#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>

      <div class="vh-100 my-auto overflow-auto p-3">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlName" class="form-label mb-1">
              First Name
            </label>
            <div
              class="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName">
              <span
                class="input-group-text bg-transparent rounded-0 border-0"
                id="firstname">
                <span class="mdi mdi-account-outline mdi-18px"></span>
              </span>
              <input
                type="text"
                class="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Type your first name"
                aria-label="Type your first name"
                aria-describedby="firstname"
                value="Mr"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlName1" class="form-label mb-1">
              Last Name
            </label>
            <div
              class="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName1">
              <span
                class="input-group-text bg-transparent rounded-0 border-0"
                id="firstname">
                <span class="mdi mdi-account-outline mdi-18px"></span>
              </span>
              <input
                type="text"
                class="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Type your last name"
                aria-label="Type your last name"
                aria-describedby="firstname"
                value="Singh"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlName1" class="form-label mb-1">
              Gender
            </label>
            <div class="input-group border bg-white rounded-3 py-1">
              <label
                class="input-group-text bg-transparent rounded-0 border-0"
                for="inputGroupSelect01">
                <span class="mdi mdi-account-group-outline mdi-18px"></span>
              </label>
              <select
                class="form-select bg-transparent rounded-0 border-0 px-0"
                id="inputGroupSelect01">
                <option selected>Male</option>
                <option value="1">Female</option>
              </select>
            </div>
          </div>
          <div class="row g-2 mb-3">
            <div class="col">
              <div>
                <label class="form-label mb-1">Day</label>
                <div class="input-group border bg-white rounded-3 py-1">
                  <label
                    class="input-group-text bg-transparent rounded-0 border-0"
                    for="inputGroupSelectDay">
                    <span class="mdi mdi-calendar-today mdi-18px"></span>
                  </label>
                  <select
                    class="form-select bg-transparent rounded-0 border-0 px-0"
                    id="inputGroupSelectDay">
                    <option selected>11</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col">
              <div>
                <label class="form-label mb-1">Month</label>
                <div class="input-group border bg-white rounded-3 py-1">
                  <label
                    class="input-group-text bg-transparent rounded-0 border-0"
                    for="inputGroupSelectMonth">
                    <span class="mdi mdi-calendar-month mdi-18px"></span>
                  </label>
                  <select
                    class="form-select bg-transparent rounded-0 border-0 px-0"
                    id="inputGroupSelectMonth">
                    <option selected>Jan</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col">
              <div>
                <label class="form-label mb-1">Year</label>
                <div class="input-group border bg-white rounded-3 py-1">
                  <label
                    class="input-group-text bg-transparent rounded-0 border-0"
                    for="inputGroupSelectYear">
                    <span class="mdi mdi-calendar-text mdi-18px"></span>
                  </label>
                  <select
                    class="form-select bg-transparent rounded-0 border-0 px-0"
                    id="inputGroupSelectYear">
                    <option selected>2000</option>
                    <option value="1">2001</option>
                    <option value="2">2002</option>
                    <option value="3">2003</option>
                    <option value="4">2004</option>
                    <option value="5">2005</option>
                    <option value="6">2006</option>
                    <option value="7">2007</option>
                    <option value="8">2008</option>
                    <option value="9">2009</option>
                    <option value="10">2010</option>
                    <option value="11">2011</option>
                    <option value="12">2012</option>
                    <option value="13">2013</option>
                    <option value="14">2014</option>
                    <option value="15">2015</option>
                    <option value="16">2016</option>
                    <option value="17">2017</option>
                    <option value="18">2018</option>
                    <option value="19">2019</option>
                    <option value="20">2020</option>
                    <option value="21">2021</option>
                    <option value="22">2022</option>
                    <option value="23">2023</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label for="exampleFormControlNumber" class="form-label mb-1">
              Phone
            </label>
            <div
              class="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlNumber">
              <span
                class="input-group-text bg-transparent rounded-0 border-0"
                id="number">
                <span class="mdi mdi-phone-outline mdi-18px"></span>
              </span>
              <input
                type="text"
                class="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Type your number"
                aria-label="Type your number"
                aria-describedby="number"
                value="01886***037"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="footer mt-auto p-3">
        <a href="my-profile.html" class="btn btn-info btn-lg w-100 rounded-4">
          Save Change
        </a>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
