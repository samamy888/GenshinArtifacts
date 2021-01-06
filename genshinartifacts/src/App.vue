<template>
  <div class="main">
    <router-view />
    <SideBarMenu />
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
  padding: 0 0.5em 0 70px;
}
</style>
