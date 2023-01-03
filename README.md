

# 项目介绍
##### [NutUI](https://nutui.jd.com/#/zh-CN/component/button "NutUI")是京东官方开发维护的一套京东风格的Vue组件库,是为[Taro](https://taro-docs.jd.com/taro/docs/ "Taro")工具设计的(Taro是类似于Uni-app的多端工具)


##### 本项目基于NutUI,将代码适配uni-app框架,并保持和官方同步更新


##### 开源地址:https://github.com/jwaterwater/uni-nutui
##### 可以给我点个star


## NutUI官方文档
[https://nutui.jd.com/#/zh-CN/component/button](https://nutui.jd.com/#/zh-CN/component/button "https://nutui.jd.com/#/zh-CN/component/button")



# 演示
微信小程序
![](https://cdn.haokui.top/chick/1/20220905/f50d2cbc858f072d479d79742917c226.jpg?imageView2/1/w/200/h/200)
H5
![](https://cdn.haokui.top/chick/1/20220909/223445daa1bff63c05a320c23c2e44d4.png?imageView2/1/w/200/h/200)
Android
![](https://cdn.1s1s.vip/nutui/download.png?imageView2/1/w/200/h/200)


## 以下是暂未支持的组件
Elevator 电梯楼层
Indicator 指示器
SideNavBar 侧边栏导航
TextArea 文本域
BackTop 返回顶部
Collapse 折叠面板
CountUp 数字滚动
Swiper 轮播  建议使用uniapp自带组件替换
AddressList 地址列表
InfiniteLoading 滚动加载  建议使用onReachBottom和onPullDownRefresh替代
Notify 消息通知 (动态调用模式) uniapp无法操作dom
Toast 吐司 使用uni.showToast替代


## Hbuilder开发使用流程
#### 1) 在uni.scss文件引入variables.scss,全局样式变量,可以自定义主题颜色
```css
@import '@/uni_modules/sky-nutui/components/sky-nutui/packages/styles/variables.scss';
```
#### 2) App.vue文件引入app.scss,包含一些需要全局覆盖的样式
```css
<style lang="scss">
    @import '@/uni_modules/sky-nutui/components/sky-nutui/app.scss';
</style>
```
#### 3) 配置easycom自动引入,在package.json加入


```json
"easycom": {
    "autoscan": true,
    "custom": {
        "nut-(.*)?-(.*)": "uni-nutui/components/sky-nutui/packages/__VUE/$1$2/index.vue",
        "nut-(.*)": "uni-nutui/components/sky-nutui/packages/__VUE/$1/index.vue"
    }
}
```
#### 4) 接下来就可以愉快的使用组件了
```html
<template>
  <nut-button type="primary">主要按钮</nut-button>
  <nut-button type="info">信息按钮</nut-button>
  <nut-button type="default">默认按钮</nut-button>
  <nut-button type="danger">危险按钮</nut-button>
  <nut-button type="warning">警告按钮</nut-button>
  <nut-button type="success">成功按钮</nut-button>
  <nut-cell-group title="链接 | 分组用法" desc="使用 nut-cell-group 支持 title desc slots">
    <nut-cell title="链接" is-link></nut-cell>
    <nut-cell title="URL 跳转" desc="https://m.jd.com" is-link url="https://m.jd.com"></nut-cell>
    <nut-cell title="路由跳转 ’/‘ " to="/"></nut-cell>
  </nut-cell-group>
</template>
```


## cli开发使用流程
#### 1) 安装
```bash
npm i uni-nutui
```
#### 2) 在uni.scss文件引入variables.scss,全局样式变量,可以自定义主题颜色
```css
@import 'uni-nutui/components/sky-nutui/packages/styles/variables.scss';
```
#### 3) App.vue文件引入app.scss,包含一些需要全局覆盖的样式
```css
<style lang="scss">
    @import 'uni-nutui/components/sky-nutui/app.scss'
</style>
```
#### 4) 配置easycom自动引入,在package.json加入


```json
"easycom": {
    "autoscan": true,
    "custom": {
        "nut-(.*)?-(.*)": "uni-nutui/components/sky-nutui/packages/__VUE/$1$2/index.vue",
        "nut-(.*)": "uni-nutui/components/sky-nutui/packages/__VUE/$1/index.vue"
    }
}
```

#### 5) 项目根目录创建文件 vue.config.js
```js
module.exports = {
    transpileDependencies: ['uni-nutui']
}
```



#### 6) 接下来就可以愉快的使用组件了
```html
<template>
  <nut-button type="primary">主要按钮</nut-button>
  <nut-button type="info">信息按钮</nut-button>
  <nut-button type="default">默认按钮</nut-button>
  <nut-button type="danger">危险按钮</nut-button>
  <nut-button type="warning">警告按钮</nut-button>
  <nut-button type="success">成功按钮</nut-button>
  <nut-cell-group title="链接 | 分组用法" desc="使用 nut-cell-group 支持 title desc slots">
    <nut-cell title="链接" is-link></nut-cell>
    <nut-cell title="URL 跳转" desc="https://m.jd.com" is-link url="https://m.jd.com"></nut-cell>
    <nut-cell title="路由跳转 ’/‘ " to="/"></nut-cell>
  </nut-cell-group>
</template>
```



## 官方文档
[https://nutui.jd.com/#/zh-CN/component/button](https://nutui.jd.com/#/zh-CN/component/button "https://nutui.jd.com/#/zh-CN/component/button")



## 交流群
![](https://cdn.1s1s.vip/nutui/contact_me_qr.png)




