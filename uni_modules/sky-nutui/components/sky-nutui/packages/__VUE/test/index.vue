<template>
    <view>
        <slot name="title" :test='1'>123</slot>
    </view>
</template>

<script setup>
    import { useSlots, useAttrs } from 'vue'
    const slots = useSlots()
    
    console.log(useSlots(),'useSlots')
</script>

<style>
</style>