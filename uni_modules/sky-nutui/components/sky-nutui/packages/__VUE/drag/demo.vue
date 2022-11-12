 <template>
  <div class="demo full">
    <h2 class="h2">{{ translate('basic') }}</h2>
    <nut-drag :top="120" :left="8">
      <nut-button type="primary">{{ translate('dragBasic') }}</nut-button>
    </nut-drag>
    <h2 class="h2" style="top: 30px; position: relative">{{ translate('direction') }}</h2>
    <nut-drag direction="x" :top="200" :left="8">
      <nut-button type="primary">{{ translate('directionX') }}</nut-button>
    </nut-drag>
    <nut-drag direction="y" :top="200" :left="250">
      <nut-button type="primary">{{ translate('directionY') }}</nut-button>
    </nut-drag>
    <h2 class="h2" style="top: 60px; position: relative">{{ translate('attract') }}</h2>
    <nut-drag direction="x" :attract="true" :top="275" :left="8" >
      <nut-button type="primary">{{ translate('attractText') }}</nut-button>
    </nut-drag>
    <h2 class="h2" style="top: 90px; position: relative">{{ translate('limitBoundaries') }}</h2>
    <div class="drag-boundary"></div>
    <nut-drag
      :boundary="{ top: 361, left: 9, bottom: bottom(), right: right() }"
       :top="400" :left="50"
    >
      <nut-button type="primary">{{ translate('limitBoundaries') }}</nut-button>
    </nut-drag>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo, translate } = createComponent('drag');
import { useTranslate } from '../../../sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      dragBasic: '触摸移动',
      direction: '限制拖拽方向',
      directionX: '只能X轴拖动',
      directionY: '只能Y轴拖动',
      attract: '自动吸边',
      attractText: '按钮',
      limitBoundaries: '限制拖拽边界'
    },
    'en-US': {
      basic: 'Basic Usage',
      dragBasic: 'Button',
      direction: 'Limit Direction',
      directionX: 'X axis',
      directionY: 'Y axis',
      attract: 'Attract',
      attractText: 'Button',
      limitBoundaries: 'Limit Boundaries'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    function right() {
        let width = uni.getSystemInfoSync().windowWidth
      return width - 300 - 9;
    }
    function bottom() {
        let height = uni.getSystemInfoSync().windowHeight
      return height - 559;
    }
    return {
      right,
      bottom,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.drag-boundary {
  position: absolute;
  top: 360px;
  left: 8px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}
</style>
