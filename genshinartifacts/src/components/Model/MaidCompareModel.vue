<template>
  <div>
    <div class="row">裝備1</div>
    <div class="row">
      <div class="col-md">
        攻擊:
        <input class="form-control" v-model="Equipment[0].ATK" />
      </div>
      <div class="col-md">
        防禦:
        <input class="form-control" v-model="Equipment[0].Defense" />
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
        <br/>
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="Equipment[0].IsSixConstellation"
              checked
            />
            滿命
          </label>
        </div>
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
        防禦:
        <input class="form-control" v-model="Equipment[1].Defense" />
      </div>
      <div class="col-md">
        大招等級:
        <select class="form-control" v-model="Equipment[1].QLevel">
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
        <br/>
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="Equipment[1].IsSixConstellation"
              checked
            />
            滿命
          </label>
        </div>
      </div>
      <div class="col-md">
        <br />
        分數: {{ Score2 }}
      </div>
    </div>

    <div class="row">提升: {{ FinalScore }} 倍</div>
    <div class="row">結果: (裝備1/裝備2)</div>
    <div class="row">公式: (攻擊力+防禦*防禦轉換比)*(1+(爆級*爆傷))*(1+元素傷)</div>
  </div>
</template>

<script>
import { cloneDeep, round } from "lodash";
let QLevelList = [40, 43, 46, 50, 53, 56, 60, 64, 68, 72, 76, 80, 75];
let model = {
  ATK: 1000,
  Defense: 1000,
  QLevel: 40,
  CriticalRate: 10,
  CriticalDamage: 50,
  ElementalDamage: 0,
  IsSixConstellation: true,
};
export default {
  name: "CompareModel",
  props: {
    msg: String,
  },
  data() {
    return {
      QLevelList: QLevelList,
      Equipment: [cloneDeep(model), cloneDeep(model)],
    };
  },
  computed: {
    Score() {
      let QAddition = 0;
      if(this.Equipment[0].IsSixConstellation) QAddition = 50;
      return round(
        Number(
          (Number(this.Equipment[0].ATK) +Number(this.Equipment[0].Defense * (this.Equipment[0].QLevel + QAddition ) / 100)) *
          (1 +(this.Equipment[0].CriticalRate *this.Equipment[0].CriticalDamage) /10000) *
          (1 + Number(this.Equipment[0].ElementalDamage) / 100)
        ),
        2
      );
    },
    Score2() {
       let QAddition = 0;
      if(this.Equipment[1].IsSixConstellation) QAddition = 50;
      return round(
        Number(
          (Number(this.Equipment[1].ATK) +
            Number(this.Equipment[1].Defense *  (this.Equipment[1].QLevel + QAddition ) / 100)) *
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
  methods() {},
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>