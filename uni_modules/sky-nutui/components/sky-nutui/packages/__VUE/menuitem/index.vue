<template>
  <view :class="classes" v-show="state.showWrapper&&parentOffset>0">
    <div
      v-show="state.isShowPlaceholderElement"
      @click="handleClickOutside"
      class="placeholder-element"
      :class="{ up: parent.props.direction === 'up' }"
      :style="placeholderElementStyle"
    >
    </div>
    <nut-popup
      :popStyle="
        parent.props.direction === 'down' ? { top: 'calc(var(--window-top) + '+parent.offset.value+'px)' } : { bottom: 'calc(var(--window-bottom) + '+parent.offset.value+'px)',top: 'auto' }
      "
      :overlayStyle="
        parent.props.direction === 'down' ? { top: 'calc(var(--window-top) + '+parent.offset.value+'px)' } : { bottom: 'calc(var(--window-bottom) + '+parent.offset.value+'px)',top: 'auto' }
      "
      v-bind="$attrs"
      v-model:visible="state.showPopup"
      :position="parent.props.direction === 'down' ? 'topMenu' : 'bottomMenu'"
      :duration="parent.props.duration"
      pop-class="nut-menu__pop"
      overlayClass="nut-menu__overlay"
      :overlay="parent.props.overlay"
      @close="handleClose"
      :lockScroll="parent.props.lockScroll"
      :isWrapTeleport="false"
      :close-on-click-overlay="parent.props.closeOnClickOverlay"
    >
      <view class="nut-menu-item__content">
        <view
          v-for="(option, index) in options"
          :key="index"
          class="nut-menu-item__option"
          :class="[{ active: option.value === modelValue }]"
          :style="{ 'flex-basis': 100 / cols + '%' }"
          @click="onClick(option)"
        >
          <nut-icon
            :class="{ activeTitleClass: option.value === modelValue, inactiveTitleClass: option.value !== modelValue }"
            v-if="option.value === modelValue"
            :name="optionIcon"
            :color="parent.props.activeColor"
          ></nut-icon>
          <view
            :class="{ activeTitleClass: option.value === modelValue, inactiveTitleClass: option.value !== modelValue }"
            :style="{ color: option.value === modelValue ? parent.props.activeColor : '' }"
            >{{ option.text }}</view
          >
        </view>
        <slot></slot>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { reactive, PropType, inject, getCurrentInstance, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('menu-item');
import Icon from '../icon/index.vue';
import Popup from '../popup/index.vue';

export default create({
  props: {
    title: String,
    options: {
      type: Array as PropType<import('./type').MenuItemOption[]>,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: null as unknown as PropType<unknown>,
    cols: {
      type: Number,
      default: 1
    },
    titleIcon: String,
    activeTitleClass: String,
    inactiveTitleClass: String,
    optionIcon: {
      type: String,
      default: 'Check'
    }
  },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, slots }) {
    const state = reactive({
      showPopup: false,
      transition: true,
      showWrapper: false,
      isShowPlaceholderElement: false
    });

    const useParent: any = () => {
      const parent = inject('menuParent', null);

      if (parent) {
        // 获取子组件自己的实例
        const instance = getCurrentInstance()!;

        const { link } = parent;

        // @ts-ignore
        link(instance);

        return {
          parent
        };
      }
    };

    const { parent } = useParent();
    
    const parentOffset = computed(()=>{
        return parent.offset.value
    })

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const placeholderElementStyle = computed(() => {
      const heightStyle = { height: 'calc(var(--window-top) + '+parent.offset.value+'px)'  };

      if (parent.props.direction === 'down') {
        return heightStyle;
      } else {
        return { ...heightStyle, top: 'auto' };
      }
    });

    const toggle = (show = !state.showPopup, options: { immediate?: boolean } = {}) => {
      if (show === state.showPopup) {
        return;
      }

      state.showPopup = show;
      if(!show) {
          state.isShowPlaceholderElement = show;
      }else{
          state.isShowPlaceholderElement = show;
      }
      // state.transition = !options.immediate;

      if (show) {
        state.showWrapper = true;
      }
    };

    const renderTitle = () => {
      if (props.title) {
        return props.title;
      }

      const match: any = props.options?.find((option: any) => option.value === props.modelValue);

      return match ? match.text : '';
    };

    const onClick = (option: import('./type').MenuItemOption) => {
      state.showPopup = false;
      state.isShowPlaceholderElement = false;

      if (option.value !== props.modelValue) {
        emit('update:modelValue', option.value);
        emit('change', option.value);
      }
    };

    const handleClose = () => {
        console.log('onclose')
      state.showWrapper = false;
      state.isShowPlaceholderElement = false;
    };

    const handleClickOutside = () => {
      state.showPopup = false;
    };

    return {
      classes,
      placeholderElementStyle,
      renderTitle,
      state,
      parent,
      toggle,
      onClick,
      handleClose,
      handleClickOutside,
      parentOffset
    };
  }
});
</script>
<style lang="scss">
@import './index.scss'
</style>
