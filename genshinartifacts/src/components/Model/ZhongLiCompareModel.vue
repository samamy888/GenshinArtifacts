<template>
  <div>
    <div class="row">裝備1</div>
    <div class="row">
      <div class="col-md">
        生命:
        <input class="form-control" v-model="Equipment[0].HP" />
      </div>
      <div class="col-md">
        攻擊:
        <input class="form-control" v-model="Equipment[0].ATK" />
      </div>
      <div class="col-md">
        大招等級:
        <select class="form-control" v-model="Equipment[0].QLevel">
          <option v-for="(key, index) in QLevelList" :key="key" :value="key">
            {{ index + 1 }}等: {{ key }}%
          </option>
        </select>
      </div>
      <div class="col-md">
        爆級%:
        <input class="form-control" v-model="Equipment[0].CriticalRate" />
      </div>
      <div class="col-md">
        爆傷%:
        <input class="form-control" v-model="Equipment[0].CriticalDamage" />
      </div>
      <div class="col-md">
        元素傷害%:
        <input class="form-control" v-model="Equipment[0].ElementalDamage" />
      </div>
      <div class="col-md">
        <br />
        分數: {{ Score }}
      </div>
    </div>
    <div class="row">裝備2</div>
    <div class="row">
      <div class="col-md">
        生命:
        <input class="form-control" v-model="Equipment[1].HP" />
      </div>
      <div class="col-md">
        攻擊:
        <input class="form-control" v-model="Equipment[1].ATK" />
      </div>
       <div class="col-md">
        大招等級:
        <select class="form-control" v-model="Equipment[0].QLevel">
          <option v-for="(key, index) in QLevelList" :key="key" :value="key">
            {{ index + 1 }}等: {{ key }}%
          </option>
        </select>
      </div>
      <div class="col-md">
        爆級%:
        <input class="form-control" v-model="Equipment[1].CriticalRate" />
      </div>
      <div class="col-md">
        爆傷%:
        <input class="form-control" v-model="Equipment[1].CriticalDamage" />
      </div>
      <div class="col-md">
        元素傷害%:
        <input class="form-control" v-model="Equipment[1].ElementalDamage" />
      </div>
      <div class="col-md">
        <br />
        分數: {{ Score2 }}
      </div>
    </div>

    <div class="row">提升: {{ FinalScore }} 倍</div>
    <div class="row">結果: (裝備1/裝備2)</div>
    <div class="row">公式: (攻擊力*大招倍率+0.33*生命值)*(1+(爆級*爆傷))*(1+元素傷)</div>
    <div class="row">
      <ImportBtn class="col-md-8" @setmodel="setmodel" />
      <ExportBtn class="col-md-4" :filename="filename" :model="Equipment" />
    </div>
  </div>
</template>

<script>
import { cloneDeep, round } from "lodash";
let QLevelList = [401, 444, 488, 542, 591, 640, 705, 770, 835, 900, 965, 1030, 1084];
let model = {
    HP:10000,
    ATK: 1000,
    QLevel: 640,
    CriticalRate: 10,
    CriticalDamage: 50,
    ElementalDamage: 0,
};
export default {
  name: "ZhongLiCompareModel",
  props: {
    msg: String,
  },
  data() {
    return {
      filename: "鐘離裝備資料",
      Equipment: [cloneDeep(model), cloneDeep(model)],
      QLevelList:QLevelList,
    };
  },
  mounted() {
    let storage = localStorage.getItem("ZhongLiCompareModel");
    if (storage != "null") this.Equipment = JSON.parse(storage);
  },
  watch: {
    Equipment: {
      handler(newValue) {
        localStorage.setItem("ZhongLiCompareModel", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  computed: {
    Score() {
      return round(
        Number(
          (this.Equipment[0].ATK * (this.Equipment[0].QLevel/100) + 0.33 * this.Equipment[0].HP )*
            (1 +
              (this.Equipment[0].CriticalRate *
                this.Equipment[0].CriticalDamage) /
                10000) *
            (1 + Number(this.Equipment[0].ElementalDamage) / 100)
        ),
        2
      );
    },
    Score2() {
      return round(
        Number(
           (this.Equipment[1].ATK * (this.Equipment[1].QLevel/100) + 0.33 * this.Equipment[1].HP )*
            (1 +
              (this.Equipment[1].CriticalRate *
                this.Equipment[1].CriticalDamage) /
                10000) *
            (1 + Number(this.Equipment[1].ElementalDamage) / 100)
        ),
        2
      );
    },
    FinalScore() {
      return round(this.Score / this.Score2, 2);
    },
  },
  methods: {
    setmodel(value) {
      this.Equipment = value;
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>