<script setup>
import { ref } from "vue";
const jobFilter = ref("");
const locationFilter = ref("");
const remoteJobFilter = ref(false);
</script>

<template>
  <div class="d-flex justify-content-between bd-highlight">
    <div class="p-3 bd-highlight">
      <p class="fw-semibold">What do you want to do?</p>
    </div>
    <div class="p-2 bd-highlight">
      <button type="button" class="btn btn-outline-primary border-0 mt-1">
        Clear Filters
      </button>
    </div>
  </div>
  <div class="d-flex justify-content-center mb-5">
    <input
      v-model="jobFilter"
      type="text"
      class="job"
      placeholder="Software engineering, Design, Sales"
    />
  </div>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="fs-6 fw-semibold accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Locations
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="location-field">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              class="gc-location-field__icon gc-icon"
            >
              <g>
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                ></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </g>
            </svg>
            <input
              v-model="locationFilter"
              type="text"
              class="p-2"
              placeholder="San Francisco, London, Michigan"
            />
          </div>
          <div
            class="d-flex justify-content-start align-items-center pt-4 mb-4"
          >
            <label for="">
              <input type="checkbox" v-model="remoteJobFilter" name="" id="" />
            </label>
            <span class="mx-2">Show all remote-eligible jobs</span>
            <i
              class="bi bi-info-circle-fill"
              title="The remote filter will show you jobs that are eligible for remote work. Some roles allow for remote work and/or in-office work.

                  Candidates will be able to share location preferences later in the hiring process."
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="fs-6 fw-semibold accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Skills & qualifications
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body mb-4">
          <input
            v-model="jobFilter"
            type="text"
            class="p-2 skills"
            placeholder="Computer programming, Finance degree, UX"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="fs-6 fw-semibold accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Degree
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body row">
          <div class="col-6 degree">
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                class="sidenavcheckboxinput"
              />
              <label for=""> Associate </label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                class="sidenavcheckboxinput"
              />
              <label for=""> Master's </label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                class="sidenavcheckboxinput"
              />
              <label for=""> Pursuing Degree </label>
            </div>
          </div>
          <div class="col-6 degree">
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                class="sidenavcheckboxinput"
              />
              <label for=""> Bachelor's </label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                class="sidenavcheckboxinput"
              />
              <label for=""> Ph.D. </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button
          class="fs-6 fw-semibold accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="true"
          aria-controls="collapseFour"
        >
          Job types
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="row">
            <div class="col-6">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Full-time </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Temporary </label>
              </div>
            </div>
            <div class="col-6">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Part-time </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Intern </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button
          class="fs-6 fw-semibold accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="true"
          aria-controls="collapseFive"
        >
          Organizations
        </button>
      </h2>
      <div
        id="collapseFive"
        class="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="row">
            <div class="col-5">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id="fitbit"
                  class="sidenavcheckboxinput"
                />
                <label for="fitbit"> Fitbit </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id="googlefiber"
                  class="sidenavcheckboxinput"
                />
                <label for="googlefiber"> Google Fiber </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Loon </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Waymo </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> X </label>
              </div>
            </div>
            <div class="col-7">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Google </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Youtube </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Verily Life Sciences </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="sidenavcheckboxinput"
                />
                <label for=""> Wing </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input:focus {
  outline: none;
}

input {
  border: none;
  width: 90%;
}
.skills {
  width: 100%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.job {
  width: 90%;
  padding: 3%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.location-field {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2px;
}
.accordion-button {
  box-shadow: none;
  border-color: none;
  background-color: transparent;
  color: black;
}

.sidenavcheckboxinput {
  width: 20%;
}
</style>
