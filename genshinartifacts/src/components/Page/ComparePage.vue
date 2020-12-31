<template>
  <div class="container">
    <h1>聖遺物比對</h1>  
    <div class='row'>裝備1</div>
    <div class='row'>
      <div class='col-md-2'>
        爆級:
      </div>
      <div class='col-md-3'>
        <input v-model="CriticalRate">
      </div>
      <div class='col-md-2'>
        爆傷:
      </div>
      <div class='col-md-3'>
        <input v-model="CriticalDamage">
      </div>
      <div class='col-md-2'>
        分數: {{Score}}
      </div>
    </div>
    <div class='row'>裝備2</div>
    <div class='row'>
     <div class='col-md-2'>
        爆級:
      </div>
      <div class='col-md-3'>
        <input v-model="CriticalRate2">
      </div>
      <div class='col-md-2'>
        爆傷:
      </div>
      <div class='col-md-3'>
        <input v-model="CriticalDamage2">
      </div>
      <div class='col-md-2'>
        分數: {{Score2}}
      </div>
    </div>
    <div class='row'>結果: (裝備1/裝備2)</div>
    <div class='row'>
     <div class='col-md-2'>
        分數: {{Score/Score2}}
      </div>
    </div>
    <div class='row'>
    </div>
    <div class='row'>
      公式:(1+(爆級*爆傷))
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComparePage',
  props: {
    msg: String
  },
  data(){
    return {
      CriticalRate:0.1,
      CriticalDamage:2,
      CriticalRate2:0.1,
      CriticalDamage2:2,
    }
  },
  computed:{
    Score(){
      return Number(1+(this.CriticalRate*this.CriticalDamage));
    },
    Score2(){
      return Number(1+(this.CriticalRate2*this.CriticalDamage2));
    }
  }
}
</script>

<style scoped>

</style>
