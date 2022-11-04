<template>
	<view  style="width: 100%;padding: 0 25rpx;box-sizing: border-box;">
    
		<nut-cell-group title="基础组件">
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/button/demo" title="Button 按钮" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/cell/demo" title="Cell 单元格" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/configprovider/demo" title="ConfigProvider 全局配置" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/icon/demo" title="Icon 图标" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/image/demo" title="Image 图片" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/overlay/demo" title="OverLay 遮罩层" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/popup/demo" title="Popup 弹出层" is-link></nut-cell>
        </nut-cell-group>
        
        <nut-cell-group title="布局组件">
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/divider/demo" title="Divider 分割线" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/grid/demo" title="Grid 宫格" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/layout/demo" title="Layout 布局" is-link></nut-cell>
        </nut-cell-group>
        
        
        <nut-cell-group title="导航组件">
            <!--
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/elevator/demo" title="Elevator 电梯楼层" is-link></nut-cell>
            -->
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/fixednav/demo" title="FixedNav 悬浮导航" is-link></nut-cell>
            <!--
            
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/fixednav/demo" title="Indicator 指示器" is-link></nut-cell>
            -->
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menu/demo" title="Menu 菜单" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/navbar/demo" title="Navbar 头部导航" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menu/demo" title="Menu 菜单" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/pagination/demo" title="Pagination 分页" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/sidenavbar/demo" title="SideNavBar 侧边栏导航" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/tabbar/demo" title="Tabbar 标签栏" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/tabs/demo" title="Tabs 选项卡切换" is-link></nut-cell>
        </nut-cell-group>
        
        <nut-cell-group title="数据录入">
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/calendar/demo" title="Calendar 日历" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/cascader/demo" title="Cascader 级联选择器" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/checkbox/demo" title="Checkbox 复选按钮" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/datepicker/demo" title="DatePicker 日期选择器" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/form/demo" title="Form 表单" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/input/demo" title="Input 输入框" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/inputnumber/demo" title="InputNumber 数字输入框" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/numberkeyboard/demo" title="NumberKeyboard 数字键盘" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/picker/demo" title="Picker 选择器" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/radio/demo" title="Radio 单选按钮" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/range/demo" title="Range 区间选择器" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/rate/demo" title="Rate 评分" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/searchbar/demo" title="SearchBar 搜索栏" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/shortpassword/demo" title="ShortPassword 短密码" is-link></nut-cell>
            <!--
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/textarea/demo" title="TextArea 文本域" is-link></nut-cell>
            -->
        </nut-cell-group>
        
        
        <nut-cell-group title="操作反馈">
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/actionsheet/demo" title="ActionSheet 动作面板" is-link></nut-cell>
            <!--
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/backtop/demo" title="BackTop 返回顶部" is-link></nut-cell>
            -->
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/dialog/demo" title="Dialog 对话框" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/drag/demo" title="Drag 拖拽" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/notify/demo" title="Notify 消息通知" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/swipe/demo" title="Swipe 滑动手势" is-link></nut-cell>
        </nut-cell-group>
        
        
        <nut-cell-group title="展示组件">
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/animate/demo" title="Animate 动画/动效" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/badge/demo" title="Badge 徽标" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/avatar/demo" title="Avatar 头像" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/circleprogress/demo" title="CircleProgress 环形进度条" is-link></nut-cell>
            <!--
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/collapse/demo" title="Collapse 折叠面板" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/countup/demo" title="CountUp 数字滚动" is-link></nut-cell>
            -->
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/countdown/demo" title="CountDown 倒计时" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/empty/demo" title="Empty 空状态" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/noticebar/demo" title="NoticeBar 公告栏" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/popover/demo" title="Popover 气泡弹出框" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/price/demo" title="Price 价格" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/progress/demo" title="Progress 进度条" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/skeleton/demo" title="Skeleton 骨架屏" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/steps/demo" title="Steps 步骤条" is-link></nut-cell>
            <!--
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/swiper/demo" title="Swiper 轮播" is-link></nut-cell>
            -->
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/table/demo" title="Table 表格" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/tag/demo" title="Tag 标签" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/trendarrow/demo" title="TrendArrow 趋势箭头" is-link></nut-cell>
        </nut-cell-group>
        
        <nut-cell-group title="特色组件">
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/address/demo" title="Address 地址" is-link></nut-cell>
            <!--
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/addresslist/demo" title="AddressList 地址列表" is-link></nut-cell>
            -->
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/card/demo" title="Card 商品卡片" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/category/demo" title="Category 商品分类" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/barrage/demo" title="Barrage 弹幕" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/ecard/demo" title="Ecard 虚拟电子卡" is-link></nut-cell>
            <nut-cell to="/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/sku/demo" title="Sku 商品规格选择" is-link></nut-cell>
        </nut-cell-group>
	</view>
</template>


<script setup>
   const onClick = (e) => {
       console.log(e)
   }
  
</script>



<style>
	.content {
        overflow: hidden !important;
    }
    page {
        background-color: #ededed;
        height: 100%;
        padding-bottom: 25rpx;
    }
    
  
    
    
</style>
