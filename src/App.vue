<template>
  <v-app>
    <v-main>
      <navigation></navigation>
      <carousel @showModal="showModal()"></carousel>
      <schedule></schedule>
      <!-- <entertainment></entertainment> -->
      <pageant></pageant>
      <vendors></vendors>
      <volunteers></volunteers>
      <sponsors></sponsors>
      <about></about>
      <directions></directions>

      <div style="text-align: center">
        <span>© 2022 San Diego Tết Festival</span>
      </div>
      <!-- <v-dialog v-model="dialog" width="750">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title
            >16th Annual SD Tết Festival Goes Virtual Feb 13, 2021</v-card-title
          >

          <v-card-text>
            <div style="width: 400px; padding: 1rem; margin: 0 auto">
              <img width="100%" src="./assets/tet-at-home.png" alt />
            </div>
            <p>
              If you have any questions or feedback, send them to
              <b>info@sdtet.com!</b>
            </p>
            <div style="text-align: center; padding-top: 20px"></div>

            <v-layout row wrap justify-space-around class="sdtet-text-align-center">
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal"  href="https://docs.google.com/forms/d/e/1FAIpQLSeFBN14OgWFnXxMsXV2sst0vbBAkaqkCvZqo7OJx2ru0y8G-g/viewform" target="_blank">
                  <div class="pa-2 sdtet-text-align-center" >
                    <img src="./assets/FoodBooth.svg"><br/>
                    Food Vendor Application 2019
                  </div>
                </v-btn>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal" href="https://docs.google.com/forms/d/e/1FAIpQLSdL6Xf-TZOjUR3yzvCneQSUqzTqxwSHkfA1OhgHR7XgK7IqBw/viewform" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img src="./assets/GameBooth.svg"><br/>
                    Vendor Application 2019
                  </div>
                </v-btn>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-wrap-text" flat color="pink" style="height: auto" href="https://goo.gl/forms/Q67Pl4yvXMdUSUJv1" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img height="100" src="./assets/MissVietnam_Logo.png"><br/>
                    Miss Vietnam 2019 Application
                  </div>
                </v-btn>
              </v-flex>                     
            </v-layout>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="teal"
              text
              target="_blank"
              href="https://www.paypal.com/fundraiser/charity/1440775"
              >Donate to sdtet</v-btn
            >
            <v-btn color="primary" text @click="dialog = false"
              >Go to last year's Site</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>-->
    </v-main>
  </v-app>
</template>

<script>
import markdown from "./press-release-2021.md";
import navigation from "./components/navigation/navigation.vue";
import carousel from "./components/carousel/carousel.vue";
import schedule from "./components/schedule/schedule.vue";
//import entertainment from "./components/entertainment/entertainment.vue";
import pageant from "./components/pageant/pageant.vue";
import vendors from "./components/vendors/vendors.vue";
import volunteers from "./components/volunteers/volunteers.vue";
import sponsors from "./components/sponsors/sponsors.vue";
import about from "./components/about/about.vue";
import directions from "./components/directions/directions.vue";

export default {
  name: "app",
  components: {
    navigation,
    carousel,
    schedule,
    pageant,
    vendors,
    volunteers,
    sponsors,
    about,
    directions,
  },
  data() {
    return {
      dialog: false,
      pressReleaseText: markdown,
      timeLeft: "",
    };
  },
  methods: {
    showModal() {
      this.dialog = true;
    },
  },
  created() {
    var moment = require("moment");
    var todaysdate = moment();
    this.timeLeft = moment("20210213 12:00", "YYYYMMDD h:mm").diff(todaysdate); // 9 years ago
  },
};
</script>

<style lang="scss">
@import "theme/style.scss";
</style>
