<template>
  <div>
    <div style="padding-top: 5vh;"></div>
    <div class="Card container">
      <h1>{{ Title }} {{Version}}</h1>
      <div class="border"></div>
      <div class="body">
        <div v-for="x in Update_Content" :key="x" class="UpdateBanner">
          <div class="UpdateVersion">{{x.V}}</div>
          <li v-for="y in x.Text" :key="y" class="UpdateText">
            {{y}}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
function Content(version,text) {
  return {
    V:version,
    Text:text,
  }
}
export default {
  name: "Home",
  data() {
    return {
      Title: "原神裝備比對",
      Update_Content:[
        Content('V1.0.3',['新增鐘離裝備比對']),
        Content('V1.0.2',['新增localStorage存取','主頁增加版本更新資訊']),
        Content('V1.0.1',['新增女僕裝備比對','新增txt匯入匯出功能']),
        Content('V1.0.0',['新增一般裝備比對']),
      ],
    };
  },
   computed: {
    Version() {
      return this.Update_Content[0].V;
    },
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
.UpdateBanner {
    background: rgba(0, 139, 239, 0.1);
    border: 1px solid rgba(0, 139, 239, 0.4);
    padding: 1em 1.2em;
    white-space: normal;
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    letter-spacing: .04em;
    overflow: hidden;
    height: auto;
    position: relative;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    margin-top: 10px;
    text-align:left;
}
.UpdateVersion{
  font-size: 24px;
  font-weight: bold;
}
.UpdateText{
  padding-left: 10px;
}
</style>
