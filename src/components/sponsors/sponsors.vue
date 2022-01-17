<template>
  <div id="sponsors" class="sdtet-container">
    <div class="sdtet-divider"></div>
    <div class="ml-5 mr-5 mb-5">
      <v-layout row wrap>
        <v-flex xs12 md5 lg5>
          <h1>Sponsors</h1>
          <p v-if="sponsorData.sponsorSignUp">
            <v-btn
              color="#b5741c"
              style="max-width: 350px"
              v-bind:href="sponsorData.applicationURL"
              target="_blank"
              block
              rounded
              >2022 Sponsorship App
            </v-btn>
          </p>
          <p>
            <b>Questions or details?: </b>
            <a href="mailto:sponsor@sdtet.com">sponsor@sdtet.com</a>
          </p>
          <div v-html="sponsorText"></div>
        </v-flex>

        <v-flex xs12 md7 lg7 class="sdtet-text-align-center">
          <h1 class="sdtet-h1-spacer">&nbsp;</h1>
          <h2>{{ sponsorData.slogan }}</h2>
          <br />
          <v-layout
            class="sdtet-sponsors-logos-container"
            row
            wrap
            justify-space-around
          >
            <a
              v-for="sponsor in sponsors"
              :key="sponsor.id"
              :href="sponsor.href"
              target="_blank"
            >
              <img class="ma-3" :src="sponsor.image" :alt="sponsor.name" />
            </a>
          </v-layout>
          <img
            style="height: 400px; margin-top: 30px"
            src="../../assets/sponsors-lion.png"
            alt=""
          />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script type="text/javascript">
import data from "./sponsors.json";
import markdown from "./sponsors.md";
import Airtable from "airtable";

export default {
  data() {
    return {
      sponsors: [],
      sponsorData: data,
      sponsorText: markdown,
    };
  },
  mounted() {
    const base = new Airtable({ apiKey: "keyOHQYdXt9naCeJk" }).base(
      "appDB8Qv2eJZiHZnY"
    );
    base("Sponsors")
      .select({
        view: "Grid view",
        fields: ["Name", "href", "Attachments"],
        filterByFormula: "NOT({Active} = '')",
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((record) => {
          //console.log("Retrieved", record);
          this.sponsors.push({
            id: record.id,
            name: record.get("Name"),
            href: record.get("href"),
            image: record.fields.Attachments[0].url,
          });
        });
      });
  },
};
</script>

<style lang="scss">
@import "sponsors";
</style>