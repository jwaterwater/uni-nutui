<template>
    <view
    :class="getClass"
    @click="handleClick"
    >
        <view 
        :class="getButtonClass"
        v-if="shape=='button'">
            <slot></slot>
        </view>
        <template v-else>
            <template v-if="reverseState">
                <view
                :class="getLabelClass"
                >
                    <slot></slot>
                </view>
                <nut-icon
                :name="iconAttr.name"
                :size="iconAttr.size"
                :popClass="iconAttr.class"
                :classPrefix="iconAttr.classPrefix"
                :fontClassName="iconAttr.fontClassName"
                ></nut-icon>
            </template>
            <template v-else="reverseState">
                <nut-icon
                :name="iconAttr.name"
                :size="iconAttr.size"
                :popClass="iconAttr.class"
                :classPrefix="iconAttr.classPrefix"
                :fontClassName="iconAttr.fontClassName"
                ></nut-icon>
                <view
                :class="getLabelClass"
                >
                    <slot></slot>
                </view>
            </template>
        </template>
    </view>
</template>
<script lang="ts">
import { computed, h, inject } from 'vue';
import { createComponent } from '../../utils/create';
import nutIcon from '../icon/index.vue';
const { componentName, create } = createComponent('radio');

export default create({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'round' // button
    },
    label: {
      type: [String, Number],
      default: ''
    },
    iconName: {
      type: String,
      default: 'check-normal'
    },
    iconActiveName: {
      type: String,
      default: 'check-checked'
    },
    iconSize: {
      type: [String, Number],
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
  setup(props, { emit, slots }) {
    let parent: any = inject('parent', null);

    const isCurValue = computed(() => {
      return parent.label.value == props.label;
    });

    const color = computed(() => {
      return !props.disabled
        ? isCurValue.value
          ? 'nut-radio__icon'
          : 'nut-radio__icon--unchecked'
        : 'nut-radio__icon--disable';
    });

    const position = computed(() => {
      return parent.position;
    });

    const iconAttr = computed(()=>{
        const { iconName, iconSize, iconActiveName, iconClassPrefix, iconFontClassName } = props;
        return {
            name: isCurValue.value ? iconActiveName : iconName,
            size: iconSize,
            class: color.value,
            classPrefix: iconClassPrefix,
            fontClassName: iconFontClassName
        }
    })



    const getLabelClass = computed(()=>{
        return `${componentName}__label ${props.disabled ? `${componentName}__label--disabled` : ''}`
    })
 
    
    const getButtonClass = computed(()=>{
        return `${componentName}__button ${isCurValue.value && `${componentName}__button--active`} ${
            props.disabled ? `${componentName}__button--disabled` : ''
          }`
    })
 

    const handleClick = () => {
      if (isCurValue.value || props.disabled) return;
      parent.updateValue(props.label);
    };

    let reverseState = position.value === 'left';

    const getClass = computed(()=>{
        return `${componentName} ${componentName}--${props.shape} ${reverseState ? `${componentName}--reverse` : ''}`
    })


    return {
        getClass,
        handleClick,
        shape: props.shape,
        reverseState,
        getButtonClass,
        getLabelClass,
        iconAttr
    }
   
  }
});
</script>
<style lang="scss">
@import './index.scss'
</style>
