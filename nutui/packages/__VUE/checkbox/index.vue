<script lang="ts">
import { createComponent } from '@/nutui/packages/utils/create';
const { create, componentName } = createComponent('checkbox');
import { component } from './common';
import nutIcon from '../icon/index.vue';
export default create(component(componentName, nutIcon));
</script>
<style lang="scss">
@import './index.scss'
</style>
