<template>
    <view :class="getClass">
        <slot></slot>
    </view>
</template>
<script lang="ts">
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('config-provider');
import { component } from './common';
export default create(component);
</script>
<style lang="scss">
@import './index.scss'
</style>
