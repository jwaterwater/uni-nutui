<template>
  <view class="nut-tabpane" :class="{ inactive: paneKey != activeKey && autoHeight }">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { inject,getCurrentInstance  } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('tabpane');

export default create({
    options: {
        virtualHost: true,
        addGlobalClass: true,
    },
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    paneKey: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const parent = inject('activeKey') as any;
    const parentOption = inject('autoHeight') as any;
    let addNode = inject('addNode',()=>{},false)
    addNode(getCurrentInstance()?.vnode)
    return {
      activeKey: parent.activeKey,
      autoHeight: parentOption.autoHeight
    };
  }
});
</script>
<style lang="scss" :scoped="false">
@import './index.scss'
</style>
