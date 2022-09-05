<template>
    <view
    :class="rootClass"
    :style="rootStyle"
    >
        <slot></slot>
    </view>
</template>

<script lang="ts">
import { createComponent } from '@/uni_modules/sky-nutui/components/sky-nutui/packages/utils/create';
import { component } from './common';
const { create } = createComponent('grid');
export default create(component);
</script>
<style lang="scss">
@import './index.scss'
</style>
