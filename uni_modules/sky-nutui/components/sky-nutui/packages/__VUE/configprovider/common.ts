import { computed, h, PropType } from 'vue';
export const component = {
  props: {
    theme: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div' }
  },
  setup(props: any, { slots }: any) {
      
      
      const getClass =  computed(()=>{
          return `nut-theme-${props.theme}`
      })
      
      return {
          getClass
      }
  }
};
