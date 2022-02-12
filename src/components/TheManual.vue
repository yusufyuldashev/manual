<template>
  <div>
    <header class="myFixedMenu" id="fixedMenu">
      <nav class="container">
        <div class="right">
          <a href="#">Shop</a>
          <a href="#">Read</a>
          <a href="#">020 8004 7160</a>
        </div>
        <div class="center">
          <h2>MANUAL</h2>
        </div>
        <div class="left">
          <div class="about">
            <router-link to="/about">ABOUT</router-link>
          </div>
          <router-link to="/login" v-if="!isLoggedIn">login</router-link>
          <router-link to="/register" v-if="!isLoggedIn">Sign up</router-link>
          <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
          <img src="../components/assets/img/shop.png" alt="" />
        </div>
      </nav>
    </header>
    <base-card v-if="!isLoggedIn">
      <h3 style="text-align: center; color: red;">
        the data is displayed after registration please register !
      </h3>
    </base-card>
    <body v-if="isLoggedIn">
      <main>
        <section class="intro">
          <div class="container">
            <div class="intro-content">
              <h1>
                Men’s health. The
                <br />
                way it should be.
              </h1>
              <p>
                No waiting rooms or awkward conversations. Just clinically
                <br />
                proven treatments direct to your door with support along the
                <br />
                way.
              </p>
              <a class="button-1" href="#">Get Started</a>
              <a class="button-2" href="#">View Treatments</a>
            </div>
            <div class="intro-paski">
              <ul>
                <li>
                  <img src="../components/assets/img/shart-1.png" alt="" />
                  <p>UK licenced medication</p>
                </li>
                <li>
                  <img src="../components/assets/img/shart-2.png" alt="" />
                  <p>Free, discreet delivery</p>
                </li>
                <li>
                  <img src="../components/assets/img/shart-3.png" alt="" />
                  <p>Cancel any time</p>
                </li>
                <li>
                  <img src="../components/assets/img/shart-4.png" alt="" />
                  <p>Ongoing clinician support</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div class="container">
            <div class="healthcare-wrapper">
              <div class="healthcare-header">
                <h4>Healthcare. Made easy.</h4>
                <img src="../components/assets/img/rgb-star.png" alt="" />
                <p>
                  <span>Rated excellent</span>
                  on Trustpilot
                </p>
              </div>
              <div class="healthcare-content">
                <ul class="healthlist">
                  <li class="sledushi-1">
                    <img src="../components/assets/img/maslahat-1.png" alt="" />
                    <h4>Treatments online</h4>
                    <p>
                      We’ll ask you a couple of quick medical questions. Tick
                      the boxes and a clinician will review your answers and
                      issue you a prescription.
                    </p>
                  </li>
                  <li class="sledushi-2">
                    <img src="../components/assets/img/maslahat-2.png" alt="" />
                    <h4>Free fast delivery</h4>
                    <p>
                      Your selected treatments will be delivered for free in
                      discreet packaging. There’ll be some helpful info included
                      to make sure you get the best out of it.
                    </p>
                  </li>
                  <li class="sledushi-3">
                    <img src="../components/assets/img/maslahat-3.png" alt="" />
                    <h4>Clinician support</h4>
                    <p>
                      Chat with a medical expert whenever you need. On the phone
                      or via email. With support throughout your treatment.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div class="container">
            <div class="product-wrapper">
              <h2>The most effective treatments. Backed by science.</h2>
              <ul class="themost">
                <li>
                  <img src="../components/assets/img/mahsulot-1.png" alt="" />
                  <h4>Hair Loss</h4>
                  <p>
                    Now hair loss is treatable. There are clinically proven
                    treatments effective in 9/10 men. And we have them all here.
                  </p>
                  <a href="#">VIEW TREATMENTD</a>
                </li>
                <li>
                  <img src="../components/assets/img/mahsulot-2.png" alt="" />
                  <h4>health</h4>
                  <p>
                    Erectile dysfunction (ED) happens to a lot of us. We can
                    help you figure out why. And offer a number of treatments
                    that can help too.
                  </p>
                  <a href="#">VIEW TREATMENTD</a>
                </li>
                <li>
                  <img src="../components/assets/img/mahsulot-3.png" alt="" />
                  <h4>Skin</h4>
                  <p>
                    Healthy skin is key to keep you feeling and looking your
                    best. We’ve harnessed the best science has to offer so you
                    can look after yours.
                  </p>
                  <a href="#">VIEW TREATMENTD</a>
                </li>
                <li>
                  <img src="../components/assets/img/mahsulot-4.png" alt="" />
                  <h4>Daily Health</h4>
                  <p>
                    Help your body fight the good fight with our scientifically
                    proven range of nutrients and vitamins. Making healthier
                    easier, every day.
                  </p>
                  <a href="#">VIEW TREATMENTD</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="product-intro">
          <div class="container">
            <div class="product-interyu">
              <div class="left">
                <p class="mini-p">NEW</p>
                <h3>Manual Wellbeing</h3>
                <p class="big-p">
                  Our new offering is a holistic plan to improve your health
                  with recommendations from medical experts, as well as tracking
                  and ongoing clinician support.
                </p>
                <a href="#">VIEW MORE</a>
                <ul>
                  <li>
                    <img
                      src="../components/assets/img/chesk.png"
                      alt=""
                      width="20"
                    />
                    <p>Online consultation</p>
                  </li>
                  <li>
                    <img
                      src="../components/assets/img/chesk.png"
                      alt=""
                      width="20"
                    />
                    <p>Personalised health plan</p>
                  </li>
                  <li>
                    <img
                      src="../components/assets/img/chesk.png"
                      alt=""
                      width="20"
                    />
                    <p>Tracking & Clinician support</p>
                  </li>
                </ul>
              </div>
              <div class="right">
                <ul>
                  <li>
                    <img src="../components/assets/img/tasir-1.png" alt="" />
                    <p>Hair</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-2.png" alt="" />
                    <p>Immunity</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-3.png" alt="" />
                    <p>Sleep</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-4.png" alt="" />
                    <p>Health</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-5.png" alt="" />
                    <p>Brain</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-6.png" alt="" />
                    <p>Digestion</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-7.png" alt="" />
                    <p>Heart</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-8.png" alt="" />
                    <p>Muscles</p>
                  </li>
                  <li>
                    <img src="../components/assets/img/tasir-9.png" alt="" />
                    <p>Skin</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="medical-director">
              <p id="mmm-p">
                Our medical team work round the clock to bring you the most
                effective treatments available in the UK
              </p>
              <h4>Dr. Earim Chaudry, Medical Director</h4>
              <img src="../components/assets/img/doctor.png" alt="" />
              <div>
                <img src="../components/assets/img/star-1.png" alt="" />
                <h5>Trustpilot</h5>
                <img src="../components/assets/img/rgb-star.png" alt="" />
              </div>
              <p class="mmm-p">Based on 1169 reviews</p>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../components/assets/img/star.png" alt="" />
                  <h6>Quick and discreet and saved me a trip to the GP.</h6>
                  <p>Zander</p>
                </div>
                <div class="carousel-item">
                  <img src="../components/assets/img/star.png" alt="" />
                  <h6>Quick and discreet and saved me a trip to the GP.</h6>
                  <p>Zander</p>
                </div>
                <div class="carousel-item">
                  <img src="../components/assets/img/star.png" alt="" />
                  <h6>Quick and discreet and saved me a trip to the GP.</h6>
                  <p>Zander</p>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="doctor-team">
              <h4>Meet our medical team</h4>
              <p class="doctor-text">
                Enabling the mission of revolutionising how men approach health,
                they are at the core of the men’s wellness platform. Meet our
                team.
              </p>
              <ul>
                <li>
                  <img src="../components/assets/img/doctor-2.png" alt="" />
                  <h5>Earim Chaudry, MD</h5>
                  <p>Medical Director</p>
                </li>
                <li>
                  <img
                    src="../components/assets/img/doctor-1.png"
                    alt="topilmadi"
                  />
                  <h5>Earim Chaudry, MD</h5>
                  <p>Pharmacist, Ind. Prescriber</p>
                </li>
                <li>
                  <img src="../components/assets/img/doctor-3.png" alt="" />
                  <h5>Earim Chaudry, MD</h5>
                  <p>Pharmacist, Ind. Prescriber</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="container">
            <div class="doctor-call">
              <img src="../components/assets/img/black-call.png" alt="" />
              <div>
                <h4>Get a free consultation</h4>
                <p>
                  Speak with one of our clinicians and get personalised advice.
                  Monday to Friday 9am-4:30pm
                </p>
              </div>
              <a href="#">Book Consultation</a>
            </div>
          </div>
        </section>
        <section class="humans-realitatsiya">
          <div class="container">
            <div class="humans">
              <p>
                “It’s put a spark back into my relationship
                <br />
                and given me a huge amount of confidence
                <br />
                in the bedroom.”
              </p>
              <h5>Anthony, Trustpilot</h5>
            </div>
            <div class="link">
              <a href="#">Treat Ed</a>
              <a href="#">Treat Hair Loss</a>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="guided-wrapper">
              <h2>GUIDED</h2>
              <p>
                Your own personal wellbeing guide. Experts,
                <br />
                information and hot topics right at your fingertips.
              </p>
              <ul>
                <li>
                  <img src="../components/assets/img/tiklanish-1.png" alt="" />
                  <h4>Why do men fail at well-being?</h4>
                  <a href="#">READ MORE</a>
                </li>
                <li>
                  <img src="../components/assets/img/tiklanish-2.png" alt="" />
                  <h4>8 steps to prevent hair loss</h4>
                  <a href="#">READ MORE</a>
                </li>
                <li>
                  <img src="../components/assets/img/tiklanish-3.png" alt="" />
                  <h4>Erectile Dysfunction 101</h4>
                  <a href="#">READ MORE</a>
                </li>
                <li>
                  <img src="../components/assets/img/tiklanish-4.png" alt="" />
                  <h4>Let’s talk hair – treatments and advice</h4>
                  <a href="#">READ MORE</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container">
          <div class="footer-wrapper">
            <div class="footer-left">
              <h2>Have a question?</h2>
              <p>Whatever it is, get in touch:</p>
              <div class="murojat">
                <img src="../components/assets/img/call.png" alt="" />
                <div>
                  <h4>020 8004 7160</h4>
                  <p>Mon-Fri 9:00-17:30</p>
                </div>
              </div>
              <div class="murojat">
                <img src="../components/assets/img/sms.png" alt="" />
                <div>
                  <h4>help@manual.co</h4>
                  <p>We aim to reply in 24hrs</p>
                </div>
              </div>
            </div>
            <ul class="footer-center">
              <li>
                <p>LEARN</p>
              </li>
              <li>
                <h5>Erectile Dysfunction</h5>
              </li>
              <li>
                <h5>Hair Loss</h5>
              </li>
              <li>
                <h5>Skin</h5>
              </li>
              <li>
                <h5>Health</h5>
              </li>
              <li>
                <h5>Masculinity</h5>
              </li>
            </ul>
            <ul class="footer-right">
              <li>
                <p>MANUAL</p>
              </li>
              <li>
                <h5>Home</h5>
              </li>
              <li>
                <h5>Mission</h5>
              </li>
              <li>
                <h5>FAQ</h5>
              </li>
              <li>
                <h5>Medical Experts</h5>
              </li>
              <li>
                <h5>Success Stories</h5>
              </li>
            </ul>
          </div>
          <div class="manual">
            <img src="../components/assets/img/site-icon.png" alt="" />
            <div>
              <img src="../components/assets/img/facebook-icon.png" alt="" />
              <img src="../components/assets/img/shart-5.png" alt="" />
              <img src="../components/assets/img/instagram-icon.png" alt="" />
            </div>
          </div>
          <div class="footer-bottom">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Terms of Sale</a>
              </li>
              <li>
                <a href="#">Complaints</a>
              </li>
            </ul>
            <p>Pharmacies: Manual Pharmacy</p>
            <p>Copyright 2021 Manual™. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthendicated
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style scoped lang="scss">
.about {
  display: inline-block;
}
.carousel-item {
  background-color: #c5c5c5;
  height: 500px;
  img {
    margin-left: 280px;
    margin-top: 100px;
  }
  h6 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 45px;
    text-align: center;
    letter-spacing: 0.84px;
    color: #0b3b3c;
    width: 470px;
    margin-left: 330px;
    margin-top: 50px;
  }
  p {
    margin-left: 550px;
    margin-top: 50px;
    font-weight: bolder;
  }
}
.container {
  width: 1140px;
  margin: 0 auto;
}
.doctor-team {
  margin-top: 90px;
  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 1.2px;
    color: #0b3b3c;
  }
  .doctor-text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 43px;
    text-align: center;
    letter-spacing: 0.72px;
    color: #0b3b3c;
    margin-left: 150px;
    margin-top: 20px;
    width: 750px;
  }
  ul {
    display: flex;
    li {
      margin: 40px;
      h5 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        color: #0b3b3c;
        margin-top: 20px;
      }
      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 29px;
        margin-top: -10px;
        color: #91ab9f;
        margin-bottom: -20px;
      }
    }
  }
}
.doctor-call {
  display: flex;
  margin-top: 40px;
  padding-bottom: 100px;
  img {
    height: 50px;
  }
  div {
    margin-left: 20px;
    h5 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 43px;
      letter-spacing: 0.72px;
      color: #0b3b3c;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 29px;
      color: #91ab9f;
      margin-top: -5px;
    }
  }
  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.1px;
    text-transform: uppercase;
    color: #ffffff;
    background: #7e0707;
    border: 2px solid #7e0707;
    height: 45px;
    margin-left: 90px;
    padding: 10px 70px;
    transition: all 0.5s;
  }
  a:hover {
    background-color: inherit;
    color: black;
  }
}
.humans-realitatsiya {
  background-image: url(../components/assets/img/big-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1400px;
  background-color: #f3f7f4;
  .humans {
    padding-top: 300px;
    padding-bottom: 300px;
    p {
      width: 450px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
    }
    h5 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      margin-left: 140px;
      letter-spacing: 2.1px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  .link {
    margin-top: 150px;
    margin-left: 320px;
    a {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 2.1px;
      text-transform: uppercase;
      color: #ffffff;
      background: #7e0707;
      border: 2px solid #7e0707;
      padding: 10px 80px;
      margin: 10px;
      transition: all 0.5s;
      display: inline-block;
      margin-bottom: 20px;
    }
    a:hover {
      background-color: #fff;
      color: black;
    }
  }
}
footer {
  background: #0b3b3c;
  .footer-wrapper {
    display: flex;
    .footer-left {
      margin-left: 150px;
      h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 2.7px;
        text-transform: uppercase;
        color: #ffffff;
        padding-top: 50px;
      }
      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 25px;
        letter-spacing: 0.84px;
        color: #6d8a83;
      }
      .murojat {
        display: flex;
        img {
          width: 25px;
          height: 25px;
        }
        div {
          margin-left: 10px;
          h4 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 25px;
            letter-spacing: 0.84px;
            color: #ffffff;
          }
        }
      }
    }
    .footer-center {
      margin-top: 50px;
      margin-left: 50px;
      li {
        p {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 2.1px;
          text-transform: uppercase;
          color: #6d8a83;
        }
        h5 {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 25px;
          letter-spacing: 0.84px;
          color: #ffffff;
          margin-top: 20px;
        }
      }
    }
    .footer-right {
      margin-top: 50px;
      margin-left: 250px;
      li {
        p {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 2.1px;
          text-transform: uppercase;
          color: #6d8a83;
        }
        h5 {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 25px;
          letter-spacing: 0.84px;
          color: #ffffff;
          margin-top: 20px;
        }
      }
    }
  }
  .manual {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 900px;
    margin-left: 150px;
    div {
      img {
        margin: 0px 5px;
      }
    }
  }
  .footer-bottom {
    margin-top: 50px;
    margin-left: 110px;
    ul {
      display: flex;
      li {
        margin-right: 20px;
        a {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 22px;
          letter-spacing: 0.72px;
          color: #ffffff;
        }
      }
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 22px;
      letter-spacing: 0.72px;
      color: #6d8a83;
      margin-bottom: -5px;
      margin-left: 30px;
    }
  }
}
.guided-wrapper {
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 1.2px;
    color: #0b3b3c;
    margin-top: 50px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 43px;
    text-align: center;
    letter-spacing: 0.72px;
    color: #0b3b3c;
  }
  ul {
    display: flex;
    margin-top: 20px;
    li {
      margin: 10px;
      img {
        width: 250px;
      }
      h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 40px;
        letter-spacing: 0.72px;
        color: #0b3b3c;
        margin-bottom: 100px;
      }
      a {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 2.1px;
        text-transform: uppercase;
        color: #0b3b3c;
        border-bottom: 2px solid #0b3b3c;
      }
    }
  }
}
nav {
  margin-top: 0px;
  background-color: #fff;
  padding: 25px 25px 0 25px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  .right {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;

    a {
      margin-left: 20px;
      color: #0b3b3c;
    }
  }
  .center {
    margin-top: -8px;
    margin-left: -90px;
  }
  .left {
    margin-top: -5px;
    img {
      margin-top: -5px;
    }
    a {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #0b3b3c;
      margin-right: 20px;
    }
  }
}
.healthcare-wrapper {
  padding-bottom: 200px;
  .healthcare-header {
    h4 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: bolder;
      font-size: 35px;
      line-height: 60px;
      text-align: center;
      letter-spacing: 1.2px;
      color: #0b3b3c;
      margin-top: 80px;
    }
    img {
      margin-left: 43%;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      color: #0b3b3c;
      span {
        color: #00b67a;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
  .healthcare-content {
    ul {
      display: flex;
      li {
        margin-right: 50px;
        img {
          height: 273px;
        }
        h4 {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: bold;
          font-size: 25px;
          line-height: 40px;
          text-align: center;
          letter-spacing: 0.84px;
          color: #0b3b3c;
          margin-top: 20px;
        }
        p {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 32px;
          text-align: center;
          color: #0b3b3c;
        }
      }
      .sledushi-1::after {
        content: url(../components/assets/img/old-1.png);
        position: absolute;
        margin-top: -500px;
        margin-left: 280px;
      }
      .sledushi-2::after {
        content: url(../components/assets/img/old-2.png);
        position: absolute;
        margin-top: -280px;
        margin-left: 280px;
      }
      .sledushi-3::after {
        content: url(../components/assets/img/old-3.png);
        position: absolute;
        margin-top: 60px;
        margin-left: -220px;
      }
    }
  }
}
.intro {
  padding-top: 120px;
  background-image: url(../components/assets/img/intro-bg.png);
  background-position: top 20px center;
  background-size: contain;
  background-repeat: no-repeat;
}
.intro-content {
  padding-bottom: 150px;
  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 80px;
    text-align: center;
    letter-spacing: 1.8px;
    color: #0b3b3c;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #0b3b3c;
  }
  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.1px;
    text-transform: uppercase;
    border: 2px solid #7e0707;
    display: block;
    margin: 0 auto;
    width: 320px;
    padding: 10px 50px;
    transition: all 0.5s ease;
  }
  .button-1 {
    color: #ffffff;
    background: #7e0707;
    border: 2px solid #7e0707;
  }
  .button-1:hover {
    background: inherit;
    color: black;
  }
  .button-2 {
    color: #7e0707;
    background-color: inherit;
    margin-top: 20px;
  }
  .button-2:hover {
    background: #7e0707;
    color: #fff;
  }
}
.intro-paski {
  padding-top: 120px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 29px;
        color: #0b3b3c;
        margin-top: 10px;
        margin-left: 15px;
      }
      img {
        height: 50px;
        width: 50px;
      }
    }
  }
}
.product-wrapper {
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 1.2px;
    color: #0b3b3c;
    margin-top: 10px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    li {
      width: 550px;
      background: #e8efe9;
      margin: 3px;
      img {
        width: 350px;
        height: 350px;
        margin-top: 20px;
        margin-left: 90px;
      }
      h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 0.72px;
        color: #0b3b3c;
      }
      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 29px;
        text-align: center;
        color: #0b3b3c;
        width: 450px;
        margin-left: 40px;
      }
      a {
        color: #000;
        border-bottom: 3px solid black;
        margin-left: 220px;
        font-weight: bold;
        display: inline-block;
        margin-bottom: 70px;
      }
    }
  }
}
.product-intro {
  background-color: #e8efe9;
  margin-top: 20px;
  .product-interyu {
    display: flex;
    .left {
      h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 60px;
        letter-spacing: 1.2px;
        color: #0b3b3c;
      }
      .big-p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 29px;
        color: #0b3b3c;
        width: 522px;
        margin-top: 20px;
        margin-bottom: 50px;
      }
      .mini-p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 15px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #0b3b3c;
        margin-top: 130px;
        display: inline-block;
        padding: 2px 5px;
        background: #bdcdc5;
      }
      a {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        background: #7e0707;
        border: 2px solid #7e0707;
        text-align: center;
        letter-spacing: 2.1px;
        text-transform: uppercase;
        padding: 10px 80px;
        color: #ffffff;
        transition: all 0.5s ease;
      }
      a:hover {
        background-color: inherit;
        color: black;
      }
      ul {
        display: flex;
        margin-left: -40px;
        li {
          display: flex;
          margin-top: 50px;
          img {
            width: 15px;
            height: 15px;
          }
          p {
            margin-top: -5px;
            margin-left: 5px;
            margin-right: 20px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 29px;
            color: #0b3b3c;
          }
        }
      }
    }
    .right {
      ul {
        display: flex;
        flex-wrap: wrap;
        margin-left: 80px;
        margin-top: 50px;
        li {
          margin: 5px;
          background-color: #fff;
          width: 150px;
          img {
            margin-top: 20px;
            margin-left: 45px;
            margin-bottom: 10px;
          }
          p {
            text-align: center;
            color: #0b3b3c;
          }
        }
      }
    }
  }
}
.medical-director {
  #mmm-p {
    margin-top: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #0b3b3c;
  }
  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #0b3b3c;
  }
  img {
    margin-left: 46%;
    margin-top: 10px;
  }
  div {
    display: flex;
    margin-left: 37%;
    margin-top: 5%;
    img {
      margin-left: 0px;
      margin-top: 0px;
      height: 30px;
    }
    h5 {
      font-size: 30px;
      margin-right: 5px;
      margin-left: 5px;
      font-weight: bold;
    }
  }
  .mmm-p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 13px;

    line-height: 22px;
    text-align: center;
    color: #0b3b3c;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Roboto';
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

