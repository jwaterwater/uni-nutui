<template src="./template.html"></template>
<script lang="ts">
import { createComponent } from '@/nutui/packages/utils/create';
import { component } from './common';
const { create } = createComponent('tabs');
export default create(component);
</script>
<style lang="scss">
@import './index.scss'
</style>
