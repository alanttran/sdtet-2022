<template>
  <section id="covid" style="background: white; margin-top: 32px; text-shadow: 2px white; position: relative; border-radius: 5px; padding: 0 3rem 3rem 3rem;">
      <h1 style="text-shadow: none; text-align: center">
        Attendee Information
      </h1>
      <p>Updated: 02/03/2022</p>
      <p>The 2022 San Diego Tết Festival will operate under the following COVID-19 protocols recommended by San Diego County, City of San Diego and California Department of Public Health (CDPH) for an <a target="_blank" href="https://covid19.ca.gov/mega-events/#outdoor-events">Outdoor Mega-event</a>.</p>
      <h2 style="text-shadow: none">Required to Enter</h2>
      <div v-html="covidText"></div>
      <br/>
      <h2 style="text-shadow: none">COVID-19 Safety</h2>
      <p>We are fully committed to keeping everyone as safe as possible. We are also providing...</p>
      <p>
        <ul>
          <li>Free on-site antigen testing courtesy of <a target="_blank" href="https://samahanhealth.com/en/">Operation Samahan</a></li>
          <li>Hand sanitizer stations</li>
          <li>Regularly scheduled disinfection of eating areas</li>
          <li>Masks for those who need them</li>
          <li>All vendors/staff/volunteers are required to be fully vaccinated or proven COVID negative</li>
        </ul>
      </p>
      <p>Even so, social distancing & mask wearing is still HIGHLY recommended.</p>
      <p>
        Sources:
        <ul>
          <li><a target="_blank"
          href="https://www.sandiegocounty.gov/content/sdc/hhsa/programs/phs/community_epidemiology/dc/2019-nCoV/reopening.html"
          >County of San Diego Safe Reopening</a
        ></li>
        <li><a href="https://covid19.ca.gov/mega-events/#outdoor-events" target="_blank">California Department of Public Health</a></li>
        </ul>
        <img class="sdtet-image" style="top: 200px; right: 100px; width: 180px" src="../../assets/firecrackers.png" alt="">
        <img class="sdtet-image" style="bottom: 100px; right: 50px; width: 280px" src="../../assets/kid-1.png" alt="">
        
      </p>
  </section>
</template>

<style lang="scss">
#covid {
  grid-area: covid;
}

.sdtet-image {
  position: absolute;

  @media screen and (max-width: 1279px) {
    display: none;
  }
}
</style>

<script>
import covidText from "./covid.md";

export default {
  data() {
    return {
      covidText: covidText,
    };
  },
};
</script>