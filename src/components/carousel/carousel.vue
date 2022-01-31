<template>
  <div class="sdtet-jumbotron" id="home">
    <div class="banner" style="margin-bottom: 32px">
      <div
        style="
          font-family: 'Oswald', sans-serif;
          text-shadow: 3px 2px 0 #111;
          margin: 0 7% 0 auto;
          text-align: center;
          padding-top: 14px;
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
        <div>
          <img
            style="height: 50px"
            src="https://sdtet.s3.us-west-1.amazonaws.com/sponsors/barona.png"
            alt=""
          />
        </div>
        <div style="color: white; font-size: 48px">San Diego Tết Festival</div>
        <div style="color: white; font-size: 32px">Hội Chợ Tết San Diego</div>
        <div style="color: white; font-size: 32px"></div>
        <div style="color: white; font-size: 32px">February 4-6, 2022</div>
      </div>
    </div>

    <div style="overflow: hidden; position: relative; display: none">
      <div style="text-align: center">
        <v-alert
          style="max-width: 960px; margin: 16px auto"
          border="top"
          colored-border
          type="info"
          elevation="2"
        >
          IMPORTANT: Per state of California, San Diego County and City's public
          health regulations, we ask that all attendees ages 2+ be fully
          vaccinated or have received a negative COVID-19 test. Details
          <a href="#covid">below</a>
        </v-alert>
        <div
          style="
            padding: 2rem;
            display: flex;
            max-width: 730px;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: center;
          "
        >
          <v-card
            color="#f0d6b1"
            min-height="150"
            href="https://sdtet.s3.us-west-1.amazonaws.com/documents/VAYA_Tet_Sponsorship_2022.pdf"
            outlined
            target="_blank"
            rounded
            width="150"
            class="ma-2 pa-2"
            hover
          >
            <p>
              <v-icon color="#362b20" style="font-size: 70px">mdi-crown</v-icon>
            </p>
            <p>2022 Sponsorship Package</p>
          </v-card>
          <v-card
            color="#f0d6b1"
            min-height="150"
            href="https://bit.ly/3C0penX"
            outlined
            target="_blank"
            rounded
            width="150"
            class="ma-2 pa-2"
            hover
          >
            <p>
              <v-icon color="#362b20" style="font-size: 70px"
                >mdi-storefront-outline</v-icon
              >
            </p>
            <p>2022 Vendor Application</p>
          </v-card>
          <v-card
            color="#f0d6b1"
            min-height="150"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeS0ymzHzoZEWQHzMTYqrXXDCY00LR_b2CYterqOS_gfEvhlw/viewform"
            outlined
            target="_blank"
            rounded
            width="150"
            class="ma-2 pa-2"
            hover
          >
            <p>
              <v-icon color="#362b20" style="font-size: 70px">mdi-food</v-icon>
            </p>
            <p>2022 Food Vendor Application</p>
          </v-card>
          <v-card
            color="#f0d6b1"
            min-height="150"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdqJkmjyTp703_6QinpAqiMzz_DJiTOMIpvoBbOlciPTJsomg/viewform"
            outlined
            target="_blank"
            rounded
            width="150"
            class="ma-2 pa-2"
            hover
          >
            <p>
              <v-icon color="#362b20" style="font-size: 70px"
                >mdi-microphone-variant</v-icon
              >
            </p>
            <p>2022 Golden Voice Application</p>
          </v-card>
          <v-card
            color="#f0d6b1"
            min-height="150"
            href=" https://bit.ly/33gp7c9"
            outlined
            target="_blank"
            rounded
            width="150"
            class="ma-2 pa-2"
            hover
          >
            <p>
              <v-icon color="#362b20" style="font-size: 70px"
                >mdi-dance-ballroom</v-icon
              >
            </p>
            <p>2022 Step Up Application</p>
          </v-card>
          <v-card
            color="#f0d6b1"
            min-height="150"
            href="https://bit.ly/3rY3sjl"
            outlined
            target="_blank"
            rounded
            width="150"
            class="ma-2 pa-2"
            hover
          >
            <p>
              <v-icon color="#362b20" style="font-size: 70px"
                >mdi-human-female-dance</v-icon
              >
            </p>
            <p>2022 Kids Got Talent</p>
          </v-card>
          <v-card
            color="#f0d6b1"
            min-height="150"
            href="https://www.signupgenius.com/go/10c0e4babae2ea3fc1-sandiego"
            outlined
            target="_blank"
            rounded
            width="150"
            class="ma-2 pa-2"
            hover
          >
            <p>
              <v-icon color="#362b20" style="font-size: 70px"
                >mdi-face-man-shimmer</v-icon
              >
            </p>
            <p>2022 Volunteer Signups</p>
          </v-card>
        </div>

        <br />
        <p>Questions? Email us at <b>info@sdtet.com</b></p>
        <p style="text-align: center">
          <v-btn
            style="max-width: 350px"
            href="https://www.paypal.com/fundraiser/charity/1440775"
            target="_blank"
            rounded
            color="#b5741c"
            >Donate to us!</v-btn
          >
        </p>
        <p>
          Check donations may be made payable to "Vietnamese American Youth
          Alliance"<br />and mailed to
          <u>PO Box 711912, San Diego, CA 92171</u>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "./static/carousel/blossoms-banner.png",
        },
        {
          src: "./static/carousel/fans.jpg",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.$emit("showModal");
    },
  },
};
</script>

<style lang="scss">
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
