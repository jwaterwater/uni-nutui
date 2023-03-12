<template>
    <view :class="classes" :style="baseStyle" @click="handleClick">
        <slot>
            <view class="nut-cell__icon" v-if="icon || $slots.icon">
                <slot name="icon">
                    <nut-icon v-if="icon" class="icon" :name="icon"></nut-icon>
                </slot>
            </view>
            <view class="nut-cell__title" v-if="title || subTitle || $slots.title">
    
                <template v-if="subTitle">
                    <slot name="title">
                        <view class="title">{{ title }}</view>
                    </slot>
                    <view class="nut-cell__title-desc">{{ subTitle }}</view>
                </template>
                <template v-else>
                    <slot name="title">
                        {{ title }}
                    </slot>
                </template>
            </view>
            <view v-if="desc" class="nut-cell__value"
                :class="{ 'nut-cell__value--alone': (!title && !subTitle && !$slots.title) }"
                :style="{ 'text-align': descTextAlign }">{{ desc }}</view>
            <slot name="link">
                <nut-icon v-if="isLink || to" class="nut-cell__link" name="right"></nut-icon>
            </slot>
        </slot>
    </view>
</template>
<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '../../utils/create';
import { useRouter } from '../../utils/useRoute';
import { pxCheck } from '../../utils/pxCheck';
const { componentName, create } = createComponent('cell');
import Icon from '../icon/index.vue';
export default create({
    components: {
      [Icon.name]: Icon
    },
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    desc: { type: String, default: '' },
    descTextAlign: { type: String, default: 'right' },
    isLink: { type: Boolean, default: false },
    to: [String, Object],
    replace: { type: Boolean, default: false },
    roundRadius: { type: [String, Number], default: '' },
    url: { type: String, default: '' },
    icon: { type: String, default: '' },
    center: { type: Boolean, default: false },
    size: { type: String, default: '' } // large
  },
  options: {
      virtualHost : true,
      addGlobalClass: true,
      styleIsolation: 'shared'
  },
  emits: ['click'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--clickable`]: props.isLink || props.to,
        [`${prefixCls}--center`]: props.center,
        [`${prefixCls}--large`]: props.size == 'large'
      };
    });
    const router = useRouter();

    const baseStyle = computed(() => {
      return {
        borderRadius: pxCheck(props.roundRadius)
      };
    });

    const handleClick = (event: Event) => {
      emit('click', event);

      if (props.to) {
          uni.navigateTo({
              url: props.to
          })
          

        // if(props.replace){
        //   router.replace(props.to)
        // }else{
        //    router.push(props.to)
        // }
      } else if (props.url) {
        props.replace ? location.replace(props.url) : (location.href = props.url);
      }
    };

    return {
      handleClick,
      classes,
      baseStyle
    };
  }
});
</script>
<style lang="scss" :scoped="false">
    @import './index.scss'
</style>
