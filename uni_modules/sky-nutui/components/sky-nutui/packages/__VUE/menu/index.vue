<template>
  <view :class="classes">
    <view class="nut-menu__bar" :class="{ opened: opened }" ref="barRef">
      <template v-for="(item, index) in children" :key="index">
        <view
          class="nut-menu__item"
          @click="!item.disabled && toggleItem(index)"
          :class="{ disabled: item.disabled, active: item.state.showPopup }"
          :style="{ color: item.state.showPopup ? activeColor : '' }"
        >
          <view class="nut-menu__title" :class="getClasses(item.state.showPopup)">
            <view class="nut-menu__title-text">{{ item.renderTitle() }}</view>
            <nut-icon
              :name="item.titleIcon || (direction === 'up' ? 'arrow-up' : 'down-arrow')"
              size="10"
              class="nut-menu__title-icon"
            ></nut-icon>
          </view>
        </view>
      </template>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { reactive, provide, computed, ref,getCurrentInstance } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('menu');
import { onPageScroll } from '@dcloudio/uni-app'
export default create({
  props: {
    activeColor: {
      type: String,
      default: ''
    },
    overlay: {
      type: Boolean,
      default: true as const
    },
    lockScroll: {
      type: Boolean,
      default: true as const
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'down'
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: false
    },
    titleClass: [String]
  },
  
  methods: {
      updateOffset () {
          setTimeout(() => {
            uni.createSelectorQuery().in(this)
              .select('.nut-menu__bar.opened')
              .boundingClientRect((rect) => {
                if (this.direction === 'down') {
                  this.offset = rect.bottom;
                } else {
                  this.offset = uni.getSystemInfoSync().windowHeight - rect.top;
                }
              })
              .exec();
          }, 100);
      },
      toggleItem (active) {
          this.children.forEach((item, index) => {
            if (index === active) {
              this.updateOffset();
              item.toggle();
            } else if (item.state.showPopup) {
              item.toggle(false, { immediate: true });
            }
          });
      }
  },
 
  setup(props) {
    const barRef = ref<HTMLElement>();
    const offset = ref(0);
    const isScrollFixed = ref(false);

    const useChildren = () => {
      const publicChildren: any[] = reactive([]);
      const internalChildren: any[] = reactive([]);

      const linkChildren = (value?: any) => {
        const link = (child: any) => {
          if (child.proxy) {
            internalChildren.push(child);
            publicChildren.push(child.proxy as any);
          }
        };

        provide(
          'menuParent',
          Object.assign(
            {
              link,
              children: publicChildren,
              internalChildren
            },
            value
          )
        );
      };

      return {
        children: publicChildren,
        linkChildren
      };
    };

    const { children, linkChildren } = useChildren();

    const opened = computed(() => children.some((item) => item.state.showWrapper));

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        'scroll-fixed': isScrollFixed.value
      };
    });

   
    
   

    linkChildren({ props, offset });

    

    const onScroll = (res: { scrollTop: number }) => {
      const { scrollFixed } = props;

      const scrollTop = res.scrollTop;

      isScrollFixed.value = scrollTop > (typeof scrollFixed === 'boolean' ? 30 : Number(scrollFixed));
    };

    const getClasses = (showPopup: boolean) => {
      let str = '';
      const { titleClass } = props;

      if (showPopup) {
        str += 'active';
      }

      if (titleClass) {
        str += ` ${titleClass}`;
      }

      return str;
    };

    onPageScroll((res) => {
      const { scrollFixed } = props;

      if (scrollFixed) {
        onScroll(res);
      }
    });

    return {
        offset,
      children,
      opened,
      classes,
      barRef,
      getClasses
    };
  }
});
</script>
<style lang="scss">
    @import './index.scss'
</style>