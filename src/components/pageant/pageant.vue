<template>
  <div id="pageant" class="sdtet-container">
    <br />
    <h1 class="sdtet-text-align-center">{{ pageantData.title }}</h1>
    <div class="sdtet-text-align-center">
      <div hidden>
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
    <!-- <div style="max-width: 750px; margin: 0 auto">
      <iframe width="100%" height="415" src="https://www.youtube.com/embed/HJZmvB7tIOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div><br/> -->
    <h1 class="sdtet-text-align-center">Congratulations to our 2022 Court!</h1>
    <div style="margin-left: 12%" v-if="voting">
        <p>Miss People's Choice Rules:
    <ol>
      <li>Like the <a target="_blank" href="https://www.facebook.com/missvietnamsandiego">Miss Vietnam San Diego page</a></li>
      <li>Like your favorite contestants' photos on FB & IG (links below)</li>
    </ol>
    <br/>
    The contestant with the most votes (FB+IG) by 7:00 PM on pageant day (February 5) will be Miss People's Choice*! <br/>
    <small>* If the front-runner for Miss People’s Choice is crowned in the Royal Court, the title will be awarded to the contestant with the next highest number of votes outside of Royal Court.</small>
    </p>
    <p>Every vote counts!</p>
    </div>
    <v-container mb-4>
      <v-layout id="contestants" row wrap>
        <v-flex
          v-for="contestant in contestants"
          :key="contestant.id"
          
          xs12
          sm6
          md4
          lg4
        >
          <v-card
            class="ma-4"
            min-height="600px"
            style="flex: auto; display: flex; flex-direction: column"
          >
            <v-img
              :src="contestant.image"
              height="300px"
              aspect-ratio="1"
              style="background-position: center top; flex: none"
            >
            </v-img>
            <v-card-text
              class="black--text pb-0"
              style="flex: 200px; align-items: start"
            >
              <div>
                <h4 class="title mb-3">
                  {{ contestant.number }}. {{ contestant.name }}
                </h4>
                <h4 class="title mb-3" style="color: red">
                  {{ contestant.title }}
                  <div v-if="contestant.congeniality">
                    Miss Congeniality
                  </div>
                </h4>
                <p>
                  <i>{{ contestant.school }}</i>
                </p>
                <p>"{{ contestant.bio }}"</p>
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions v-if="voting">
              <div class="mx-2">Vote for me!</div>
              <v-spacer></v-spacer>
              <v-btn target="_blank" :href="contestant.facebook" icon>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn target="_blank" :href="contestant.instagram" icon>
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </v-card-actions>
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
      voting: false,
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
          "Congeniality",
          "Facebook",
          "Instagram",
        ],
        filterByFormula: "NOT({Active} = '')",
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((record) => {
          var title = "";
          var congeniality = false;

          if (record.get("Title") != null) {
            title = record.get("Title");
          }

          if (record.get("Congeniality") != null) {
            congeniality = true;
          }

          this.contestants.push({
            id: record.id,
            name: record.get("Name"),
            number: record.get("Number"),
            school: record.get("School"),
            bio: record.get("Bio"),
            title: title,
            congeniality: congeniality,
            facebook: record.get("Facebook"),
            instagram: record.get("Instagram"),
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
    var votingEnd = moment("Feb 5, 2022 7:00 PM");
    if (moment().diff(votingEnd) < 0) {
      this.voting = true;
    }
  },
};
</script>

<style lang="scss">
@import "pageant";
</style>