<template>
  <v-main>
    <navigation></navigation>
    <carousel></carousel>
    <!-- <covid></covid> -->
    <schedule></schedule>
    <!-- <entertainment></entertainment>-->
    <pageant></pageant>
    <vendors></vendors>
    <volunteers></volunteers>
    <sponsors></sponsors>
    <!--<about></about> -->
    <directions></directions>
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
      dialog: false,
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
