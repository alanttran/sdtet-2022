<template>
  <div id="sdtet-volunteers-section" class="sdtet-container">
    <div class="sdtet-divider"></div>
    <div class="ml-5 mr-5">
      <v-layout row wrap>
        <v-flex xs12 md6 order-md2>
          <h1 id="volunteers">Volunteers</h1>
          <p v-if="volunteerData.signups_open">
            <strong>We are currently looking for volunteers!</strong>
          </p>
          <p v-for="text in volunteerData.text" :key="text.id">{{ text }}</p>
          <p>
            -VAYA (For more info email us at
            <a href="mailto:volunteer@sdtet.com">volunteer@sdtet.com</a>)
          </p>
        </v-flex>
        <v-flex xs12 md6>
          <div class="sdtet-volunteers-forms-container sdtet-text-align-center">
            <div v-if="!volunteerData.signups_open">
              <p>
                <span class="navy">
                  <b>Signups TBD!</b>
                </span>
              </p>
              <div class="sdtet-h1-spacer">
                <h1>&nbsp;</h1>
              </div>
            </div>
            <div v-else>
              <!-- <p>
                <span class="sdtet-text-red-bold">Signups are open again!</span>
              </p> -->
              <a target="_blank" v-bind:href="volunteerData.signup_form_url">
                <v-btn round color="#f0d6b1">2022 Volunteer Signup</v-btn>
              </a>
            </div>

            <br />
            <v-layout row justify-center>
              <v-card
                color="#f0d6b1"
                height="175"
                href="https://s3-us-west-1.amazonaws.com/sdtet/documents/Release-of-Liability.pdf"
                outlined
                target="_blank"
                rounded
                width="175"
                hover="true"
                class="ma-2"
              >
                <p>
                  <v-icon color="#362b20" style="font-size: 70px"
                    >mdi-file-sign</v-icon
                  >
                </p>
                <p>Required: Consent & Release of Liability Form</p>
              </v-card>

              <v-card
                color="#f0d6b1"
                height="175"
                href="https://s3-us-west-1.amazonaws.com/sdtet/documents/hours_verification.pdf"
                outlined
                target="_blank"
                rounded
                width="150"
                hover="true"
                class="ma-2"
              >
                <p>
                  <v-icon color="#362b20" style="font-size: 70px"
                    >mdi-clipboard-clock-outline</v-icon
                  >
                </p>
                <p>Optional: Hours Verification Form</p>
              </v-card>
            </v-layout>
          </div>
          <br />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<style lang="scss">
@import "volunteers";
</style>

<script>
import data from "./volunteers.json";

export default {
  data() {
    return {
      volunteerData: data,
    };
  },
};
</script>