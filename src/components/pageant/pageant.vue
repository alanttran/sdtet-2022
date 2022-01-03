<template>
  <div id="pageant" class="sdtet-container">
    <br />
    <h1 class="sdtet-text-align-center">{{ pageantData.title }}</h1>
    <div class="sdtet-text-align-center">
      <div v-if="signUpTimeLeft >= 0">
        <v-btn
          href="https://forms.gle/dB2hLkfNsWqXo4Y58"
          target="_blank"
          large
          round
          color="teal"
          dark
          v-smooth-scroll
          >Sign up for Pageant 2020!</v-btn
        >
      </div>
      <div v-else>
        <p>
          <span class="navy"
            ><b
              >Join us on Saturday February 5th at 6:30PM on the main stage to
              cheer on our girls!</b
            ></span
          >
        </p>
      </div>
    </div>
    <br />
    <div class="ml-5 mr-5">
      <img
        class="ms-vn-logo ml-2 mb-2"
        style="float: right; max-width: 100%"
        src="../../assets/MissVietnam_Logo.png"
      />
      <div class="ms-vn-text" v-html="pageantText"></div>
    </div>
    <br />
    <h1 class="sdtet-text-align-center">Royal Court 2021</h1>
    <h2 class="sdtet-text-align-center">{{ pageantData.slogan }}</h2>
    <div class="sdtet-text-align-center">
      <img
        alt="Miss Vietnam San Diego Logo"
        style=""
        src="../../assets/msvn-court.png"
      />
    </div>
    <!-- <div style="max-width: 750px; margin: 0 auto">
      <iframe width="100%" height="415" src="https://www.youtube.com/embed/HJZmvB7tIOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div><br/> -->
    <h1 class="sdtet-text-align-center">2022 Contestants!</h1>

    <v-container mb-4>
      <v-layout id="contestants" row wrap>
        <v-flex
          style="display: flex; flex-direction: column"
          v-for="contestant in contestants"
          :key="contestant.id"
          xs12
          sm6
          md4
          lg4
        >
          <v-card
            class="ma-4"
            style="flex: auto; display: flex; flex-direction: column"
          >
            <v-img
              :src="contestant.image"
              height="300px"
              style="background-position: center top; flex: none"
            >
              <v-btn
                class="msvn-vote-button"
                v-if="pageantData.voting"
                :href="contestant.facebook"
                target="_blank"
                round
                small
                color="amber darken-1"
                dark
                >Vote!</v-btn
              >
            </v-img>
            <v-card-text
              class="black--text pb-0"
              style="flex: 300px; align-items: start"
            >
              <div>
                <h4 class="title mb-3">
                  {{ contestant.number }}. {{ contestant.name }}
                </h4>
                <h4 class="title mb-3" style="color: red">
                  {{ contestant.title }}
                </h4>
                <p>
                  <i>{{ contestant.school }}</i>
                </p>
                <p>"{{ contestant.bio }}"</p>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script type="text/javascript">
import Airtable from "airtable";
import data from "./pageant.json";
import pageantText from "./pageant.md";

export default {
  data() {
    return {
      pageantText: pageantText,
      contestants: [],
      pageantData: data,
    };
  },
  mounted() {
    const base = new Airtable({ apiKey: "keyOHQYdXt9naCeJk" }).base(
      "appDB8Qv2eJZiHZnY"
    );
    base("Pageant")
      .select({
        view: "Grid view",
        fields: [
          "Name",
          "Number",
          "School",
          "Title",
          "Image",
          "Bio",
          "Facebook",
        ],
        filterByFormula: "NOT({Active} = '')",
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((record) => {
          console.log("Retrieved", record);
          this.contestants.push({
            id: record.id,
            name: record.get("Name"),
            number: record.get("Number"),
            school: record.get("School"),
            bio: record.get("Bio"),
            image: record.fields.Image[0].url,
          });
        });
      });
  },
  created() {
    // axios
    //   .get("https://admin.sdtet.com/php_file/get_pageant_contestants.php")
    //   .then((response) => {
    //     // JSON responses are automatically parsed.
    //     this.contestants = response.data;
    //     //console.log(response.data)
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    var moment = require("moment");
    var todaysdate = moment();
    var signUpDate = moment(this.pageantData.signups_close_date);
    this.signUpTimeLeft = signUpDate.diff(todaysdate, "days");
  },
};
</script>

<style lang="scss">
@import "pageant";
</style>