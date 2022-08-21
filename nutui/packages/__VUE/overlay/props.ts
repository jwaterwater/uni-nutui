const overlayProps = {
  visible: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 2000
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  overlayClass: {
    type: String,
    default: ''
  },
  lockScroll: {
    type: Boolean,
    default: false
  },
  overlayStyle: {
    type: Object as PropType<CSSProperties>
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};

export default overlayProps
