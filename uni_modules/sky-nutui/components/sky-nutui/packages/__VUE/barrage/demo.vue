<template>
  <div class="demo">
    <h2 class="h2">{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-barrage :speeds="5000" :frequency="1000" ref="danmu" :danmu="list"></nut-barrage>
    </nut-cell>
    <div class="test">
      <nut-button @click="addDanmu" type="primary" block class="add">{{ translate('btn1') }}</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo, translate } = createComponent('barrage');
import { useTranslate } from '../../../sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      btn1: '随机添加'
    },
    'en-US': {
      basic: 'Basic Usage',
      btn1: 'Random addition'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const inputVal = ref<any>('');
    const danmu = ref<any>(null);
    let list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结']);
    function addDanmu() {
      let n = Math.random();
      danmu.value.add('随机——' + String(n).substr(2, 10));
    }
    return {
      inputVal,
      danmu,
      list,
      addDanmu,
      translate
    };
  }
});
</script>

<style>
    .nut-cell,
    .nut-barrage {
      padding: 20px 0;
      height: 150px !important;
    }
</style>

<style lang="scss" scoped>
.test {
  .add {
    display: block;
    padding: 5px 30px;
    margin: 20px auto;
    border-radius: 15px;
    font-size: 12px;
  }
}
</style>
