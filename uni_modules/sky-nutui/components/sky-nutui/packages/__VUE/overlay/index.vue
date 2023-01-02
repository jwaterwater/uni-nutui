<template>
  <Transition name="overlay-fade">
    <view :class="classes" @touchmove.stop="touchmove" @click="onClick" :style="style" v-show="visible">
      <slot></slot>
    </view>
  </Transition>
</template>
<script lang="ts">
import {
  CSSProperties,
  PropType,
  computed,
  watch,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onActivated,
  watchEffect
} from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('overlay');
import overlayProps from './props'
export default create({
  props: overlayProps,
  emits: ['click', 'update:visible'],
  options: {
      virtualHost: true
  },
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });

    watch(
      () => props.visible,
      (value) => {
        value ? lock() : unlock();
      }
    );

    const lock = () => {
      if (props.lockScroll && props.visible) {
          // #ifdef H5
          document.body.classList.add('nut-overflow-hidden');
          // #endif
      }
    };
    const unlock = () => {
        // #ifdef H5
        document.body.classList.remove('nut-overflow-hidden');
        // #endif
    };

    onDeactivated(unlock);
    onBeforeUnmount(unlock);
    onMounted(lock);
    onActivated(lock);

    const style = computed(() => {
      return {
        animationDuration: `${props.duration}s`,
        zIndex: props.zIndex,
        ...props.overlayStyle
      };
    });

    const touchmove = (e: TouchEvent) => {
      if (props.lockScroll) e.preventDefault();
    };

    const onClick = (e: MouseEvent) => {
      emit('click', e);
      if (props.closeOnClickOverlay) {
        emit('update:visible', false);
      }
    };

    return { classes, style, touchmove, onClick };
  }
});
</script>
<style lang="scss">
@import './index.scss'
</style>
