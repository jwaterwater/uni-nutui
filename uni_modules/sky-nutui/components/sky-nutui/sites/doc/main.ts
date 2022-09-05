import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/uni_modules/sky-nutui/components/sky-nutui/sites/assets/styles/reset.scss';
import '@/uni_modules/sky-nutui/components/sky-nutui/sites/assets/styles/md-style.scss';
import DemoBlock from './components/demo-block';
import { Hover } from './directive/hover/hover';
import NutUI from '@/packages/nutui.vue';

import { isMobile } from '@/uni_modules/sky-nutui/components/sky-nutui/sites/assets/util';

if (isMobile) {
  location.replace('demo.html' + location.hash);
}

createApp(App).directive('hover', Hover).component('demo-block', DemoBlock).use(router).use(NutUI).mount('#doc');
