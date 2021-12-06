<template>
  <v-parallax height="800px" :src="require('@/assets/tet-bg-02.jpg')">
    <div class="sdtet-entertainment-container">
      <div class="sdtet-container">
        <h1 id="entertainment" class="sdtet-text-align-center">Entertainment</h1>
        <!-- <p class="sdtet-text-align-center">Would you like to be part of our entertainment program? Apply below!</p> -->

        <v-layout row wrap justify-center>
          <v-flex sm12 md4 lg3>
            <v-card class="sdtet-entertainment-card">
              <v-img :src="require('@/assets/StepUpDance.jpg')" class="white--text align-end">
                <v-card-title>Step Up Dance Competition</v-card-title>
              </v-img>
              <v-card-text class="black--text">
                <div v-html="stepUpDanceText"></div>
                <p v-if="stepUpDanceTimeLeft < 0">
                  <b>Check out the competion at on {{stepUpDanceDay}}!</b>
                </p>
                <p v-if="stepUpDanceTimeLeft >= 0">
                  <b>Deadline: {{stepUpDanceEnd}}</b>
                </p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  v-if="stepUpDanceTimeLeft >= 0"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfja6BlaKsTy52U2vW8KNGFj1smaMorOm9rmtEA1UgyzccP1g/viewform"
                  target="_blank"
                  block
                  outline
                  round
                  color="lime darken-4"
                >
                  Sign up
                  <span
                    v-if="stepUpDanceTimeLeft < 10"
                  >&nbsp;- {{stepUpDanceTimeLeft}} days left!</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex sm12 md4 lg3>
            <v-card class="sdtet-entertainment-card">
              <v-img :src="require('@/assets/KidsSpotlight.jpg')" class="white--text align-end">
                <v-card-title style="text-shadow: 1px solid black">Kid's Spotlight</v-card-title>
              </v-img>

              <v-card-text class="black--text">
                <div v-html="kidsSpotlightText"></div>

                <div v-if="kidsSpotlightTimeLeft < 0">
                  <p>
                    See the kids at
                    <b>Cultural Village - {{kidsSpotlightDay}}!</b>
                  </p>
                  <p>Questions? Email: info@sdtet.com</p>
                </div>

                <div v-if="kidsSpotlightTimeLeft >= 0">
                  <div>
                    <br />
                    <b>Deadline: {{kidsSpotlightEnd}}</b>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  v-if="kidsSpotlightTimeLeft >= 0"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScNCuKiWtoyWI5F_sQsa-Zz9AFCN4Je3QI_ZzLkj3F6kIdZUw/viewform"
                  target="_blank"
                  block
                  outline
                  round
                  color="lime darken-4"
                  dark
                >
                  Sign Up
                  <span
                    v-if="kidsSpotlightTimeLeft < 10"
                  >&nbsp;- {{kidsSpotlightTimeLeft}} days left!</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex sm12 md4 lg3>
            <v-card class="sdtet-entertainment-card">
              <v-img :src="require('@/assets/GoldenVoice.jpg')" class="white--text align-end">
                <v-card-title>Golden Voice</v-card-title>
              </v-img>
              <v-card-text class="black--text">
                <div v-html="goldenVoiceText"></div>

                <div v-if="goldenVoiceTimeLeft < 0">
                  <p>
                    Cheer on the singers at
                    <b>Main Stage - {{goldenVoiceDay}}!</b>
                  </p>
                  <p>Questions? Email: goldenvoice@sdtet.com</p>
                </div>

                <div v-if="goldenVoiceTimeLeft >= 0">
                  <br />
                  <b>Deadline: {{goldenVoiceEnd}}</b>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  v-if="goldenVoiceTimeLeft >= 0"
                  href="https://docs.google.com/forms/d/139EXOZnnJULnUa8Elhepu-c7cytSLSgt7dpi7uOnwCg/edit"
                  target="_blank"
                  block
                  outline
                  round
                  color="lime darken-4"
                  dark
                >
                  Sign up
                  <span
                    v-if="goldenVoiceTimeLeft < 10"
                  >&nbsp;- {{goldenVoiceTimeLeft}} days left!</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <!-- <v-flex sm12 md4 lg3>
          <v-card class="sdtet-entertainment-card">
            <v-card-media src="https://purrfectcatbreeds.com/wp-content/uploads/2016/06/cute-cat-halloween-costumes.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-3">Pet Costume Contest</h3>
                <div>We heard you loved the dog costume contest last year and we are excited to bring this back for ALL pets!</div><br/>
                  
                <p><b>First 30 to sign up on Sunday at Cultural Village 2:30PM will be in the contest at 4:00PM.</b></p>
                  
              </div>
            </v-card-title>
            <v-card-actions>
              
            </v-card-actions>
          </v-card>
          </v-flex>-->
        </v-layout>
      </div>
    </div>
  </v-parallax>
</template>

<script type="text/javascript">
import stepUpDanceText from "./step-up-dance.md";
import kidsSpotlightText from "./kids-spotlight.md";
import goldenVoiceText from "./golden-voice.md";

export default {
  data() {
    return {
      stepUpDanceText: stepUpDanceText,
      kidsSpotlightText: kidsSpotlightText,
      goldenVoiceText: goldenVoiceText,
      stepUpDanceTimeLeft: 0,
      kidsSpotlightTimeLeft: 0,
      goldenVoiceTimeLeft: 0,
      stepUpDanceEnd: "",
      kidsSpotlightEnd: "",
      goldenVoiceEnd: "",
      stepUpDanceDay: "",
      kidsSpotlightDay: "",
      goldenVoiceDay: ""
    };
  },
  created() {
    var moment = require("moment");
    var todaysdate = moment();

    this.stepUpDanceDay = "Friday Jan 24th at 8:00pm";
    this.kidsSpotlightDay = "Sunday Jan 26th at 1:00pm";
    this.goldenVoiceDay = "Sunday Jan 26th at 1:00pm";

    var stepUpDanceDate = moment("2020-01-10");
    var kidsSpotlightDate = moment("2020-01-02");
    var goldenVoiceDate = moment("2020-01-10");

    this.stepUpDanceEnd = stepUpDanceDate.format("LL");
    this.kidsSpotlightEnd = kidsSpotlightDate.format("LL");
    this.goldenVoiceEnd = goldenVoiceDate.format("LL");

    this.stepUpDanceTimeLeft = stepUpDanceDate.diff(todaysdate, "days");
    this.kidsSpotlightTimeLeft = kidsSpotlightDate.diff(todaysdate, "days");
    this.goldenVoiceTimeLeft = goldenVoiceDate.diff(todaysdate, "days");
  }
};
</script>

<style lang="scss">
@import "entertainment";
</style>