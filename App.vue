<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
    @import '@/uni_modules/sky-nutui/components/sky-nutui/app.scss';
    
    .demo {
      height: 100%;
      background: #f7f8fa;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 17px 17px 17px;
    
      &.full {
        padding: 0 0 0 0;
        .h2 {
          padding-left: 27px;
        }
      }
    
      &.bg-w {
        background: #fff;
      }
    
      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
      > .h2 {
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 14px;
        color: rgba(144, 156, 164, 1);
        padding: 0 10px;
        font-weight: normal;
      }
      > p {
        font-size: 12px;
      }
    
      .card {
        padding: 25px 18px;
        background: rgba(255, 255, 255, 1);
      }
    }
	/*每个页面公共css */
    button {
        background-color: #f8f8f8;
        border-radius: 0;
        box-sizing: border-box;
        display: inline-block;
        margin-left: 0;
        margin-right: 0;
        overflow: hidden;
        padding-left: 0;
        padding-right: 0;
        position: relative;
        text-align: center;
        text-decoration: none;
    }
    button:after {
        border: none;
        height: 0;
    }
</style>
