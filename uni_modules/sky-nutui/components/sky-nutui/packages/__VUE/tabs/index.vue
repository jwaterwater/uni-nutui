<template src="./template.html"></template>
<script lang="ts">
import { createComponent } from '@/uni_modules/sky-nutui/components/sky-nutui/packages/utils/create';
import { component } from './common';
const { create } = createComponent('tabs');
export default create(component);
</script>
<style lang="scss" :scoped="false">
@import './index.scss'
</style>
