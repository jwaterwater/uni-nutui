<template>
  <div class="demo">
    <nut-cell-group :title="translate('useTemplate')">
      <nut-cell is-Link @click="showNotify">{{ translate('errorNotify') }}</nut-cell>
      <nut-notify v-model:visible="show">
        <span>Content</span>
      </nut-notify>
      
      <nut-cell is-Link @click="showWarningNotify">{{ translate('warningNotify') }}</nut-cell>
      <nut-notify type="warning" v-model:visible="showWarning">
        <span>Content</span>
      </nut-notify>
      <nut-cell is-Link @click="showSuccessNotify">{{ translate('successNotify') }}</nut-cell>
      <nut-notify type="success" v-model:visible="showSuccess">
        <span>Content</span>
      </nut-notify>
      
      <nut-cell is-Link @click="showPrimaryNotify">{{ translate('primaryNotify') }}</nut-cell>
      <nut-notify type="primary" v-model:visible="showPrimary">
        <span>Content</span>
      </nut-notify>
    </nut-cell-group>

  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
import { ref } from 'vue';
const { createDemo, translate } = createComponent('notify');
import { useTranslate } from '../../../sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      t1: '通知类型',
      t2: '自定义样式',
      t3: '自定义时长',
      cusPostion: '自定义位置',
      useTemplate: '组件调用',
      primaryNotify: '主要通知',
      successNotify: '成功通知',
      errorNotify: '危险通知',
      warningNotify: '警告通知',
      cusBgNotify: '自定义背景色和字体颜色'
    },
    'en-US': {
      basic: 'Basic Usage',
      t1: 'Notify Type',
      t2: 'Custom Style',
      t3: 'Custom Duration',
      cusPostion: 'Custom Postion',
      useTemplate: 'Template use',
      primaryNotify: 'Primary Notify',
      successNotify: 'Success Notify',
      errorNotify: 'Error Notify',
      warningNotify: 'Warning Notify',
      cusBgNotify: 'Customize background and font colors'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const show = ref(false);
    const showWarning = ref(false);
    const showSuccess = ref(false);
    const showPrimary = ref(false);
    
    
    const showPrimaryNotify = () => {
      showPrimary.value = true;
      setTimeout(() => {
        showPrimary.value = false;
      }, 2000);
    };
    
    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };
    
    const showWarningNotify = () => {
      showWarning.value = true;
      setTimeout(() => {
        showWarning.value = false;
      }, 2000);
    };
    
    const showSuccessNotify = () => {
        console.log('zz')
      showSuccess.value = true;
      setTimeout(() => {
        showSuccess.value = false;
      }, 2000);
    };
    return {
      show,
      showNotify,
      showPrimary,
      translate,
      showWarning,
      showSuccess,
      showSuccessNotify,
      showWarningNotify,
      showPrimaryNotify
    };
  }
});
</script>

<style lang="scss" scoped></style>
