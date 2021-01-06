<template>
  <sidebar-menu
    :menu="menu"
    :theme="'white-theme'"
    :collapsed="true"
    :show-one-child="true"
  />
</template>
 
<script>
const Vue = require('vue').default;

export default {

  data() {
    return {
      menu: [
        {
          header: true,
          title: "選單",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "首頁",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              // icon props:
              icon: "home",
            },
          },
        },
        {
          href: "/ComparePage",
          title: "原神裝備比對",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              // icon props:
              icon: "balance-scale",
            },
          },
        },
        {
          href: "/MaidComparePage",
          title: "女僕裝備比對",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              // icon props:
              icon: "shield-alt",
            },
          },
        },
      ],
    };
  },
  mounted() {
    
    setTimeout(() => {
      let font_comp = Vue.extend("font-awesome-icon");
      new font_comp({
        propsData: {
          icon: "arrows-alt-h",
        },
      }).$mount(".vsm--toggle-btn_default");
    }, 50);
  },
};
</script> 
<style>
</style>