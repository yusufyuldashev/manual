<template>
  <section class="vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Forgot Password</h3>
              <form @submit.prevent="forgotPassword">
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    placeholder="Email"
                    v-model.trim="email.val"
                  />
                </div>

                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/database'
// import 'firebase/auth'
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
    }
  },
  methods: {
    async forgotPassword() {},
  },
}
</script>
