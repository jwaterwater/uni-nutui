<template>
    <view :class="getClass">
        <slot></slot>
    </view>
</template>
<script lang="ts">
import { createComponent } from '@/uni_modules/sky-nutui/components/sky-nutui/packages/utils/create';
const { componentName, create } = createComponent('config-provider');
import { component } from './common';
export default create(component);
</script>
<style lang="scss">
@import './index.scss'
</style>
