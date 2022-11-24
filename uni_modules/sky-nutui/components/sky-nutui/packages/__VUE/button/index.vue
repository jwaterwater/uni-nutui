<template>
  <view :class="classes" :style="getStyle" @click="handleClick">
    <view class="nut-button__warp">
      <nut-icon popClass="nut-icon-loading" v-if="loading"></nut-icon>
      <nut-icon
        v-if="icon && !loading"
        :name="icon"
        :class-prefix="iconClassPrefix"
        :font-class-name="iconFontClassName"
      ></nut-icon>
      <template :class="{ text: icon || loading }" v-if="$slots.default">
        <slot></slot>
      </template>
    </view>
  </view>
</template>

<script lang="ts">
import { PropType, CSSProperties, toRefs, computed } from 'vue';
import { createComponent } from '../../utils/create';
import Icon from '../icon/index.vue';
const { componentName, create } = createComponent('button');
export default create({
  components: {
    [Icon.name]: Icon
  },
  props: {
    color: String,
    shape: {
      type: String as PropType<import('./type').ButtonShape>,
      default: 'round'
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<import('./type').ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<import('./type').ButtonSize>,
      default: 'normal'
    },
    block: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iconClassPrefix: {
      type: String,
      default: 'nut-icon'
    },
    iconFontClassName: {
      type: String,
      default: 'nutui-iconfont'
    }
  },
  options: {
      virtualHost: true
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const { type, size, shape, disabled, loading, color, plain, block,height } = toRefs(props);

    const handleClick = (event: MouseEvent) => {
      if (!loading.value && !disabled.value) {
        emit('click', event);
      }
    };

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      };
    });

    const getStyle = computed(() => {
      const style: CSSProperties = {};
      if (color?.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = '#fff';
          if (!color.value?.includes('gradient')) {
            style.borderColor = color.value;
          }
        } else {
          style.color = '#fff';
          style.background = color.value;
        }
      }
      if(height) {
          style.height = height.value
      }

      return style;
    });

    return {
      handleClick,
      classes,
      getStyle
    };
  }
});
</script>
<style lang="scss">
@import './index.scss'
</style>
