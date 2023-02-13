
<template>
  <div :class="classes">
    <div class="nut-signature-inner">
      <canvas
        class="spcanvas"
        :id="refRandomId"
        canvasId="spcanvas"
        :canvas-id="refRandomId"
        type="2d"
        disable-scroll="true"
        @touchstart="startEventHandler"
        @touchmove="moveEventHandler"
        @touchend="endEventHandler"
        @touchleave="leaveEventHandler"
      ></canvas>
    </div>
    <nut-button class="nut-signature-btn" type="default" @click="clear()">{{ translate('reSign') }}</nut-button>
    <nut-button class="nut-signature-btn" type="primary" @click="confirm()">{{ translate('confirm') }}</nut-button>
  </div>
</template>
<script lang="ts">
import { ref, reactive, onMounted, computed ,getCurrentInstance, nextTick} from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create, translate } = createComponent('signature');

export default create({
  props: {
    customClass: {
      type: String,
      default: ''
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: '#000'
    },
    type: {
      type: String,
      default: 'png'
    },
    unSupportTpl: {
      type: String,
      default: ''
    }
  },
  components: {},
  emits: ['confirm', 'clear'],

  setup(props, { emit }) {
      const refRandomId = 'canvas-'+Math.random().toString(36).slice(-8);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      };
    });
    const state: any = reactive({
      canvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null
    });

    const startEventHandler = (event: MouseEvent) => {
      event.preventDefault();
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;
    };

    const moveEventHandler =  (event) => {

      let evt = event.changedTouches[0];
      let mouseX = evt.x;
      let mouseY = evt.y;
      console.log(mouseX, mouseY)
     
      state.ctx.lineTo(mouseX, mouseY);
      state.ctx.stroke();
    };

    const endEventHandler = (event) => {
        state.ctx.draw(true);
    };
    const leaveEventHandler = (event) => {
        state.ctx.draw(true);
    };
    
    const clear = () => {
      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      state.ctx.closePath();
        state.ctx.draw()
      emit('clear');
    };

    const confirm = () => {
      onSave();
    };

    const onSave = () => {
      uni.canvasToTempFilePath({
        canvasId: refRandomId,
        success: function(res) {
          // 在H5平台下，tempFilePath 为 base64
          emit('confirm', res.tempFilePath);
        } 
      })
    };

    const {proxy} = getCurrentInstance()
    onMounted(() => {
        uni.createSelectorQuery().in(proxy)
        .select('#'+refRandomId)
        .fields(
          {
            size: true
          },
          function (res) {
            const ctx = uni.createCanvasContext(refRandomId)
            console.log(res,'res')
            
            //window.ctx = ctx
            state.ctx = ctx;
            state.canvasWidth = res.width;
            state.canvasHeight = res.height;
          }
        )
        .exec();
    });
    return {
      confirm,
      clear,
      classes,
      startEventHandler,
      moveEventHandler,
      endEventHandler,
      leaveEventHandler,
      translate,
      refRandomId
    };
  }
});
</script>

<style lang="scss">
@import './index.scss'
</style>
