<template>
  <div>
    <SideBarMenu />
    <ComparePage />
  </div>
</template>

<script>
import ComparePage from "./components/Page/ComparePage.vue";
import SideBarMenu from "./components/Tool/SideBarMenu.vue";
export default {
  name: "App",
  components: {
    ComparePage,
    SideBarMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: antiquewhite;
}
html,
body {
  margin: 0 !important;
  padding: 0px !important;
}
</style>
