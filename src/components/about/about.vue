<template>
  <div id="sdtet-about-section" class="sdtet-container" v-html="aboutText"></div>
</template>

<script>
import markdown from "./about.md";

export default {
  data(){
    return {
      aboutText: markdown 
    };    
  }
};
</script>