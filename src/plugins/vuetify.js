import Vue from "vue";
import Vuetify from "vuetify/lib";

import {
  VApp,
  VMain,
  VNavigationDrawer,
  VImg,
  VFooter,
  VList,
  VMenu,
  VCard,
  VParallax,
  VAlert,
  VBtn,
  VDialog,
  VDivider,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
} from "vuetify";

Vue.use(Vuetify, {
  components: {
    VApp,
    VMain,
    VNavigationDrawer,
    VFooter,
    VImg,
    VList,
    VBtn,
    VIcon,
    VParallax,
    VAlert,
    VDialog,
    VDivider,
    VMenu,
    VCard,
    VGrid,
    VToolbar,
    transitions,
  },
});

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
});
