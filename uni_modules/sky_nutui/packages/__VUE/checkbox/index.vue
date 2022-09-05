<template>
    <view @click="handleClick" :class="getClass">
        <nut-icon
        :name="iconParams.name"
        :size="iconParams.size"
        :popClass="iconParams.class"
        :class-prefix="iconParams.classPrefix"
        :font-class-name="iconParams.fontClassName"
        ></nut-icon>
        <view :class="getLabelClass">
            <slot></slot>
        </view>
    </view>
</template>
<script lang="ts">
import { createComponent } from '@/uni_modules/sky_nutui/packages/utils/create';
const { create, componentName } = createComponent('checkbox');
import { component } from './common';
import nutIcon from '../icon/index.vue';
export default create(component(componentName, nutIcon));
</script>
<style lang="scss">
@import './index.scss'
</style>
