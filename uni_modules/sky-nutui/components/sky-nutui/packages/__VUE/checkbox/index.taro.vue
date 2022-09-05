<script lang="ts">
import { createComponent } from '@/uni_modules/sky-nutui/components/sky-nutui/packages/utils/create';
const { create, componentName } = createComponent('checkbox');
import { component } from './common';
import nutIcon from '../icon/index.taro.vue';
export default create(component(componentName, nutIcon));
</script>
