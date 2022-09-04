/**
  获取元素的大小及其相对于视口的位置，等价于 Element.getBoundingClientRect。
  width 宽度	number
  height 高度	number
  top	顶部与视图窗口左上角的距离	number
  left	左侧与视图窗口左上角的距离	number
  right	右侧与视图窗口左上角的距离	number
  bottom	底部与视图窗口左上角的距离	number
 */

import { Ref, unref } from 'vue';
function isWindow(val: unknown): val is Window {
  return val === window;
}
export const useTaroRect = (elementRef: (Element | Window | any) | Ref<Element | Window | any>, self: any): any => {
  
    return new Promise((resolve) => {
        const query = uni.createSelectorQuery().in(self);
        query
          .select(elementRef)
          .boundingClientRect((rect: any) => {
              resolve(rect)
          })
          .exec();
    })

};
