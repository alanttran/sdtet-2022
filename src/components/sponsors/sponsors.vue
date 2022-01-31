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
          <div class="sdtet-sponsors-logos-container">
            <a v-for="t in title" :key="t.id" :href="t.href" target="_blank">
              <img
                style="height: 100px"
                class="ma-3"
                :src="t.image"
                :alt="t.name"
              />
            </a>
          </div>
          <v-layout
            class="sdtet-sponsors-logos-container"
            row
            wrap
            justify-space-around
          >
            <a
              v-for="platinum in platinums"
              :key="platinum.id"
              :href="platinum.href"
              target="_blank"
            >
              <img
                style="height: 80px"
                class="ma-3"
                :src="platinum.image"
                :alt="platinum.name"
              />
            </a>
          </v-layout>
          <v-layout
            class="sdtet-sponsors-logos-container"
            row
            wrap
            justify-space-around
          >
            <a
              v-for="gold in golds"
              :key="gold.id"
              :href="gold.href"
              target="_blank"
            >
              <img class="ma-3" :src="gold.image" :alt="gold.name" />
            </a>
          </v-layout>
          <v-layout
            class="sdtet-sponsors-logos-container"
            row
            wrap
            justify-space-around
          >
            <a
              v-for="silver in silvers"
              :key="silver.id"
              :href="silver.href"
              target="_blank"
            >
              <img class="ma-3" :src="silver.image" :alt="silver.name" />
            </a>
          </v-layout>
          <v-layout
            class="sdtet-sponsors-logos-container"
            row
            wrap
            justify-space-around
          >
            <a
              v-for="bronze in bronzes"
              :key="bronze.id"
              :href="bronze.href"
              target="_blank"
            >
              <img class="ma-3" :src="bronze.image" :alt="bronze.name" />
            </a>
          </v-layout>
          <v-layout
            class="sdtet-sponsors-logos-container"
            row
            wrap
            justify-space-around
          >
            <a
              v-for="other in others"
              :key="other.id"
              :href="other.href"
              target="_blank"
            >
              <img class="ma-3" :src="other.image" :alt="other.name" />
            </a>
          </v-layout>
          <!-- <img
            style="height: 400px; margin-top: 30px"
            src="../../assets/sponsors-lion.png"
            alt=""
          /> -->
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
      title: [],
      platinums: [],
      golds: [],
      silvers: [],
      bronzes: [],
      others: [],
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
        fields: ["Name", "href", "Attachments", "Type"],
        filterByFormula: "NOT({Active} = '')",
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((record) => {
          if (record.get("Type") === "Title") {
            this.title.push({
              id: record.id,
              name: record.get("Name"),
              href: record.get("href"),
              image: record.fields.Attachments[0].url,
            });
          } else if (record.get("Type") === "Platinum") {
            this.platinums.push({
              id: record.id,
              name: record.get("Name"),
              href: record.get("href"),
              image: record.fields.Attachments[0].url,
            });
          } else if (record.get("Type") === "Gold") {
            this.golds.push({
              id: record.id,
              name: record.get("Name"),
              href: record.get("href"),
              image: record.fields.Attachments[0].url,
            });
          } else if (record.get("Type") === "Silver") {
            this.silvers.push({
              id: record.id,
              name: record.get("Name"),
              href: record.get("href"),
              image: record.fields.Attachments[0].url,
            });
          } else if (record.get("Type") === "Bronze") {
            this.bronzes.push({
              id: record.id,
              name: record.get("Name"),
              href: record.get("href"),
              image: record.fields.Attachments[0].url,
            });
          } else {
            this.others.push({
              id: record.id,
              name: record.get("Name"),
              href: record.get("href"),
              image: record.fields.Attachments[0].url,
            });
          }
        });
      });
  },
};
</script>

<style lang="scss">
@import "./sponsors";
</style>