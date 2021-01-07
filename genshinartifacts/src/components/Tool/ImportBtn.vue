<template>
  <div>
    <input type="file" id="ImportInput" />
    <button class="btn btn-info" @click="OnClick()">匯入</button>
  </div>
</template>
<script>
export default {
  name: "ImportBtn",
  props: ["model"],
  data(){
    return{
      ImportModel:null,
    }
  },
  methods: {
    OnClick() {
      try {
        let files = document.getElementById("ImportInput").files;
        let file = files && files[0];
        if (file == null || file.name.substr(-4).toLowerCase() != ".txt") {
          alert("請選擇TXT檔案");
          return;
        }
        let reader = new FileReader();
        reader.readAsText(file, "utf8");
        reader.onload = function (evt) {
          this.$parent.SetModel(evt.target.result);
           alert("匯入成功");
        };
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
<style scoped>
</style>