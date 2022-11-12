<template>
  <form class="nut-form" action="#" @submit.prevent="() => false">
    <nut-cell-group>
      <slot></slot>
    </nut-cell-group>
  </form>
</template>
<script lang="ts">
import { createComponent } from '../../utils/create';
const { create } = createComponent('form');
import { component } from './common';
export default create(component);
</script>
<style lang="scss">
@import './index.scss'
</style>
