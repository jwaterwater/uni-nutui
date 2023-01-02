<template>
  <view  v-if="isWrapTeleport">
    <nut-overlay
      v-if="overlay"
      :visible="visible"
      :close-on-click-overlay="closeOnClickOverlay"
      :overlayClass="overlayClass"
      :overlayStyle="overlayStyle"
      :z-index="zIndex"
      :lock-scroll="lockScroll"
      :duration="duration"
      @click="onClickOverlay"
    />
    
    <Transition  :name="transitionName" @after-enter="onOpened" @after-leave="onClosed">
      <view v-show="visible" :class="classes" :style="popStyle" @click="onClick" ref="popupRef">
        <slot v-if="showSlot"></slot>
        <view
          v-if="closed"
          @click="onClickCloseIcon"
          class="nutui-popup__close-icon"
          :class="'nutui-popup__close-icon--' + closeIconPosition"
        >
          <nut-icon :name="closeIcon" size="12px" />
        </view>
      </view>
    </Transition>
  </view>
  <view v-else>
    <nut-overlay
      v-if="overlay"
      :visible="visible"
      :close-on-click-overlay="closeOnClickOverlay"
      :overlayClass="overlayClass"
      :overlayStyle="overlayStyle"
      :z-index="zIndex"
      :lock-scroll="lockScroll"
      :duration="duration"
      @click="onClickOverlay"
    />
    
    <Transition  :name="transitionName" @after-enter="onOpened" @after-leave="onClosed">
      <view v-show="visible" class="nutLeftSlideIn" :class="classes" :style="popStyle" @click="onClick">
        <slot v-if="showSlot"></slot>
        <view
          v-if="closed"
          @click="onClickCloseIcon"
          class="nutui-popup__close-icon"
          :class="'nutui-popup__close-icon--' + closeIconPosition"
        >
          <nut-icon :name="closeIcon" size="12px" />
        </view>
      </view>
    </Transition>
  </view>
</template>
<script lang="ts">
import {
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
  watch,
  computed,
  reactive,
  PropType,
  CSSProperties,
  toRefs,
  ref
} from 'vue';
import { inject } from 'vue'
import { useLockScroll } from './use-lock-scroll';
import overlayProps from './../overlay/props';
import overlay from '../overlay/index.vue';
import icon from '../icon/index.vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('popup');

let _zIndex = 2000;

export const popupProps = {
  ...overlayProps,
  position: {
    type: String,
    default: 'center'
  },

  transition: String,

  style: {
    type: Object as PropType<CSSProperties>
  },
  popStyle: {
    type: Object as PropType<CSSProperties>
  },

  popClass: {
    type: String,
    default: ''
  },

  closeable: {
    type: Boolean,
    default: false
  },

  closeIconPosition: {
    type: String,
    default: 'top-right'
  },

  closeIcon: {
    type: String,
    default: 'close'
  },

  destroyOnClose: {
    type: Boolean,
    default: true
  },

  teleport: {
    type: [String],
    default: 'body'
  },

  overlay: {
    type: Boolean,
    default: true
  },

  round: {
    type: Boolean,
    default: false
  },

  isWrapTeleport: {
    type: Boolean,
    default: false
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: false
  }
};

export default create({
  components: {
    [overlay.name]: overlay,
    [icon.name]: icon
  },
  props: {
    ...popupProps
  },
  emits: ['click', 'click-close-icon', 'open', 'close', 'opend', 'closed', 'update:visible', 'click-overlay'],
  options: {
      virtualHost: true
  },
  setup(props, { emit }) {
      const lockPage = inject('lockPage',(isLock)=>{},false)
      
    const popupRef = ref();
    const state = reactive({
      zIndex: props.zIndex,
      showSlot: true,
      transitionName: `popup-fade-${props.position}`,
      slideTransitionName: `nut-slide-${props.position}`,
      overLayCount: 1,
      keepAlive: false,
      closed: props.closeable
    });
    const visibleLocal = ref(false)
   

    const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['round']: props.round,
        [`popup-${props.position}`]: true,
        [`popup-${props.position}--safebottom`]: props.position === 'bottom' && props.safeAreaInsetBottom,
        [props.popClass]: true,
        [`${state.slideTransitionName}In`]: visibleLocal.value,
        [`${state.slideTransitionName}Out`]: !visibleLocal.value,
      };
    });

    const popStyle = computed(() => {
      return {
        zIndex: state.zIndex,
        animationDuration: props.duration ? `${props.duration}s` : 'initial',
        ...props.popStyle
      };
    });

    const open = () => {
      if (props.zIndex != 2000) {
        _zIndex = Number(props.zIndex);
      }
      visibleLocal.value = true
      emit('update:visible', true);
      lockPage(true)
      state.zIndex = ++_zIndex;
      if (props.destroyOnClose) {
        state.showSlot = true;
      }
      emit('open');
    };

    const close = () => {
      lockPage(false)
      visibleLocal.value = false
      setTimeout(()=>{
          emit('update:visible', false);
      },+props.duration * 1000)
      if (props.destroyOnClose) {
        setTimeout(() => {
          state.showSlot = false
          emit('close');
        }, +props.duration * 1000);
      }
    };

    const onClick = (e: Event) => {
      emit('click', e);
    };

    const onClickCloseIcon = (e: Event) => {
      emit('click-close-icon', e);
      close();
    };

    const onClickOverlay = (e: Event) => {
      if (props.closeOnClickOverlay) {
        emit('click-overlay', e);
        close();
      }
    };

    const onOpened = (e: Event) => {
      emit('opend', e);
    };

    const onClosed = (e: Event) => {
      emit('closed', e);
    };

    onMounted(() => {
      props.transition
        ? (state.transitionName = props.transition)
        : (state.transitionName = `popup-slide-${props.position}`);

      props.visible && open();
    });

    onBeforeUnmount(() => {
      props.visible && close();
    });

    onBeforeMount(() => {
      if (props.visible) {
        unlockScroll();
      }
    });

    onActivated(() => {
      if (state.keepAlive) {
        emit('update:visible', true);
        state.keepAlive = false;
      }
    });

    onDeactivated(() => {
      if (props.visible) {
        close();
        state.keepAlive = true;
      }
    });

    watch(
      () => props.visible,
      (value) => {
        if (value) {
          open();
        } else {
          close();
        }
      }
    );

    watch(
      () => props.position,
      (value) => {
        value === 'center' ? (state.transitionName = 'popup-fade') : (state.transitionName = `popup-slide-${value}`);
      }
    );

    watch(
      () => props.closeable,
      (value) => {
        state.closed = value;
      }
    );
    

    return {
      ...toRefs(state),
      popStyle,
      classes,
      onClick,
      onClickCloseIcon,
      onClickOverlay,
      onOpened,
      onClosed,
      popupRef
    };
  }
});
</script>
<style lang="scss">
@import './index.scss'
</style>
