<template>
  <div>
    <div style="padding-top: 5vh;"></div>
    <div class="Card container">
      <h1>{{ Title }}</h1>
      <div class="border"></div>
      <div class="body">
        <ZhongLiCompareModel />
      </div>
    </div>
  </div>
</template>
<script>
import ZhongLiCompareModel from "@/components/Model/ZhongLiCompareModel.vue";
export default {
  name: "ZhongLiComparePage",
  components: {
    ZhongLiCompareModel,
  },
  data() {
    return {
      Title: "鐘離裝備比對",
    };
  },
};
</script>
<style scoped>
.Card {
  padding: 1.5em;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  background-color: white;
}
.Card h1 {
  text-align: center;
  color: #428bca;
}
.border {
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
}
.body {
  padding: 1.5em;
  margin-top: 10px;
  line-height: 1.8;
  color: #333333;
  font-family: "Segoe UI", "微軟正黑體";
  font-size: 12pt;
  font-weight: 400;
}
</style>
