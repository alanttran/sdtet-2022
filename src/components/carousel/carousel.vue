<template>
  <div class="sdtet-jumbotron" id="home">
    <div class="banner" style="margin-bottom: 32px">
      <div
        style="
          font-family: 'Oswald', sans-serif;
          text-shadow: 3px 2px 0 #111;
          margin: 0 7% 0 auto;
          text-align: center;
          padding-top: 40px;
          max-width: 500px;
        "
      >
        <p
          style="
            color: white;
            font-family: 'Arial';
            text-shadow: 2px 1px 0 #111;
          "
        >
          The <b>Vietnamese American Youth Alliance</b> &
          <b>Vietnamese Federation of San Diego</b>
        </p>
        <!-- <div>
          <img
            style="height: 50px"
            src="https://sdtet.s3.us-west-1.amazonaws.com/sponsors/barona.png"
            alt=""
          />
        </div> -->
        <div style="color: white; font-size: 48px">San Diego Tết Festival</div>
        <div style="color: white; font-size: 32px">Hội Chợ Tết San Diego</div>
        <div style="color: white; font-size: 32px"></div>
        <div style="color: white; font-size: 32px">January 27-29, 2023</div>
      </div>
    </div>

    <div
      class="live-elements"
      v-if="festivalStarts"
      style="
        max-width: 960px;
        max-height: 540px;
        margin: 0 auto;
        padding: 56.25% 0 0 0;
        position: relative;
      "
    >
      <iframe
        src="https://vimeo.com/event/1739871/embed"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
      ></iframe>
    </div>
    <div
      class="live-elements"
      v-if="festivalStarts"
      style="
        max-width: 960px;
        padding-top: 16px;
        text-align: center;
        margin: 0 auto;
      "
    >
      <p style="display: flex; justify-content: center; align-items: center">
        Livestream internet sponsored by
        <a target="_blank" href="https://otrmobile.com/"
          ><img
            style="height: 30px; margin-left: 16px"
            src="../../assets/OTR-logo.png"
            alt=""
        /></a>
      </p>
    </div>
    <div
      style="width: 100%; max-width: 960px !important; margin: 0 auto"
      class="embed-container live-elements"
      data-page-width="414"
      data-page-height="640"
      id="ypembedcontainer"
    >
      <iframe
        src="https://www.yumpu.com/en/embed/view/ZHmCLxadrD2AfyPS"
        frameborder="0"
        allowfullscreen="true"
        allowtransparency="true"
      ></iframe
      ><br /><a
        href="https://www.yumpu.com/en/document/view/66301395/17th-annual-san-diego-tet-festival"
        title="17th Annual San Diego Tết Festival"
        target="_blank"
        >17th Annual San Diego Tết Festival</a
      >
    </div>
  </div>
</template>

<script src="https://players.yumpu.com/modules/embed/yp_r_iframe.js"></script>
<script>
export default {
  data() {
    return {
      festivalStarts: false,
      items: [
        {
          src: "../static/carousel/blossoms-banner.png",
        },
        {
          src: "../static/carousel/fans.jpg",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.$emit("showModal");
    },
  },
  created() {
    var moment = require("moment");
    var festivalStart = moment("Feb 4, 2022 5:00 PM");
    if (moment().diff(festivalStart) > 0) {
      this.festivalStarts = false;
    }
  },
};
</script>

<style lang="scss">
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sdtet-banner-message {
  padding-left: 20px;
  padding-right: 20px;
}
@media screen and (max-width: 800px) {
  .sdtet-banner-message {
    font-size: 2.5em;
  }
  .sdtet-message-1 {
    display: none;
  }
}
.sdtet-center-logo {
  max-height: 180px;
  width: 100%;
  max-width: 375px;
}
.sdtet-date-container {
  width: 100%;
  padding-top: 30px;
  font-size: 16px;
}
@media screen and (max-width: 800px) {
  .sdtet-date-container {
    font-size: 1em;
  }
}
td {
  padding-right: 7px;
}
</style>
