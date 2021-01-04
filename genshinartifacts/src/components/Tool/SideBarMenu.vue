<template>
  <sidebar-menu :menu="menu" :theme="'white-theme'" />
</template>
 
<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              // icon props:
              icon: 'user-secret',
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
              icon: 'atlas',
            },
          },
        },
      ],
    };
  },
};
</script> 