<template>
  <div id="contact" class="sdtet-directions-container">
    <div class="sdtet-text-align-center">
      <h1>Directions & Contact Info</h1>
    </div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md7>
          <div class="sdtet-directions-map-container">
            <iframe
              class="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3928305391737!2d-117.14276428457252!3d32.91421798428374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8ef08e79507%3A0x87ecc78a5488dfe7!2sMira+Mesa+Community+Park!5e0!3m2!1sen!2sus!4v1515044692236"
              width="475"
              height="475"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
          </div>
        </v-flex>
        <v-flex xs12 md5>
          <div class="sdtet-directions-text-container">
            <div class="sdtet-directions-text">
              <div class="sdtet-directions-text-bold">
                MIRA MESA COMMUNITY PARK
                <br />
                8575 New Salem Street <br />
                San Diego, CA 92126
              </div>
              <br />

              <div class="sdtet-directions-text-bold">CONTACT:</div>
              Vietnamese American Youth Alliance (VAYA)
              <br />
              <a href="http://www.vayasd.org">www.vayasd.org</a><br />
              <a href="mailto:info@sdtet.com">info@sdtet.com</a>
              <br />
              <a href="tel:858-215-4838">858.215.4838</a>
              <br />
              <br />
              Vietnamese Federation of San Diego
              <br />
              <a href="http://www.vietfederationsd.org"
                >www.vietfederationsd.org</a
              >
              <br />
              <a href="mailto:info@vietfederationsd.org"
                >info@vietfederationsd.org</a
              >
              <br />
              <br />
              <a
                href="https://www.facebook.com/sandiegotetfestival/"
                target="_blank"
              >
                <img
                  height="30px"
                  src="../../assets/f.svg"
                  alt="Facebook icon"
                /> </a
              >&nbsp;
              <a
                href="https://www.instagram.com/sandiegotetfestival/"
                target="_blank"
              >
                <img
                  height="30px"
                  src="../../assets/instagram.svg"
                  alt="Instagram icon"
                />
              </a>
              <br /><br />
              <p>&copy; 2022 San Diego Tết Festival</p>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style lang="scss">
@import "directions";
</style>