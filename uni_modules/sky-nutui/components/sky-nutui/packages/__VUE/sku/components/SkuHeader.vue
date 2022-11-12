<template>
  <view class="nut-sku-header">
    <image :src="goods.imagePath" style="height: 100px;width: 100px;margin-right: 12px;"></image> 
    <view class="nut-sku-header-right">
      <template v-if="getSlots('sku-header-price')">
        <slot name="sku-header-price"></slot>
      </template>

      <template v-if="getSlots('sku-header-extra')">
        <slot name="sku-header-extra"></slot>
      </template>
     
    </view>
  </view>
</template>
<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import { createComponent } from '../../../utils/create';
const { componentName, create, translate } = createComponent('sku-header');

export default create({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  emits: [],
  setup(props: any, { emit, slots }) {
      console.log(slots,'slots',props)
    const getSlots = (name: string) => slots[name];

    return {
      getSlots,
      translate
    };
  }
});
</script>
