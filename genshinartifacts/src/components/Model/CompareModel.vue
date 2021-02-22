<template>
  <div>
    <div class="row">裝備1</div>
    <div class="row">
      <div class="col-md">
        攻擊:
        <input class="form-control" v-model="Equipment[0].ATK" />
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
        攻擊:
        <input class="form-control" v-model="Equipment[1].ATK" />
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
    <div class="row">公式: 攻擊力*(1+(爆級*爆傷))*(1+元素傷)</div>
    <div class="row">
      <ImportBtn class="col-md-8" @setmodel="setmodel" />
      <ExportBtn  class="col-md-4" :filename="filename" :model="Equipment"  />
    </div> 
  </div>
</template>

<script>
import { cloneDeep, round } from "lodash";

let model = {
  ATK: 1000,
  CriticalRate: 10,
  CriticalDamage: 50,
  ElementalDamage: 0,
};
export default {
  name: "CompareModel",
  props: {
    msg: String,
  },
  data() {
    return {
      Equipment: [cloneDeep(model), cloneDeep(model)],
    };
  },
  computed: {
    Score() {
      return round(
        Number(
          this.Equipment[0].ATK *
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
          this.Equipment[1].ATK *
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
  methods:{
    setmodel(value){
      this.Equipment = value;
    },
  },
};
</script>

<style scoped>
.row{
    margin-top: 20px;
}
</style>