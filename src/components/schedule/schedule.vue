<template>
  <div class="sdtet-schedule-background" id="schedule">
    <div class="sdtet-schedule-container sdtet-container">
      <br />
      <h1>Event Schedule TBD</h1>
      <p>We'll update the schedule once we know more!</p>
      <ul>
        <li>Fri Feb 4: 5PM - 10PM</li>
        <li>Sat Feb 5: 11AM - 10PM</li>
        <li>Sun Feb 6: 11AM - 6/9PM</li>
      </ul>
      <!-- <p><v-btn normal round color="amber lighten-1" href="#entertainment" v-smooth-scroll><span style="">Join Our entertainment program</span></v-btn></p> -->
      <v-layout align-center>
        <v-layout row style="display: none" class="sdtet-schedule-grid">
          <div class="sdtet-schedule-image-1"></div>
          <div class="sdtet-schedule-image-2"></div>
          <div class="sdtet-schedule-image-3"></div>
          <div class="sdtet-schedule-image-4"></div>
          <div class="sdtet-schedule-image-5"></div>
          <div class="sdtet-schedule-image-6"></div>
          <div class="sdtet-schedule-image-7"></div>
          <div class="sdtet-schedule-image-8"></div>
          <div class="sdtet-schedule-image-9"></div>
          <v-layout row style="position: relative; flex-wrap: wrap">
            <v-flex
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-right"
              >Main Stage</v-flex
            >
            <v-flex xs2 sm2 md2 lg2 class="sdtet-schedule-date pa-2"
              >FRIDAY JAN 24</v-flex
            >
            <v-flex
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-left"
              >Cultural Village</v-flex
            >
            <div class="sdtet-schedule-divider"></div>

            <!-- placeholder TBA -->
            <v-flex
              v-if="hideSchedule"
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-right"
            ></v-flex>
            <v-flex
              v-if="hideSchedule"
              xs2
              sm2
              md2
              lg2
              class="sdtet-schedule-date pa-2"
              >TBA</v-flex
            >
            <v-flex
              v-if="hideSchedule"
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-left"
            ></v-flex>
            <!-- end placeholder TBA -->

            <!-- Friday -->
            <template v-for="(events, start_time) in friday">
              <v-flex
                v-if="!hideSchedule"
                xs5
                sm5
                md5
                lg5
                class="sdtet-schedule-main-stage"
              >
                {{ events[0] ? events[0].english_event : "" }}
              </v-flex>
              <v-flex
                v-if="!hideSchedule"
                xs2
                sm2
                md2
                lg2
                class="sdtet-schedule-date pa-2"
                >{{ start_time }}
                <div v-if="start_time == '10:00 PM'">Festival Closes</div>
                <div v-if="start_time == '5:00 PM'">Festival Opens</div>
              </v-flex>
              <v-flex
                v-if="!hideSchedule"
                xs5
                sm5
                md5
                lg5
                class="sdtet-schedule-cultural-village"
              >
                {{ events[1] ? events[1].english_event : "" }}
              </v-flex>
            </template>

            <!-- Saturday -->
            <div class="sdtet-schedule-spacer"></div>
            <v-flex
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-right"
              >Main Stage</v-flex
            >
            <v-flex xs2 sm2 md2 lg2 class="sdtet-schedule-date pa-2"
              >SATURDAY JAN 25</v-flex
            >
            <v-flex
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-left"
              >Cultural Village</v-flex
            >
            <div class="sdtet-schedule-divider"></div>

            <v-flex
              v-if="hideSchedule"
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-right"
            ></v-flex>
            <v-flex
              v-if="hideSchedule"
              xs2
              sm2
              md2
              lg2
              class="sdtet-schedule-date pa-2"
              >TBA</v-flex
            >
            <v-flex
              v-if="hideSchedule"
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-left"
            ></v-flex>

            <template v-for="(events, start_time) in saturday">
              <v-flex
                v-if="!hideSchedule"
                xs5
                sm5
                md5
                lg5
                class="sdtet-schedule-main-stage"
              >
                {{ events[0] ? events[0].english_event : "" }}
              </v-flex>
              <v-flex
                v-if="!hideSchedule"
                xs2
                sm2
                md2
                lg2
                class="sdtet-schedule-date pa-2"
                >{{ start_time }}
                <div v-if="start_time == '10:00 PM'">Festival Closes</div>
                <div v-if="start_time == '11:00 AM'">Festival Opens</div>
              </v-flex>
              <v-flex
                v-if="!hideSchedule"
                xs5
                sm5
                md5
                lg5
                class="sdtet-schedule-cultural-village"
              >
                {{ events[1] ? events[1].english_event : "" }}
              </v-flex>
            </template>

            <!-- Sunday -->
            <div class="sdtet-schedule-spacer"></div>
            <v-flex
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-right"
              >Main Stage</v-flex
            >
            <v-flex xs2 sm2 md2 lg2 class="sdtet-schedule-date pa-2"
              >SUNDAY JAN 26</v-flex
            >
            <v-flex
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-left"
              >Cultural Village</v-flex
            >
            <div class="sdtet-schedule-divider"></div>

            <template v-for="(events, start_time) in sunday">
              <v-flex
                v-if="!hideSchedule"
                xs5
                sm5
                md5
                lg5
                class="sdtet-schedule-main-stage"
              >
                {{ events[0] ? events[0].english_event : "" }}
              </v-flex>
              <v-flex
                v-if="!hideSchedule"
                xs2
                sm2
                md2
                lg2
                class="sdtet-schedule-date pa-2"
                >{{ start_time }}
                <div v-if="start_time == '9:00 PM'">Carnival Closes</div>
                <div v-if="start_time == '11:00 AM'">Festival Opens</div>
                <div v-if="start_time == '6:00 PM'">
                  Festival Closes
                </div></v-flex
              >
              <v-flex
                v-if="!hideSchedule"
                xs5
                sm5
                md5
                lg5
                class="sdtet-schedule-cultural-village"
              >
                {{ events[1] ? events[1].english_event : "" }}
              </v-flex>
            </template>

            <v-flex
              v-if="hideSchedule"
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-right"
            ></v-flex>
            <v-flex
              v-if="hideSchedule"
              xs2
              sm2
              md2
              lg2
              class="sdtet-schedule-date pa-2"
              >TBA</v-flex
            >
            <v-flex
              v-if="hideSchedule"
              xs5
              sm5
              md5
              lg5
              class="sdtet-schedule-title sdtet-text-align-left"
            ></v-flex>
            <div class="sdtet-schedule-spacer"></div>
          </v-layout>
        </v-layout>
      </v-layout>
    </div>
    <br />
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
import Vue from "vue";

