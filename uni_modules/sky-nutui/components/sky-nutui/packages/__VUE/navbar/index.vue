<template>
  <view v-if="safeAreaInsetTop" :style="[statusBarStyle]"></view>
  <view
    v-if="fixed && placeholder"
    class="nut-navbar--placeholder"
    :style="{ height: navHeight + 'px' }"
  >
    <view :class="classes" :style="styles" id="navBarHtml">
      <view class="nut-navbar__left" @click="handleLeft">
        <nut-icon v-if="leftShow" color="#979797" name="left"></nut-icon>
        <view v-if="leftText" class="nut-navbar__text">{{ leftText }}</view>
        <slot name="left"></slot>
      </view>
      <view class="nut-navbar__title">
        <view v-if="title" class="title" @click="handleCenter">{{
          title
        }}</view>
        <nut-icon
          v-if="titIcon"
          class="icon"
          :name="titIcon"
          @click="handleCenterIcon"
        ></nut-icon>
        <slot name="content"></slot>
      </view>
      <view class="nut-navbar__right" @click="handleRight">
        <view v-if="desc" class="nut-navbar__text">{{ desc }}</view>
        <slot name="right"></slot>
      </view>
    </view>
  </view>
  <view v-else :class="classes" :style="styles">
    <view class="nut-navbar__left" @click="handleLeft">
      <nut-icon v-if="leftShow" color="#979797" name="left"></nut-icon>
      <view v-if="leftText" class="nut-navbar__text">{{ leftText }}</view>
      <slot name="left"></slot>
    </view>
    <view class="nut-navbar__title">
      <view v-if="title" class="title" @click="handleCenter">{{ title }}</view>
      <nut-icon
        v-if="titIcon"
        class="icon"
        :name="titIcon"
        @click="handleCenterIcon"
      ></nut-icon>
      <slot name="content"></slot>
    </view>
    <view class="nut-navbar__right" @click="handleRight">
      <view v-if="desc" class="nut-navbar__text">{{ desc }}</view>
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { onMounted, computed, toRefs, ref } from 'vue'
import { createComponent } from '../../utils/create'
const { componentName, create } = createComponent('navbar')
export default create({
  props: {
    leftShow: { type: Boolean, default: true }, //左侧  是否显示返回icon
    title: { type: String, default: '' }, //中间  文字标题
    titIcon: { type: String, default: '' }, //中间  标题icon
    leftText: { type: String, default: '' }, //左侧文字
    desc: { type: String, default: '' }, //右侧   按钮文字
    fixed: {
      type: Boolean,
      default: false,
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      // 生成一个等高的占位元素
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: [Number, String],
      default: 10,
    },
  },
  computed: {
    statusBarStyle() {
      const style = {
        height: '0px',
        backgroundColor: '#fff',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: this.zIndex,
      }
      style.height = uni.getSystemInfoSync().statusBarHeight + 'px'
      return style
    },
  },
  emits: ['on-click-back', 'on-click-title', 'on-click-icon', 'on-click-right'],
  mounted() {
    if (this.fixed && this.placeholder) {
      setTimeout(async () => {
        const query = uni.createSelectorQuery().in(this)
        query
          .select('#navBarHtml')
          .boundingClientRect((rec: any) => {
            this.safeAreaInsetTop
              ? (this.navHeight =
                  rec.height + uni.getSystemInfoSync().statusBarHeight)
              : (this.navHeight = rec.height)
            console.log('navBarHtml', this.navHeight)
          })
          .exec()
      }, 100)
    }
  },
  setup(props, { emit }) {
    const { border, fixed, safeAreaInsetTop, placeholder, zIndex } =
      toRefs(props)
    let navHeight = ref(0)
    const classes = computed(() => {
      const prefixCls = componentName
      return {
        [prefixCls]: true,
        [`${prefixCls}--border`]: border.value,
        [`${prefixCls}--fixed`]: fixed.value,
        // [`${prefixCls}--safe-area-inset-top`]: safeAreaInsetTop.value
      }
    })

    const styles = computed(() => {
      return {
        zIndex: zIndex.value,
      }
    })

    function handleLeft() {
      emit('on-click-back')
    }

    function handleCenter() {
      emit('on-click-title')
    }
    function handleCenterIcon() {
      emit('on-click-icon')
    }

    function handleRight() {
      emit('on-click-right')
    }

    return {
      navHeight,
      classes,
      styles,
      handleLeft,
      handleCenter,
      handleCenterIcon,
      handleRight,
      safeAreaInsetTop,
    }
  },
})
</script>

<style lang="scss" :scoped="false">
@import './index.scss';
.nut-navbar {
  &--fixed {
    top: v-bind('statusBarStyle.height');
  }
}
</style>

