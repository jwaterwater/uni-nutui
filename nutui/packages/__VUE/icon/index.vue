
<template>
        <image
        v-if="isImage()"
        :class="classes" :style="getStyle"
        @click="handleClick"
        :src="name"
        ></image>
        <text
        v-if="!isImage()"
        :class="classes" :style="getStyle"
        @click="handleClick"
        ></text>
</template>
<script lang="ts">
import { h, PropType, ref, computed, CSSProperties} from 'vue';
import { createComponent } from '@/nutui/packages/utils/create';
const { componentName, create } = createComponent('icon');
import { pxCheck } from '@/nutui/packages/utils/pxCheck';

export default create({
  props: {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: '' },
    width: { type: [String, Number], default: '' },
    height: { type: [String, Number], default: '' },
    classPrefix: { type: String, default: 'nut-icon' },
    popClass: { type: String, default: '' },
    fontClassName: { type: String, default: 'nutui-iconfont' },
    color: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'i' }
  },
  emits: ['click'],
  options: {
      virtualHost: true,
      addGlobalClass: true,
  },
  setup(props, { emit, slots }) {
    const handleClick = (event: Event) => {
      emit('click', event);
    };
    
    
    const isImage = () => {
      return props.name ? props.name.indexOf('/') !== -1 : false;
    };
    
    const classes = computed(() => {
      return isImage()
            ? `${componentName}__img`
            : `${props.fontClassName} ${componentName} ${props.classPrefix}-${props.name} ${props.popClass}`
    });
    
    const getStyle = computed(() => {
    
       const style = {
          color: props.color,
          fontSize: pxCheck(props.size),
          width: pxCheck(props.width||props.size),
          height: pxCheck(props.height||props.size)
        }
      return style;
    });
    
    return {
        isImage,
        handleClick,
        classes,
        getStyle
    };

  }
});
</script>
<style lang="scss" :scoped="false">
@import './index.scss';
</style>