@media only screen and (max-width: 1100px) {
  .right {
    display: none;
  }
  .container {
    width: 100%;
  }
  .healthlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      width: 100%;

      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
  .themost {
    display: flex;
    justify-content: center;
    flex-direction: column;
    li {
      width: 100% !important;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 !important;
      img {
        margin-left: 0 !important;
      }
      a {
        margin: 0 !important;
        border-bottom: 0 !important;
      }
      p {
        margin: 20px 0 20px 0 !important ;
      }
    }
  }
  .product-interyu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .left {
      margin: 0 auto;
      text-align: center;
      ul {
        margin-left: 0 !important;
      }
    }
    .right {
      ul {
        margin-left: 0 !important;
        justify-content: center;
      }
    }
  }
  .medical-director {
    display: flex;
    flex-direction: column;
    h4 {
      margin: 10px 0;
    }
    div {
      margin: 0 !important;
      display: flex;
      text-align: center;
      flex-direction: column;
      img {
        margin-top: 10px !important;
      }
      h5 {
        margin: 15px 0;
      }
    }
    img {
      display: block;
      margin: 0 auto !important;
    }
  }
  .doctor-team {
    p {
      margin: 0 auto !important;
      width: 100% !important;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        text-align: center;
      }
    }
  }
  .doctor-call {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    a {
      margin-left: 0 !important;
    }
    h4 {
      margin: 10px 0;
    }
    p {
      margin: 10px 0;
    }
  }
  .guided-wrapper {
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin: 0 auto;
        text-align: center;
        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      margin-left: 0 !important;
      text-align: center;
    }
    ul {
      margin-left: 0 !important;
      text-align: center;
    }
  }
  .manual {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto !important;
    padding-top: 20px;
    width: 100% !important;
    div {
      margin-top: 20px;
    }
  }
  .footer-bottom {
    margin-left: 0 !important;
    text-align: center;
    ul {
      display: block !important;
      margin: 0 auto !important;
    }
  }
}
@media only screen and (max-width: 900px) {
  .carousel-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    .carousel-item {
      width: 100% !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        margin-left: 0;
      }
      h6 {
        margin-left: 0;
      }
      p {
        margin-left: 0;
      }
    }
  }
  .link {
    margin-left: 0 !important;
  }
}
@media only screen and (max-width: 892px) {
  .intro {
    background-image: none;
    padding-top: 30px;
  }
  .intro-paski {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .center {
    margin-left: 0 !important;
  }
  .intro-paski {
    padding-top: 0 !important;
    ul {
      li {
        margin: 10px 0;
      }
    }
  }
  li::after {
    display: none;
  }
  .sledushi-3 {
    img {
      width: 90%;
    }
  }
  .sledushi-2 {
    img {
      width: 90%;
    }
  }
  .sledushi-1 {
    img {
      width: 90%;
    }
  }
  .themost {
    li {
      text-align: center;
      p {
        width: 100% !important;
        padding: 0 30px 0 50px !important;
      }
    }
  }
  .left {
    p {
      width: 100% !important;
    }
  }
  .carousel-item {
    h6 {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
  .humans {
    p {
      width: 100% !important;
    }
    h5 {
      margin-left: 0 !important;
      text-align: center;
    }
  }
  .link {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
  .left {
    .about {
      display: none;
    }
  }
}
</style>
