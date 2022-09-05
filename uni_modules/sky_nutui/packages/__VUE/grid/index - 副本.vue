<template>
    <view
    :class="rootClass.value"
    :style="rootStyle.value"
    >
    <slot></slot>
    </view>
</template>

<script lang="ts">
import { createComponent } from '@/uni_modules/sky_nutui/packages/utils/create';
import { component } from './common';
const { create } = createComponent('grid');
export default create(component);
</script>
<style lang="scss">
@import './index.scss'
</style>
