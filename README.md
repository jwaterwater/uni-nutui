# 项目介绍
##### [NutUI](https://nutui.jd.com/#/zh-CN/component/button "NutUI")是京东官方开发维护的一套京东风格的Vue组件库,是为[Taro](https://taro-docs.jd.com/taro/docs/ "Taro")工具设计的(Taro是类似于Uni-app的多端工具)

##### 本项目基于NutUI,将代码适配uni-app框架,并保持和官方同步更新

##### 开源地址:https://github.com/jwaterwater/uni-nutui
##### 可以给我点个star

## NutUI官方文档
[https://nutui.jd.com/#/zh-CN/component/button](https://nutui.jd.com/#/zh-CN/component/button "https://nutui.jd.com/#/zh-CN/component/button")


# 演示
![](https://cdn.haokui.top/chick/1/20220905/f50d2cbc858f072d479d79742917c226.jpg)
![](https://cdn.haokui.top/chick/1/20220909/223445daa1bff63c05a320c23c2e44d4.png)

## 使用流程
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
        "nut-(.*)?-(.*)": "@/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/$1$2/index.vue",
        "nut-(.*)": "@/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/$1/index.vue"
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

## 官方文档
[https://nutui.jd.com/#/zh-CN/component/button](https://nutui.jd.com/#/zh-CN/component/button "https://nutui.jd.com/#/zh-CN/component/button")


## 咨询QQ 1052256521



