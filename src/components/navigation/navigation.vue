<template>
  <nav class="sdtet-navigation">
    <div id="sdtet-mobile-title">San Diego Tết Festival</div>
    <ul class="sdtet-navigation__links">
      <li>
        <a id="sdtet-nav-logo" href="#home" v-smooth-scroll
          ><img
            style="width: 25px"
            src="../../assets/tiger-logo-2.png"
            alt="Year of Tiger Logo"
        /></a>
      </li>
      <li><a href="#schedule" v-smooth-scroll>Schedule</a></li>
      <li><a href="#pageant" v-smooth-scroll>Pageant</a></li>
      <li><a href="#vendors" v-smooth-scroll>Vendors</a></li>
      <li>
        <a href="#volunteers" v-smooth-scroll>Volunteers</a>
      </li>
      <li><a href="#sponsors" v-smooth-scroll>Sponsors</a></li>
      <!-- <li><a href="#about" v-smooth-scroll>About</a></li> -->
      <li><a href="#contact" v-smooth-scroll>Contact</a></li>
      <li>
        <a
          href="https://www.paypal.com/fundraiser/charity/1440775"
          target="_blank"
          >Donate</a
        >
      </li>
    </ul>
    <div class="sdtet-navigation-menu" style="padding-top: 3px">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon large>
            <v-icon large color="black darken-1">menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile>
            <a href="#schedule" v-smooth-scroll
              ><v-list-tile-title>Schedule</v-list-tile-title></a
            >
          </v-list-tile>
          <v-list-tile>
            <a href="#pageant" v-smooth-scroll
              ><v-list-tile-title>Pageant</v-list-tile-title></a
            >
          </v-list-tile>
          <v-list-tile>
            <a href="#vendors" v-smooth-scroll
              ><v-list-tile-title>Vendors</v-list-tile-title></a
            >
          </v-list-tile>
          <v-list-tile>
            <a href="#volunteers" v-smooth-scroll
              ><v-list-tile-title>Volunteers</v-list-tile-title></a
            >
          </v-list-tile>
          <v-list-tile>
            <a href="#sponsors" v-smooth-scroll
              ><v-list-tile-title>Sponsors</v-list-tile-title></a
            >
          </v-list-tile>
          <v-list-tile>
            <a href="#about" v-smooth-scroll
              ><v-list-tile-title>About</v-list-tile-title></a
            >
          </v-list-tile>
          <v-list-tile>
            <a href="#contact" v-smooth-scroll
              ><v-list-tile-title>Contact</v-list-tile-title></a
            >
          </v-list-tile>
          <v-list-tile>
            <a href="https://www.paypal.com/fundraiser/charity/1440775"
              ><v-list-tile-title>Donate</v-list-tile-title></a
            >
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      title: "Navigation!",
    };
  },
};
</script>

<style lang="scss">
@import "navigation";
</style>