<template>
  <div class="demo">
    <h2 class="h2">{{ translate('basic') }}</h2>
    <div>
      <nut-signature @confirm="confirm" @clear="clear" custom-class="test"></nut-signature>
      <p class="demo-tips demo1">{{ translate('tips') }}</p>
      <image with="300" height="100" v-if="resUrl" :src="resUrl"/>
    </div>
    <h2 class="h2">{{ translate('title') }}</h2>
    <div>
      <nut-signature :lineWidth="lineWidth" :strokeStyle="strokeStyle"></nut-signature>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive,ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo, translate } = createComponent('signature');
import { useTranslate } from '../../../sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title: '修改颜色和签字粗细',
      tips: 'Tips: 点击确认按钮,下方显示签名图片'
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
      tips: 'Tips: click the confirm button, and the signature image is displayed below'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green'
    });
    
    const resUrl = ref(false)

    const confirm = (data) => {
        resUrl.value = data
    };
    const clear = () => {
      console.log('清除');
    };
    return { ...state, confirm, clear, translate,resUrl };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  .demo-tips {
    font-size: 12px;
    color: #666;
  }
}
</style>
