import overlayProps from './../overlay/props';
import {
  PropType
} from 'vue';
export const popupProps = {
  ...overlayProps,
  position: {
    type: String,
    default: 'center'
  },

  transition: String,

  popStyle: {
    type: Object as PropType<CSSProperties>
  },

  popClass: {
    type: String,
    default: ''
  },

  closeable: {
    type: Boolean,
    default: false
  },

  closeIconPosition: {
    type: String,
    default: 'top-right'
  },

  closeIcon: {
    type: String,
    default: 'close'
  },

  destroyOnClose: {
    type: Boolean,
    default: true
  },

  teleport: {
    type: [String],
    default: 'body'
  },

  overlay: {
    type: Boolean,
    default: true
  },

  round: {
    type: Boolean,
    default: false
  },

  isWrapTeleport: {
    type: Boolean,
    default: true
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: false
  }
};