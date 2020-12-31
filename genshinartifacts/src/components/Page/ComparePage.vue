<template>
  <div class="Card container">
    <h1>{{Title}}</h1>
    <div class="border"></div>
    <div class="body">
      <CompareModel />
    </div>
  </div>
</template>
<script>
import CompareModel from "@/components/Model/CompareModel.vue";
export default {
  name: "ComparePage",
  components: {
    CompareModel,
  },
  data(){
    return{
      Title:"原神裝備比對"
    }
  }
};
</script>
<style scoped>
.Card {
  padding: 1.5em;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  margin-top: 100px;
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
