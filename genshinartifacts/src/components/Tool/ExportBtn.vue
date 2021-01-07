<template>
  <div>
    <button class="btn btn-info" @click="OnClick()">匯出</button>
  </div>
</template>
<script>
export default {
  name: "ExportBtn",
  props: ["filename", "model"],
  methods: {
    OnClick() {
      let json = JSON.stringify(this.model);
      this.download(this.filename, json);
    },
    download(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },
};
</script>
<style scoped>
</style>