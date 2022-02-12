<template>
  <div class="body" style="background-color: #eee;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div>
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <base-dialog
                    :show="!!error"
                    title="An error ocured!!"
                    @close="handleError"
                  >
                    <p>{{ error }}</p>
                  </base-dialog>
                  <base-dialog
                    :show="isLoading"
                    title="Authendicating..."
                    fixed
                  >
                    <p>Authendicating ...</p>
                    <base-spinner></base-spinner>
                  </base-dialog>
                  <p class="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-3">
                    Sign up
                  </p>

                  <form class="mx-1 mx-md-4" @submit.prevent="submitForm">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div
                        class="form-outline flex-fill mb-0"
                        :class="{ invalid: !name.isValid }"
                      >
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          placeholder="Your Name"
                          v-model.trim="name.val"
                          @blur="clearValidity('name')"
                        />
                        <label class="form-label" for="form3Example1c">
                          Your Name
                        </label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div
                        class="form-outline flex-fill mb-0"
                        :class="{ invalid: !email.isValid }"
                      >
                        <input
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                          v-model.trim="email.val"
                          placeholder="Your Email"
                          @blur="clearValidity('email')"
                        />
                        <label class="form-label" for="form3Example3c">
                          Your Email
                        </label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div
                        class="form-outline flex-fill mb-0"
                        :class="{ invalid: !password.isValid }"
                      >
                        <input
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                          v-model.trim="password.val"
                          placeholder="Password"
                          @blur="clearValidity('password')"
                        />
                        <label class="form-label" for="form3Example4c">
                          Password
                        </label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div
                        class="form-outline flex-fill mb-0"
                        :class="{ invalid: !passwordR.isValid }"
                      >
                        <input
                          type="password"
                          id="form3Example4cd"
                          class="form-control"
                          v-model="passwordR.val"
                          placeholder="Repeat  your password"
                          @blur="clearValidity('passwordR')"
                        />
                        <label class="form-label" for="form3Example4cd">
                          Repeat your password
                        </label>
                        <h6
                          class="passwordmatch"
                          v-if="
                            password.isValid === false ||
                            passwordR.isValid === false
                          "
                        >
                          Password do not match
                        </h6>
                      </div>
                    </div>

                    <label
                      class="form-check d-flex justify-content-center mb-5"
                      :class="{ invalid: !confirm.isValid }"
                    >
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value="confirm"
                        id="form2Example3c"
                        v-model="confirm.val"
                        @blur="clearValidity('confirm')"
                      />
                      <p
                        class="form-check-label userselect"
                        for="form2Example3"
                      >
                        I agree all statements in
                        <router-link to="/service">
                          Terms of service
                        </router-link>
                      </p>
                    </label>
                    <!-- <div v-if="!formIsValid" class="errorform">
                      Please fill all empty inputs !
                    </div> -->
                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button type="submit" class="btn btn-primary btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: {
        val: '',
        isValid: true,
      },
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      passwordR: {
        val: '',
        isValid: true,
      },
      confirm: {
        val: false,
        isValid: true,
      },
      isLoading: false,
      error: null,
      formIsValid: true,
      passwordDM: true,
    }
  },
  methods: {
    handleError() {
      this.error = null
    },
    clearValidity(input) {
      this[input].isValid = true
    },
    validateInput() {
      this.formIsValid = true
      if (this.name.val === '') {
        this.name.isValid = false
        this.formIsValid = false
      }
      if (this.email.val === '') {
        this.email.isValid = false
        this.formIsValid = false
      }
      if (this.password.val !== '' || this.passwordR.val !== '') {
        if (this.password.val !== this.passwordR.val) {
          this.password.isValid = false
          this.passwordR.isValid = false
          this.formIsValid = false
        }
      }
      //   if (this.passwordR.val === '') {
      //     this.passwordR.isValid = false
      //     this.formIsValid = false
      //   }
      if (this.confirm.val === false) {
        this.confirm.isValid = false
        this.formIsValid = false
      }
    },
    async submitForm() {
      this.validateInput()
      if (!this.formIsValid) {
        return
      }
      this.isLoading = true
      try {
        await this.$store.dispatch('signup', {
          email: this.email.val,
          password: this.password.val,
          returnSecureToken: true,
        })
        this.$router.replace('manual')
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

<style scoped>
.passwordmatch {
  text-align: center;
  color: brown;
}
.userselect {
  user-select: none;
}
.invalidtext {
  color: red;
}
.invalid p,
.invalid label,
.invalid input::placeholder {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
.errorform {
  color: red;
  text-align: center;
}
.body {
  height: 100vh;
}
</style>
