<template>
  <v-main>
    <navigation></navigation>
    <carousel></carousel>
    <schedule></schedule>
    <pageant></pageant>
    <vendors></vendors>
    <volunteers></volunteers>
    <sponsors></sponsors>
    <directions></directions>
    <v-dialog v-model="dialog" width="500" overlay-opacity="0.5">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          New Website in Progress
        </v-card-title>

        <v-card-text>
          <br />
          <img
            style="display: block; margin: 0 auto; width: 200px"
            src="../assets/cat-bunny.jpg"
          />
          <p>
            The San Diego Tet Festival is excited to return on
            <b>January 27-29, 2023</b>! While we are updating the website for
            Year of the Cat/Rabbit, our vendor & sponsor applications are open!
            The old site will also have the updated links. If you have any
            questions, don't hesitate to reach out to <b>info@sdtet.com</b>.
          </p>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://sdtet.s3.us-west-1.amazonaws.com/documents/VAYA_Tet_Sponsorship_2023.pdf"
                >Sponsor</a
              >
            </li>
            <li>
              <a target="_blank" href="https://forms.gle/2hH1Yd7BgLMsG7VD6"
                >Food Vendor</a
              >
            </li>
            <li>
              <a target="_blank" href="https://forms.gle/uZUHAv5EtXhZzoLF9"
                >Non-food Vendor</a
              >
            </li>
          </ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"
            >Continue to old site</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import markdown from "../press-release-2021.md";
import navigation from "../components/navigation/navigation.vue";
import carousel from "../components/carousel/carousel.vue";
//import covid from "../components/covid/covid.vue";
import schedule from "../components/schedule/schedule.vue";
// // //import entertainment from "./components/entertainment/entertainment.vue";
import pageant from "../components/pageant/pageant.vue";
import vendors from "../components/vendors/vendors.vue";
import volunteers from "../components/volunteers/volunteers.vue";
import sponsors from "../components/sponsors/sponsors.vue";
// // import about from "./components/about/about.vue";
import directions from "../components/directions/directions.vue";

export default {
  name: "home",
  components: {
    navigation,
    carousel,
    //covid,
    schedule,
    pageant,
    vendors,
    volunteers,
    sponsors,
    //about,
    directions,
  },
  data() {
    return {
      dialog: true,
      pressReleaseText: markdown,
      timeLeft: "",
    };
  },
  methods: {
    showModal() {
      this.dialog = false;
    },
  },
  created() {},
};
</script>

<style lang="scss">
@import "../theme/style.scss";
</style>
