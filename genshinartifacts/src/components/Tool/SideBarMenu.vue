<template>
  <sidebar-menu
    :menu="menu"
    :theme="'white-theme'"
    :collapsed="true"
    :show-one-child="true"
  >
    <template v-slot:toggle-icon>
      <font-awesome-icon icon="arrows-alt-h" />
    </template>
  </sidebar-menu>
</template>
 
<script>
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
          title: "一般裝備比對",
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
};
</script> 

<style>
</style>