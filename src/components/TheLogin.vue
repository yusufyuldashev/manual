<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <base-dialog
            :show="!!error"
            title="An error ocured!!"
            @close="handleError"
          >
            <p>{{ error }}</p>
          </base-dialog>
          <base-dialog :show="isLoading" title="Authendicating..." fixed>
            <p>Authendicating ...</p>
            <base-spinner></base-spinner>
          </base-dialog>
          <form @submit.prevent="submitForm">
            <div
              class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
            >
              <p class="lead fw-normal mb-0 me-3">Sign in with</p>
              <button
                type="button"
                class="btn btn-primary btn-floating mx-1"
                @click="clickIcons()"
              >
                <i class="bi bi-facebook"></i>
              </button>

              <button
                type="button"
                class="btn btn-primary btn-floating mx-1"
                @click="clickIcons()"
              >
                <i class="bi bi-twitter"></i>
              </button>

              <button
                type="button"
                class="btn btn-primary btn-floating mx-1"
                @click="clickIcons()"
              >
                <i class="bi bi-instagram"></i>
              </button>
              <h6
                v-if="icons"
                style="color: red; margin-left: 10px; margin-top: 7px;"
              >
                Website in progress
              </h6>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4" :class="{ invalid: !email.isValid }">
              <input
                type="email"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                @blur="clearValidation('email')"
                v-model.trim="email.val"
              />
              <label
                v-if="email.isValid"
                class="form-label"
                for="form3Example3"
              >
                Email address
              </label>
              <label
                v-if="!email.isValid"
                class="form-label"
                for="form3Example3"
              >
                Please enter a valid email address
              </label>
            </div>

            <!-- Password input -->
            <div
              class="form-outline mb-3"
              :class="{ invalid: !password.isValid }"
            >
              <input
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Enter password"
                @blur="clearValidation('password')"
                v-model.trim="password.val"
              />
              <label
                v-if="password.isValid"
                class="form-label"
                for="form3Example4"
              >
                Password
              </label>
              <label
                v-if="!password.isValid"
                class="form-label"
                for="form3Example4"
              >
                Please enter a valid password
              </label>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="form-check-label userselect" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#" class="text-body" @click="clickIcons()">
                Forgot password?
              </a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;"
              >
                Login
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <router-link to="/register">Register</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
    >
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      <!-- Copyright -->

      <!-- Right -->
      <div>
        <a href="#!" class="text-white me-4">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="bi bi-google"></i>
        </a>
        <a href="#!" class="text-white">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
      <!-- Right -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
      error: null,
      isLoading: false,
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },

      icons: false,
    }
  },
  methods: {
    handleError() {
      this.error = null
    },
    clickIcons() {
      this.icons = !this.icons
    },

    clearValidation(input) {
      this[input].isValid = true
    },
    formValidation() {
      this.formIsValid = true
      if (this.email.val === '') {
        this.email.isValid = false
        this.formIsValid = false
      }
      if (this.password.val.length <= 4) {
        this.password.isValid = false
        this.formIsValid = false
      }
    },
    async submitForm() {
      this.formValidation()
      if (!this.formIsValid) {
        return
      }
      this.isLoading = true
      try {
        //
        await this.$store.dispatch('login', {
          email: this.email.val,
          password: this.password.val,
          returnSecureToken: true,
        })
        this.$router.replace('/manual')
      } catch (err) {
        this.error =
          err.message ||
          'failed to authendicate , try  later check  your login data'
      }
      this.isLoading = false
    },
  },
}
</script>

<style scoped lang="scss">
.invalid p,
.invalid label,
.invalid input::placeholder {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
.userselect {
  user-select: none;
}
.small {
  a {
    color: rgb(155, 30, 103);
    text-decoration: none;
  }
}
.divider:after,
.divider:before {
  content: '';
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
