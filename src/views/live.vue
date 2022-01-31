<template>
  <div>
    <div style="padding: 56.25% 0 0 0; position: relative">
      <iframe
        src="https://vimeo.com/event/1739871/embed"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
      ></iframe>
    </div>
    <div
      class="embed-container"
      data-page-width="414"
      data-page-height="640"
      id="ypembedcontainer"
    >
      <iframe
        src="https://www.yumpu.com/en/embed/view/ZHmCLxadrD2AfyPS"
        frameborder="0"
        allowfullscreen="true"
        allowtransparency="true"
      ></iframe
      ><br /><a
        href="https://www.yumpu.com/en/document/view/66301395/17th-annual-san-diego-tet-festival"
        title="17th Annual San Diego Tết Festival"
        target="_blank"
        >17th Annual San Diego Tết Festival</a
      >
    </div>
  </div>
</template>

<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100% !important;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>


<script src='https://players.yumpu.com/modules/embed/yp_r_iframe.js' ></script>
<script>
export default {
  name: "live",
};
</script>
