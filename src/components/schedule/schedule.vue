<template>
  <div class="sdtet-schedule-background" id="schedule">
    <div class="sdtet-schedule-container sdtet-container">
      <br />
      <h1>Event Schedule</h1>
      <br />
      <h2>
        Friday Feb 4th<br />
        <small>5:00PM - 10:00PM</small>
      </h2>
      <v-container>
        <v-row :key="fri.id" v-for="fri in friday">
          <v-col sm="4" md="4" style="text-align: right">{{ fri.time }}</v-col>
          <v-col style="text-align: left">{{ fri.event }}</v-col>
        </v-row>
      </v-container>
      <h2>
        <br />
        Saturday Feb 5th<br />
        <small>11:00AM - 10:00PM</small>
      </h2>
      <v-container>
        <v-row :key="sat.id" v-for="sat in saturday">
          <v-col sm="4" md="4" style="text-align: right">{{ sat.time }}</v-col>
          <v-col style="text-align: left">{{ sat.event }}</v-col>
        </v-row>
      </v-container>
      <h2>
        <br />
        Sunday Feb 6th<br />
        <small>11:00AM - 6:00PM</small>
      </h2>
      <v-container>
        <v-row :key="sun.id" v-for="sun in sunday">
          <v-col sm="4" md="4" style="text-align: right">{{ sun.time }}</v-col>
          <v-col style="text-align: left">{{ sun.event }}</v-col>
        </v-row>
      </v-container>
    </div>
    <br />
  </div>
</template>

<script type="text/javascript">
import Airtable from "airtable";
import moment from "moment";

export default {
  data() {
    return {
      friday: [],
      saturday: [],
      sunday: [],
      hideSchedule: true,
    };
  },
  mounted() {
    const base = new Airtable({ apiKey: "keyOHQYdXt9naCeJk" }).base(
      "appDB8Qv2eJZiHZnY"
    );
    base("MainSchedule")
      .select({
        view: "Grid view",
        fields: ["Event", "Day", "Time"],
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((record) => {
          if (record.get("Day") === "Friday") {
            this.friday.push({
              id: record.id,
              event: record.get("Event"),
              time: moment(record.get("Time")).format("h:mm A"),
            });
          } else if (record.get("Day") === "Saturday") {
            this.saturday.push({
              id: record.id,
              event: record.get("Event"),
              time: moment(record.get("Time")).format("h:mm A"),
            });
          } else if (record.get("Day") === "Sunday") {
            this.sunday.push({
              id: record.id,
              event: record.get("Event"),
              time: moment(record.get("Time")).format("h:mm A"),
            });
          }
        });
      });
  },
};
</script>

<style lang="scss">
@import "schedule";
</style>