export default {
  data() {
    return {
      friday: {},
      saturday: {},
      sunday: {},
      hideSchedule: true,
    };
  },
  created() {
    axios
      .get("https://admin.sdtet.com/php_file/get_festival_schedule.php")
      .then((response) => {
        // Parse JSON start times into moment objects
        var moment = require("moment");
        for (var day in response.data) {
          for (var item in response.data[day]) {
            response.data[day][item].start_time = moment(
              response.data[day][item].start_time,
              "HH:mm"
            ).format("h:mm A");
            // console.log(response.data[day][item].start_time);
          }
        }
        // console.log("response", response.data);

        // Loop through each day and group Main Stage and Cultural Village events by their starting times
        for (var eventDay = 0; eventDay < 3; eventDay++) {
          // Get the day's events
          var eventList = response.data[Object.keys(response.data)[eventDay]];
          // Group main stage and cultural village events by start times
          var groupedEvents = {};
          for (var eventKey in eventList) {
            var event = eventList[eventKey];
            if (!groupedEvents[event.start_time]) {
              groupedEvents[event.start_time] = [];
            }
            // For each start time, the main stage event will be stored at
            // index 0 and the cultural village event at index 1
            Vue.set(groupedEvents[event.start_time], event.stage, event);
          }

          // Store the grouped events to their assigned day
          if (eventDay === 0) {
            this.friday = Object.assign({}, this.friday, groupedEvents);
          } else if (eventDay === 1) {
            this.saturday = Object.assign({}, this.saturday, groupedEvents);
          } else {
            this.sunday = Object.assign({}, this.sunday, groupedEvents);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="scss">
@import "schedule";
</style>