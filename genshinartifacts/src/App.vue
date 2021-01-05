<template>
  <div>
    <SideBarMenu />
    <router-view/>
  </div>
</template>

<script>
import SideBarMenu from "./components/Tool/SideBarMenu.vue";
export default {
  name: "App",
  components: {
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
