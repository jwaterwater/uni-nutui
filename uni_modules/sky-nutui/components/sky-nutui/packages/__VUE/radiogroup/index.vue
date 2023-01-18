<template>
    <view
    :class="getClass"
    >
        <slot></slot>
    </view>
</template>
<script lang="ts">
import { h, provide, computed, readonly, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('radiogroup');

export default create({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ''
    },
    direction: {
      type: String,
      default: 'vertical' //horizontal
    },
    textPosition: {
      type: String,
      default: 'right'
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const updateValue = (value: string | boolean | number) => emit('update:modelValue', value);

    provide('parent', {
      label: readonly(computed(() => props.modelValue)),
      position: props.textPosition,
      updateValue
    });

    watch(
      () => props.modelValue,
      (value) => emit('change', value)
    );

    const getClass = computed(()=>{
        return `${componentName} ${componentName}--${props.direction}`
    })
    
    return {
        getClass
    }
    
  }
});
</script>
<style lang="scss" :scoped="false">
@import './index.scss'
</style>
